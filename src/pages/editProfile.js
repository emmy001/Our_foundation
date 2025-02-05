import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Grid,
  GridItem,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import ResponsiveContainer from "../Components/ResponsiveContainers";
import ImageBackground from "../Components/Background";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileImage from "../Components/Profile/ProfileImage";
import ProfileName from "../Components/Profile/ProfileName";
import BodyBold from "../Components/BodyBold";
import OccupationText from "../Components/OccupationText";
import PersonalInfo from "../Components/Profile/PersonalInfo";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useRouter } from "next/router";
import UploadImage from "../Components/UploadImage";

const Index = () => {
  const router = useRouter();
  const { isOpen: isPostModalOpen, onOpen: onPostModalOpen, onClose: onPostModalClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: '',
    occupation: '',
    interests: '',
    aboutMe: '',
    imageUrl: '',
  });
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingPost, setIsSubmittingPost] = useState(false);
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert("No authentication token found. Please log in.");
          return;
        }

        const response = await axios.get('http://localhost:5000/api/userdata/public', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data.data;
        setFormData({
          name: userData.name,
          dob: userData.personalInfo.DOB,
          email: userData.personalInfo.email,
          phone: userData.personalInfo.phoneNo,
          occupation: userData.personalInfo.occupation,
          interests: userData.interests.join(', '),
          aboutMe: userData.aboutMe,
          imageUrl: userData.imageUrl,
        });

        setUserId(userData._id);
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data. Please try again.');
      }
    };

    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert("No authentication token found. Please log in.");
          return;
        }

        const response = await axios.get('http://localhost:5000/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        alert('Failed to fetch posts. Please try again.');
      }
    };

    fetchUserData();
    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "inventoryapp");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/ddhayhptm/image/upload", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      setPostData((prevData) => ({
        ...prevData,
        imageUrl: result.secure_url,
      }));
      alert("Image Successfully Uploaded");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        alert("Your session has expired. Please log in again.");
        localStorage.removeItem('token');
        return;
      }

      const payload = {
        name: formData.name,
        occupation: formData.occupation,
        imageUrl: formData.imageUrl,
        personalInfo: {
          name: formData.name,
          DOB: formData.dob,
          email: formData.email,
          phoneNo: formData.phone,
          occupation: formData.occupation,
        },
        interests: formData.interests.split(',').map(i => i.trim()),
        aboutMe: formData.aboutMe,
      };

      console.log("Sending data:", JSON.stringify(payload, null, 2));

      await axios.put(`http://localhost:5000/api/userdata/${userId}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Userdata updated successfully!');
    } catch (error) {
      console.error('Error updating userdata:', error.response || error.message);
      alert('Failed to update userdata. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

const handleOpenPostModal = () => {
  setPostData({
    title: '',
    content: '',
    imageUrl: '',
    _id: '', // Clear the _id field
  });
  onPostModalOpen(); // Open the modal
};

// const handleEditPost = (postId) => {
//   const postToEdit = posts.find(post => post._id === postId);
//   setPostData({
//     _id: postToEdit._id, // Set the _id field for editing
//     title: postToEdit.title,
//     content: postToEdit.content,
//     imageUrl: postToEdit.imageUrl,
//     videoUrl: postToEdit.videoUrl,
//   });
//   onPostModalOpen(); // Open the modal
// };

const handlePostSubmit = async () => {
  setIsSubmittingPost(true);

  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("No authentication token found. Please log in.");
      return;
    }

    // if (postData.imageUrl && postData.videoUrl) {
    //   alert("You can only upload an image or provide a video URL, not both.");
    //   return;
    // }

    const payload = {
      title: postData.title,
      content: postData.content,
      imageUrl: postData.imageUrl,
    };

    let response;
    if (postData._id) {
      // Update existing post
      response = await axios.put(`http://localhost:5000/api/posts/${postData._id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } else {
      // Create new post
      response = await axios.post('http://localhost:5000/api/posts', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }

    alert(postData._id ? 'Post updated successfully!' : 'Post created successfully!');
    onPostModalClose();
    setPostData({
      title: '',
      content: '',
      imageUrl: '',
      _id: '', // Clear the _id field after submission
    });

    // Refetch posts to update the list
    const postsResponse = await axios.get('http://localhost:5000/api/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPosts(postsResponse.data.data);
  } catch (error) {
    console.error('Error creating/updating post:', error.response || error.message);
    alert('Failed to create/update post. Please try again.');
  } finally {
    setIsSubmittingPost(false);
  }
};

  const handleDeletePost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts(posts.filter(post => post._id !== postId));
      alert('Post deleted successfully!');
      // Remove the deleted post from the state
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  const handleEditPost = (postId) => {
    const postToEdit = posts.find(post => post._id === postId);
    setPostData({
      _id: postToEdit._id,
      title: postToEdit.title,
      content: postToEdit.content,
      imageUrl: postToEdit.imageUrl,
    });
    onPostModalOpen();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("You have been logged out.");
    router.push("/");
  };

  return (
    <ChakraProvider>
      <Box position="fixed" top={0} left={0} width="100%" height="100%" zIndex={-1}>
        <ImageBackground />
      </Box>
      <ResponsiveContainer>
        <ProfileHeader />

        <Flex justifyContent="flex-end" mt="6" gap="10px">
          <Button colorScheme="blue" onClick={handleOpenPostModal}>
            Add Post
          </Button>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>

        <Modal isOpen={isPostModalOpen} onClose={onPostModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a New Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mt="4">
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={postData.title}
                  onChange={handlePostInputChange}
                  placeholder="Enter post title"
                  isRequired
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Content</FormLabel>
                <Textarea
                  name="content"
                  value={postData.content}
                  onChange={handlePostInputChange}
                  placeholder="Enter post content"
                  isRequired
                />
              </FormControl>
              <FormControl mt="4">
                <UploadImage onImageUpload={uploadImage} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handlePostSubmit} isLoading={isSubmittingPost}>
                Submit Post
              </Button>
              <Button variant="ghost" onClick={onPostModalClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box mt="20px" p="20px" bg="white" borderRadius="10px" shadow="lg">
          <BodyBold>Edit Userdata</BodyBold>
          <form onSubmit={handleSubmit}>
            <FormControl mt="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                isRequired
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                isRequired
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                isRequired
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                isRequired
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Occupation</FormLabel>
              <Input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                placeholder="Enter your occupation"
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Interests</FormLabel>
              <Textarea
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                placeholder="Enter interests (comma-separated)"
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>About Me</FormLabel>
              <Textarea
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleInputChange}
                placeholder="Write something about yourself"
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Image URL</FormLabel>
              <Input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="Enter an image URL"
              />
            </FormControl>
            <Button
              mt="6"
              colorScheme="blue"
              type="submit"
              isLoading={isSubmitting}
            >
              Update Information
            </Button>
          </form>
        </Box>

        <Box mt="20px" p="20px" bg="white" borderRadius="10px" shadow="lg">
          <BodyBold>Posts</BodyBold>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="4">
            {posts.map((post) => (
              <GridItem key={post._id} p="4" borderWidth="1px" borderRadius="lg">
                <Box>
                  <Box fontWeight="bold" fontSize="lg">{post.title}</Box>
                  <Box mt="2">{post.content}</Box>
                  {post.imageUrl && (
                    <Box mt="4">
                      <img src={post.imageUrl} alt="Post" style={{ width: '100%', borderRadius: '8px' }} />
                    </Box>
                  )}
                  <Flex justifyContent="flex-end" mt="4">
                    <IconButton
                      aria-label="Edit Post"
                      icon={<EditIcon />}
                      onClick={() => handleEditPost(post._id)}
                      mr="2"
                    />
                    <IconButton
                      aria-label="Delete Post"
                      icon={<DeleteIcon />}
                      onClick={() => handleDeletePost(post._id)}
                      colorScheme="red"
                    />
                  </Flex>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </ResponsiveContainer>
    </ChakraProvider>
  );
};

export default Index;