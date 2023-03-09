import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MyAuth from './myauth';

const BlogHeader = () => {
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, rgba(58,83,180,1) 0%, rgba(29,120,253,1) 50%, rgba(76,252,69,0.711922268907563) 100%)",
      }}>
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        {isLoggedIn && <Box display="flex" marginLeft="auto" marginRight={"auto"}>
          <Tabs value={value} onChange={(ev, val) => setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && <Button LinkComponent={Link} to="/signup"
            variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="success">Login</Button>}
          {!isLoggedIn && <Button LinkComponent={Link} to="/signup"
            variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="success">Signup</Button>}
          {isLoggedIn && <Button LinkComponent={Link} to="/signup"
            variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="success">LogOut</Button>}
        </Box>
      </Toolbar>
    </AppBar>

  );
};

export default BlogHeader
