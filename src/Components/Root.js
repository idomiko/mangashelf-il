import { React, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { Link, Navigate, Outlet } from "react-router-dom";

import Header from "./Header";
import Home from "../Pages/Home";

const Root = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={selectedTab}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList
              onChange={(event, newSelectedTab) => {
                setSelectedTab(newSelectedTab);
              }}
            >
              <Tab
                label="קולקטיב"
                value="collective"
                component={Link}
                to={`/collective`}
              />
              <Tab
                label="שאלות ותשובות"
                value="qna"
                component={Link}
                to={`/qna`}
              />
              <Tab label="צוות" value="team" component={Link} to={`/team`} />
              <Tab
                label="פרוייקטים"
                value="projects"
                component={Link}
                to={`/projects`}
              />
              <Tab label="דף הבית" value="home" component={Link} to={`/home`} />
            </TabList>
          </Box>
          <TabPanel value="home">
            <Home />
          </TabPanel>
          <TabPanel value="projects">
            <Outlet />
          </TabPanel>
          <TabPanel value="team">
            <Outlet />
          </TabPanel>
          <TabPanel value="qna">
            <Outlet />
          </TabPanel>
          <TabPanel value="collective">
            <Outlet />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Root;
