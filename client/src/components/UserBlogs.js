import React, { useContext } from "react";
//import BlogHeader from "./BlogHeader";
import { Box, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BlogsContext } from "./deleteblog";

/*
  * This is the blog body
  * */
const UserBlogs = ({ title, description, imageURL, userName, isUser, id }) => {
  const navigate = useNavigate();
  const { blogs, setBlogs } = useContext(BlogsContext);
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`);
  };
  /*This method deletes a blog*/
  console.log(title, isUser);
  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:7000/api/blog/delete/${id}`)
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete = async () => {
    try {
      await deleteRequest();
      setBlogs((blogs) => blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //timestamp =
  /*
  const handleDelete = () => {
    deleteRequest().then((data) => {
      console.log(data);
      const updatedBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(updatedBlogs);
    });

};
    */
  return (
    <>
      <div>
        <Card sx={{ width: "45%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover": { boxShadow: "10px 10px 20px #ccc" }, bgcolor: "#181b1b" }}>
          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{ marginLeft: "auto", color: "green" }}><EditIcon /></IconButton>
              <IconButton onClick={handleDelete} sx={{ color: "green" }}><DeleteIcon /></IconButton>
            </Box>
          )}
          <CardHeader sx={{ color: 'white' }}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {userName ? userName.charAt(0) : ""}
              </Avatar>
            }

            title={title}
          //subheader={new Date(timestamp).toLocaleTimeString()}
          />
          <CardMedia
            component="img"
            height="250"
            image={imageURL}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
              <b>{userName}</b> {":"} {description}
            </Typography>
          </CardContent>

        </Card>

      </div>
    </>
  )
};

export default UserBlogs;
