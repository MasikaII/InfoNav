import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyAuth from './myauth';
import { authActions } from "../store";

const BlogHeader = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'transparent',
      }}>
      <Toolbar>
        <Typography variant="h4"></Typography>
        {isLoggedIn && <Box display="flex" marginLeft="auto" marginRight={"auto"}>
          <Tabs value={value} onChange={(ev, val) => setValue(val)} >
            <Tab LinkComponent={Link} to="/Home" label="Home" style={{ color: 'green' }} />
            <Tab LinkComponent={Link} to="/post" label="All Blogs" style={{ color: 'green' }} />
            <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" style={{ color: 'green' }} />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" style={{ color: 'green' }} />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn &&
            <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/signup"
              variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="success">Login</Button>}
          {/* {!isLoggedIn && <Button LinkComponent={Link} to="/signup"
            variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="success">Signup</Button>}*/}
          {isLoggedIn && <Button LinkComponent={Link} to="/signup"
            variant="contained" sx={{ margin: 1, borderRadius: 10 }} color="success">LogOut</Button>}
        </Box>
      </Toolbar>
    </AppBar>

  );
};

export default BlogHeader

