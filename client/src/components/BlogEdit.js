import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import axios from "axios";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogEdit = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:7000/api/blog/${id}`).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      });
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios.put(`http://localhost:7000/api/blog/update/${id}`, {
      title: inputs.title,
      description: inputs.description
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await sendRequest();
      navigate("/myblogs");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <BlogHeader />
        {inputs && <form onSubmit={handleSubmit}>
          <Box border={3} borderColor="grey.200" borderRadius={10} boxShadow="10px 10px 20px #ccc"
            padding={3} margin={"auto"} marginTop={3} width={"80%"} sx={{ backgroundColor: "white" }}>
            <Typography fontWeight={"bold"} padding={3} color="grey.600" variant="h2" textAlign={"center"}>Edit Blog Post</Typography>
            <InputLabel sx={labelStyles}>Title</InputLabel>
            <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" fullWidth={true} />
            <InputLabel sx={labelStyles}>Description</InputLabel>
            <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" multiline={true} rows={4} fullWidth={true} />
            <Button sx={{ mt: 2, borderRadius: 4 }} variant="contained" color="primary" type="submit" fullWidth={true}>Save Changes</Button>
          </Box>
        </form>
        }
      </div>
    </>
  );
};

export default BlogEdit;
