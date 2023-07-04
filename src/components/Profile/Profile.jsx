import React from "react";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let posts = [
    { id: 1, message: "Hello world" },
    { id: 2, message: "My first app" },
    { id: 3, message: "Where's my God?" },
    {
      id: 4,
      message: "Once you're in the Hell. Only the Devil can help you out}",
    },
  ];
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;
