export const getUser = setUser => {
  try {
    const savedUser = JSON.parse(localStorage.getItem('credentials'));
    console.log(savedUser.username);

    if (savedUser) setUser(savedUser.username);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchSignUp = async (username, email, password, setUser) => {
  try {
    const response = await fetch('http://localhost:5000/user', {
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
    const { newUsername = username, token } = responseObj;

    setUser({ username: newUsername });

    localStorage.setItem(
      'credentials',
      JSON.stringify({
        token: token,
        username: newUsername,
      })
    );
  } catch (err) {
    console.error('💥 💥', err);
  }
};
