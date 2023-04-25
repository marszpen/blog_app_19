import Posts from '../features/Posts';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>All posts</h1>
                <Link to='/post/add'>
                    <Button variant='outline-info'>Add post</Button>
                </Link>
            </div>
            <div className="d-flex mt-5 ">
                <Posts />
            </div>
        </div>
    );
};

export default Home;