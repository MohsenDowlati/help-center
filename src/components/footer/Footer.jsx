import {footer_menu} from "../../constant/texts";
import './footer.css';
import logo from '../../assets/logo.png';
const Menu = ({data}) => (
    <div className={"abstract_footer_links_menu"}>
        <h2>{data.category}</h2>
        {data.list.map((l,index)=>(
            <p key={index}>{l}</p>
        ))}
    </div>
)
const Footer = () => (
    <div className={'abstract_footer'}>
        <div className={"abstract_footer_links"}>
            {footer_menu.map((data,index)=>(
                <Menu data={data} key={index}/>
            ))}
        </div>
        <div className={"abstract_footer_sign"}>
            <div className={"abstract_footer_sign_contact"}>
                <h2>Contact Us</h2>
                <p>dowmohsen@gmail.com</p>
            </div>
            <div className={"abstract_footer_sign_logo"}>
                <img src={logo} alt={'logo'}/>
                <p>&#169; Copyright 2023 Abstract Studio Design, Inc. All rights reserved</p>
                <p>This Shit Developed by MOHSEN</p>
            </div>
        </div>
    </div>
)

export default Footer;