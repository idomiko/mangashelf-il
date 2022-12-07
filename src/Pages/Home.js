import { Stack } from "@mui/system";
import React from "react";

import PostCard from "../Components/Home/PostCard";

const Home = () => {
  return (
    <div
      style={{
        width: "80vw",
        marginLeft: 10,
        marginRigtht: 10,
        float: "right",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
      >
        <PostCard />
      </Stack>
    </div>
  );
};

export default Home;
