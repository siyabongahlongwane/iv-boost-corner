import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <div className='navbar d-flex flex-row block white-bg full-height justify-content-between'>
            <div className='logo d-flex flex-col justify-content-center'>
                <img className='block' src={logo} alt='IV Boost Logo' />
            </div>
            <div className="nav-links d-flex flex-col justify-content-center">
                <ul className="d-flex flex-row ">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <button className="primary-bg white-col get-started-btn">Get Started</button>
        </div>
    );
}

export default Navbar;