import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 mt-6">
      <div className="flex">
        <img
          className="w-24 h-24 rounded-full mr-4"
          src={user.avatar_url}
          alt={`${user.login} avatar`}
        />
        <div>
          <h3 className="text-xl font-bold">{user.name || user.login}</h3>
          <p className="text-gray-700">{user.bio}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      </div>

      <div className="mt-4">
        <span className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
          Public Repos: {user.public_repos}
        </span>
        <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">
          Followers: {user.followers}
        </span>
        <span className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
          Following: {user.following}
        </span>
      </div>

      <ul className="mt-4 text-gray-700">
        <li>Company: {user.company || "N/A"}</li>
        <li>Website/Blog: {user.blog ? <a href={user.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.blog}</a> : "N/A"}</li>
        <li>Location: {user.location || "N/A"}</li>
        <li>Member Since: {new Date(user.created_at).toLocaleDateString()}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
