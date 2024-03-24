import { Link, Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div style={{padding: "15pt"}}>
      <h1>React Reading List</h1>
      <h5>Click on one of the categories to list some books:</h5>
      <Link to='love' className='btn'>
          Love
      </Link>
      <Link to='horror' className='btn'>
          Horror
      </Link>
      <Outlet />
    </div>  
  );
};
export default Home;