import React from "react";
import BlogHeader from "./BlogHeader";
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

const UserBlogs = ({ title, description, imageURL, userName, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`)
  };
  console.log(title, isUser);
  const deleteRequest = async () => {
    const res = axios.delete(`http://localhost:7000/api/blog/delete/${id}`)
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete = () => {
    deleteRequest().then((data) => console.log(data));
  };
  return (
    <>
      <div>
        <Card sx={{ width: "45%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}><EditIcon /></IconButton>
              <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
            </Box>
          )}
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {userName ? userName.charAt(0) : ""}
              </Avatar>
            }

            title={title}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={imageURL}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <b>{userName}</b> {":"} {description}
            </Typography>
          </CardContent>

        </Card>

      </div>
    </>
  )
};

export default UserBlogs;
