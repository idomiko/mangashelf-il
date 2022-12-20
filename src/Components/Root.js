import { React, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Home from "../Pages/Home";

const Root = () => {
  const currentPath = useLocation().pathname;
  console.log({ currentPath });
  const [selectedTab, setSelectedTab] = useState(
    currentPath === "/mangashelf-il" ? "/mangashelf-il/home" : currentPath
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ typography: "body1" }}>
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
                label="דף הבית"
                value="/mangashelf-il/home"
                component={Link}
                to="/mangashelf-il/home"
              />
              <Tab
                label="פרוייקטים"
                value="/mangashelf-il/projects"
                component={Link}
                to="/mangashelf-il/projects"
              />
              <Tab
                label="צוות"
                value="/mangashelf-il/team"
                component={Link}
                to="/mangashelf-il/team"
              />
              <Tab
                label="שאלות ותשובות"
                value="/mangashelf-il/qna"
                component={Link}
                to="/mangashelf-il/qna"
              />
              <Tab
                label="קולקטיב"
                value="/mangashelf-il/collective"
                component={Link}
                to="/mangashelf-il/collective"
              />
            </TabList>
          </Box>
          <TabPanel value="/mangashelf-il/home">
            <Home />
          </TabPanel>
          <TabPanel value="/mangashelf-il/projects">
            <Outlet />
          </TabPanel>
          <TabPanel value="/mangashelf-il/team">
            <Outlet />
          </TabPanel>
          <TabPanel value="/mangashelf-il/qna">
            <Outlet />
          </TabPanel>
          <TabPanel value="/mangashelf-il/collective">
            <Outlet />
          </TabPanel>
          <TabPanel value="/mangashelf-il">
            <Home />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Root;
