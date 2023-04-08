import PostCard from '../features/PostCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Home = () => {
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