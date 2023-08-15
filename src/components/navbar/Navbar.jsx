import {useState} from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross1}from 'react-icons/rx';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    const [toggle , setToggle] = useState(false);

    return(
        <div>
        <nav className={"abstract_navbar"}>
            <div className={"abstract_navbar_left"}>
                <div className={"abstract_navbar_left_logo"}>
                    <img src={logo} alt={"Abstract"}/>
                    <p>Abstract</p>
                </div>
                <div className={"abstract_navbar_left_split"}/>
                <Link to={'/'}><p className={"abstract_navbar_left_site"}>Help Center</p></Link>
            </div>
            <div className={"abstract_navbar_right"}>
                <button type={"button"} className={'abstract_navbar_right_request'}>Submit a request</button>
                <button  type={'button'} className={'abstract_navbar_right_sign'}>Sign in</button>
            </div>

            <div className={"abstract_navbar_menu"}>
                {toggle
                ? <RxCross1 color={'#fff'} size={27} onClick={()=>setToggle(false)}/>
                : <GiHamburgerMenu color={'#fff'} size={27} onClick={()=>setToggle(true)}/>}

            </div>
        </nav>
            {toggle &&
                <div className={'abstract_navbar_menu_open'}>
                    <p>Submit a request</p>
                    <div/>
                    <p>Sign in</p>
                </div>
            }
        </div>
    );
}

export default Navbar;