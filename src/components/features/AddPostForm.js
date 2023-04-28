import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from '../redux/postsRedux';
import PostForm from '../PostForm';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/')
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  )
};


export default AddPostForm;