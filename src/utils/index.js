export const getUser = async (setUser, navigate) => {
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

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}movie`);

    if (!response.ok) throw new Error('Error finding movie list');
    const movieList = await response.json();

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

    console.log(movieList);
  } catch (err) {
    console.error('💥 💥', err);
  }
};
