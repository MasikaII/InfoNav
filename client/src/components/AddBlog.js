import React, { useState } from "react";
import BlogHeader from "./BlogHeader";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:7000/api/blog/add", {
      title: inputs.title,
      description: inputs.description,
      imageURL: inputs.imageURL,
      user: localStorage.getItem("userId"),
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myblogs"));
  };

  return (
    <>
      <BlogHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 64px)",
          backgroundColor: "#F9F9F9",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Post Your Blog
        </Typography>
        <Box
          sx={{
            width: "50%",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 8px 16px -8px rgba(0, 0, 0, 0.4)",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            label="Title"
            variant="outlined"
            sx={{ mb: 4, width: "100%" }}
          />
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 4, width: "100%" }}
          />
          <TextField
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            label="Image URL"
            variant="outlined"
            sx={{ mb: 4, width: "100%" }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: 4,
              backgroundColor: "#062A42",
              color: "white",
              "&:hover": {
                backgroundColor: "#1B3B5F",
              },
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddBlog;


/*
import React, { useState } from "react";
import BlogHeader from "./BlogHeader";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }
const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:7000/api/blog/add", {
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageURL,
      user: localStorage.getItem("userId")
    }).catch(err => console.log(err));
    const data = await res.data;
    return data
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then(data => console.log(data))
      .then(() => navigate("/myblogs"));;
  };
  return (
    <>
      <BlogHeader />
      <div style={{ height: '100vh' }}>
        <form onSubmit={handleSubmit}>
          <Box border={1} borderColor=""
            padding={3} margin={"auto"} marginTop={3} display="flex" flexDirection={"column"} width={"80%"}>
            <Typography fontWeight={"bold"} padding={3} color="grey" variant="h3" textAlign={"center"}>Post Your Blog</Typography>
            <InputLabel sx={labelStyles} style={{ color: 'black' }}>Title</InputLabel>
            <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" />
            <InputLabel sx={labelStyles} style={{ color: 'black' }}>Description</InputLabel>
            <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />
            <InputLabel sx={labelStyles} style={{ color: 'black' }}>ImageURL</InputLabel>
            <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" />
            <Button sx={{ mt: 2, borderRadius: 4, backgroundColor: '#062A42' }} variant="contained" color="success" type="submit">Submit</Button>
          </Box>
        </form>
      </div>
    </>
  );
}

export default AddBlog;
*/
