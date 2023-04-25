import { Button, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";


const AddPostForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    navigate('/');
    }

    return (
      <>
        <Row className="justify-content-md-center">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" 
          onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlInput2">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter author" 
          onChange={(e) => setAuthor(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlInput3">
          <Form.Label>Published</Form.Label>
          <Form.Control type="password" placeholder="Enter published" 
          onChange={(e) => setPublishedDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea4">
          <Form.Label>Short description</Form.Label>
          <Form.Control type= "text" as="textarea" rows={3} placeholder="Leave a comment here" 
          onChange={(e) => setshortDescription(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea5">
          <Form.Label>Main content</Form.Label>
          <Form.Control type="text" as="textarea" rows={5} placeholder="Leave a comment here" 
          onChange={(e) => setContent(e.target.value)} />
        </Form.Group>

        <Button>Add post</Button>
        </Form>
        </Row>
      </>
    );
};


export default AddPostForm;