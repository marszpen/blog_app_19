import Posts from '../features/Posts';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
    return(
    <div className="flex-md-row">
        <h1>All posts</h1>
        <Link to='/post/add' className="d-flex flex-row-reverse">
            <Button variant='outline-info'>Add post</Button>
        </Link>
        <div className="mt-5">
        <Posts />
        </div>
    </div>
)};

export default Home;