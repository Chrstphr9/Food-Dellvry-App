import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Adjust the path

const Navbar = ({ setShowLogin }) => {
  const { currentUser } = useContext(AuthContext); // Access user info

  return (
    <div className="navbar">
      {/* Your navbar code */}
      {currentUser ? (
        <div>
          <span>{currentUser.name}</span>
          {/* Add a Logout button or link */}
        </div>
      ) : (
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      )}
    </div>
  );
};
