import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-[400px] sm:w-[700px] md:w-[1120px] flex justify-between sm:justify-between items-center mt-[30px]'>
        <Link to='/'><h2 className="font-bold text-2xl">SusEyez Careers</h2></Link>
        <ul className="flex justify-center items-center">
            <li><Link to='/'>Home</Link></li>
            <li className="ml-10 sm:ml-44"><Link to='/jobs'>Jobs</Link></li>
        </ul>
    </div>
  )
}

export default Header