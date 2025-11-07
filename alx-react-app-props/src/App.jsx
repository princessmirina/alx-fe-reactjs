import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";
import UserInfo from "./components/UserInfo";
import UserDetails from "./components/UserDetails";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <ProfilePage userData={userData} />;
      <UserInfo />
      <UserDetails />
      <UserContext />
    </>
  );
}

export default App;
