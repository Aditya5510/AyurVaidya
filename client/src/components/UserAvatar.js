import { Avatar, Box } from "@mui/material";
import React from "react";
import newlogo from "../Images/newlogo.png"

const UserAvatar = ({ username, height, width, userProfile, expert }) => {
  // console.log(userProfile);
  return (
    <Box sx={{ position: "relative", height: "40px", width: "50px" }}>
      <Avatar
        sx={{
          height: height,
          width: width,
          backgroundColor: "lightgray",
        }}
        src={userProfile}
      >
      </Avatar>
      {expert ? (
        <img
          src={newlogo}
          height={"25px"}
          width={"25px"}
          style={{
            position: "absolute",
            top: "0px",
            right: "1px",
            animation: "blueTick 1s infinite",
          }}
        />
      ) : null}
    </Box>
  );
};

export default UserAvatar;
