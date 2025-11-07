import UserInfo from "./UserInfo";
import { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  // Access user data from context
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <UserInfo />
    </div>
  );
}

export default UserProfile;
