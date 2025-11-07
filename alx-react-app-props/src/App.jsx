import UserProfile from "./UserProfile";
import UserContext from "./UserContext";
import UserInfo from "./components/UserInfo";
import UserDetails from "./components/UserDetails";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
      <UserInfo />
      <UserDetails />
      <UserContext />
    </>
  );
}

export default App;
