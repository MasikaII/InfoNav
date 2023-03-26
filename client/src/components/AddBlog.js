import React, { useState } from "react";
import BlogHeader from "./BlogHeader";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Define the handleChange function to update state when the user types in an input field
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Define the sendRequest function to send a POST request to the server
  const sendRequest = async () => {
    try {
      setIsLoading(true); // Set isLoading to true to indicate that the form submission is in progress
      const res = await axios.post("http://localhost:7000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId")
      });
      const data = res.data;
      setIsLoading(false); // Set isLoading to false to indicate that the form submission is complete

      return data;
    } catch (error) {
      setIsLoading(false); // Set isLoading to false to indicate that the form submission is complete
      setError(error.response?.data?.message || "An unknown error occured.");  // Set the error state to the error message returned by the server or a default error message
    }
  };

  // Define the handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true to indicate that the form submission is in progress
    setError(null); // Clear the error state
    try {
      const data = await sendRequest();  // Call the sendRequest function to send the form data to the server and get the response data
      console.log(data);
      navigate("/myblogs");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);  // Set isLoading to false to indicate that the form submission is complete

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
        {error && (
          <div style={{ backgroundColor: "#ffe4e4", color: "#bf1650", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
            {error}
          </div>
        )}
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
            disabled={isLoading}
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

