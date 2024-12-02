import { useState } from "react";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [alert, setAlert] = useState("");

  const fetchUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data.message === "Not Found") {
        setAlert("User not found!");
        setUserData(null);
      } else {
        setAlert("");
        setUserData(data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setAlert("Something went wrong. Please try again.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    if (username) {
      fetchUser(username);
    } else {
      setAlert("Please enter a GitHub username.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold">GitHub Finder</h1>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <form onSubmit={handleSearch} className="bg-white shadow-md p-6 rounded">
          <h2 className="text-xl font-bold mb-2">Search GitHub Users</h2>
          <p className="text-gray-700 mb-4">Enter a username to fetch a user profile and repos</p>
          <input
            type="text"
            name="username"
            placeholder="GitHub Username"
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Search
          </button>
        </form>

        {alert && <div className="mt-4 text-red-600 font-bold">{alert}</div>}

        {userData && <UserProfile user={userData} />}
      </div>

      <footer className="bg-gray-200 p-4 text-center">
        GitHub Finder &copy; 2024
      </footer>
    </div>
  );
};

export default App;
