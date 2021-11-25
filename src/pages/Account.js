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
  currentPass,
  setCurrentPass,
  handleAccountSubmit,
  isLoading,
  handleDeleteAccount,
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
        currentPass={currentPass}
        setCurrentPass={setCurrentPass}
        setPass={setPass}
        handleAccountSubmit={handleAccountSubmit}
        handleDeleteAccount={handleDeleteAccount}
      />
    </div>
  );
};

export default Account;
