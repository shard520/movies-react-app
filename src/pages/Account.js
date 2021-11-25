import LoadingSpinner from '../components/LoadingSpinner';
import AccountForm from '../components/AccountForm';
import Greeting from '../components/Greeting';

const Account = ({
  user,
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  handleAccountSubmit,
  isLoading,
}) => {
  return (
    <div>
      <Greeting user={user} />
      <LoadingSpinner isLoading={isLoading} />
      <AccountForm
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        handleAccountSubmit={handleAccountSubmit}
      />
    </div>
  );
};

export default Account;
