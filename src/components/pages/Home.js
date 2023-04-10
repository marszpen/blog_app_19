import PostCard from '../features/PostCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/store';


const Home = () => {
    const posts = useSelector((state) => getAllPosts)
    return(
    <div>
        <h1>All posts</h1>
        <Link to='/post/add'>
            <Button variant='primary'>Add post</Button>
        </Link>
        <PostCard />
    </div>
)};

export default Home;