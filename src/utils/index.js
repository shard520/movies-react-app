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

    setUser({ username: newUsername, email: newEmail });

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

    setUser({ username: username, email: userEmail });

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
