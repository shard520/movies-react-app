export const getUser = async (setUser, navigate, setStayLoggedIn) => {
  try {
    const savedUser = localStorage.getItem('credentials');

    if (!savedUser) {
      navigate('/login');
      return;
    }

    const userCreds = JSON.parse(savedUser);

    const response = await fetch(`${process.env.REACT_APP_REST_API}token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userCreds.token}`,
      },
    });

    if (!response.ok) {
      navigate('/signup');
      return;
    } else {
      const fetchedUser = await response.json();

      setUser({
        username: fetchedUser.user.username,
        email: fetchedUser.user.email,
        token: fetchedUser.token,
      });

      // Set stayLoggedIn to true because if savedUser exists they must have checked the box on login/signup.
      // Setting it here allows user update function to respect their initial choice without asking them again.
      setStayLoggedIn(true);

      localStorage.setItem(
        'credentials',
        JSON.stringify({
          token: fetchedUser.token,
          username: fetchedUser.user.username,
          email: fetchedUser.user.email,
        })
      );
    }
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchSignUp = async (
  username,
  email,
  password,
  setUser,
  stayLoggedIn
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) throw new Error('Error creating new user');

    const responseObj = await response.json();
    const { username: newUsername, email: newEmail, token } = responseObj;

    setUser({ username: newUsername, email: newEmail, token });

    if (stayLoggedIn)
      localStorage.setItem(
        'credentials',
        JSON.stringify({
          token: token,
          username: newUsername,
          email: newEmail,
        })
      );
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchLogIn = async (email, password, setUser, stayLoggedIn) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) throw new Error('Error logging in');

    const responseObj = await response.json();

    const {
      user: { username, email: userEmail },
      token,
    } = responseObj;

    setUser({ username: username, email: userEmail, token });

    if (stayLoggedIn)
      localStorage.setItem(
        'credentials',
        JSON.stringify({
          token: token,
          username: username,
          email: userEmail,
        })
      );
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchUpdateUser = async (
  updateObj,
  user,
  setUser,
  stayLoggedIn,
  currentPass
) => {
  const body = updateObj;
  body.password = currentPass;

  const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error('Error updating account info');

  const responseObj = await response.json();

  const password = updateObj.newInfo.password || currentPass;

  await fetchLogIn(responseObj.doc.email, password, setUser, stayLoggedIn);
  console.log(responseObj.message);
};

export const fetchDeleteAccount = async user => {
  const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ username: user.username }),
  });

  if (!response.ok) throw new Error('Error deleting account');

  const responseObj = await response.json();
  console.log(responseObj.message);
};

export const fetchMovies = async setData => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}movie`);

    if (!response.ok) throw new Error('Error finding movie list');

    await getImages(response, setData);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchAddMovie = async (movie, user) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}movie`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        title: movie.title,
        rating: movie.rating,
        actors: movie.actors,
        genres: movie.genres,
      }),
    });

    if (!response.ok) throw new Error('Error adding movie');

    await response.json();
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchSearchMovie = async (search, setData) => {
  try {
    let route = '';
    let query = '';
    if (search.type === 'movie') {
      route = 'findMovie';
      query = { title: search.query };
    }
    if (search.type === 'actor') {
      route = 'findByActor';
      query = { actor: search.query };
    }
    if (search.type === 'genre') {
      route = 'findByGenre';
      query = { genre: search.query };
    }
    if (search.type === 'minRating') {
      route = 'findByRating';
      query = { rating: search.query };
    }

    const url = `${process.env.REACT_APP_REST_API}${route}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    });

    if (!response.ok) throw new Error('Error finding movies');

    await getImages(response, setData);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchEditMovie = async (updateObj, token) => {
  const response = await fetch(`${process.env.REACT_APP_REST_API}movie`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateObj),
  });

  if (!response.ok) throw new Error('Error updating movie info');

  const responseObj = await response.json();
  console.log(responseObj.message);
};

export const fetchDeleteMovie = async (queryObj, user) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}movie`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(queryObj),
    });

    if (!response.ok) throw new Error('Error deleting movie');

    const responseObj = await response.json();
    console.log(responseObj.message);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const compareArr = (oldArr, newArr) => {
  const oldItems = oldArr.filter(x => !newArr.includes(x));
  const newItems = newArr.filter(x => !oldArr.includes(x));
  return { oldItems, newItems };
};

async function getImages(response, setData) {
  let movieList = await response.json();

  if (!Array.isArray(movieList)) movieList = [movieList];

  const tmdbResponse = await Promise.all(
    movieList.map(movie => {
      return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_TMDB_API_KEY
        }&query=${encodeURIComponent(movie.title)}&include_adult=false`
      );
    })
  );

  const tmdbObj = await Promise.all(tmdbResponse.map(movie => movie.json()));

  movieList.forEach((movie, i) => (movie.details = tmdbObj[i].results[0]));

  setData(movieList);
}
