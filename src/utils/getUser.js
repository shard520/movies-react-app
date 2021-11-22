export const getUser = setUser => {
  try {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  } catch (err) {
    console.error('💥 💥', err);
  }
};
