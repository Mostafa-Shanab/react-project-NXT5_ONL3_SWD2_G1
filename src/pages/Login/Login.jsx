import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import UserContext from "@/context/user/UserContext";
import "./Login.css";

// Controlled Component
const userInitialValues = {
  userName: "Ahmed",
  userEmail: "ahmed@gmail.com",
  userPassword: "123",
};
function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  console.log("🚀 ~ Login ~ isLoggedIn:", isLoggedIn);

  const [userData, setUserData] = useState(userInitialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {aa
    console.log("Redirect to product-details after 2s");
    e.preventDefault();
    // sending data
    // ...
    // reset data
    setUserData(userInitialValues);
    setIsLoggedIn(true);

    setTimeout(() => {
      navigate("/product-details/20"); // default is push
      // navigate("/product-details/20", { replace: true });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="userName"
          onChange={handleChange}
          value={userData.userName}
        />
      </div>
      <div>
        <label htmlFor="user-email">User Email</label>
        <input
          type="email"
          id="user-email"
          name="userEmail"
          onChange={handleChange}
          value={userData.userEmail}
        />
      </div>
      <div>
        <label htmlFor="user-password">User Password</label>
        <input
          type="password"
          id="user-password"
          name="userPassword"
          onChange={handleChange}
          value={userData.userPassword}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Login;
