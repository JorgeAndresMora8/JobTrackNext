"use client"

import Link from "next/link"
import classes from "./AuthNavbar.module.css"
import { usePathname } from "next/navigation"

export const LoggedInPath = () => { 
    return ( 
        <ul className={classes['nav-link-list']}>
                <li className={classes['nav-link']}><Link href='/'>home</Link></li>
                <li className={classes['nav-link']}><Link href='/jobs'>Jobs</Link></li>
                <li className={classes['nav-link']}><Link href='/about-us'>about us</Link></li>
            </ul>
    )
}

export const Auth = () => { 
    return ( 
        <ul className={classes['nav-link-list']}>
                {/* <button className={classes['btn-create-account']}>Create New Account</button> */}
                <li className={classes['nav-link']}><Link href='/auth'>login</Link></li>
                <li className={classes['nav-link']}><Link href='/auth/signup'>signup</Link></li>
            </ul>
    )
}

export default function AuthNavbar(){ 

    const pathname = usePathname()

    let isLoggedIn = true

    return ( 
        <header className={classes['auth-navbar-container']}>
            <img src="/JobTrackLogo.png" style={{width: "150px"}}/>
            <LoggedInPath />
        </header>
    )
}

function Navbar() {

    // const auth = useSelector((state) => state.auth);
    // const { cartItems } = useContext(CartContext)
  
    // const dispatch = useDispatch()
    // const nav = useNavigate()
  
    
    function handleSubmit(){  
      dispatch(logout())
      nav(PublicRoutes.LOGIN, {replace: true})
  }
  
  
      const navRef = useRef();
      
      const showNavbar = () => {
          navRef.current.classList.toggle(
              "responsive_nav"
          );
      };
  
    console.log(!!auth.token)
  
      return (
          <header className="sticky">
              <span><Link to="/store"><img src="/techlogo.png" style={{width:'80px'}} alt="" /></Link></span>
              <nav ref={navRef}>
          <Link onClick={showNavbar} to='/home'>home</Link>
          <Link onClick={showNavbar}to='/store'>store</Link>
      <Link onClick={showNavbar}to='/cart'>cart</Link>
      { auth.token ? <p className='login-btn' onClick={handleSubmit}>logout</p>: <Link className="login-btn" onClick={showNavbar}to='/login'>login</Link>}
  
                  <button
                      className="nav-btn nav-close-btn"
                      onClick={showNavbar}>
              <FontAwesomeIcon icon={faX} style={{color:'#fff'}}/>
                  </button>
              </nav>
              <button
                  className="nav-btn"
                  onClick={showNavbar}>
                  <FontAwesomeIcon icon={faBars} style={{color:'rgb(0,0,56)'}}/>
              </button>
          </header>
      );
  }