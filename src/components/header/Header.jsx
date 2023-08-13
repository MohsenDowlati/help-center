import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './header.css';
const Header = () => {

    const navigate = useNavigate();
    const [searchField , setSearchField] = useState("");
    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchField) {
            window.open(`https://www.google.com/search?q=${searchField}`)
            setSearchField('')
        }
    }
    return(
        <div className={'section_padding abstract_header'}>
            <p className={'abstract_header_p'}>How can we help?</p>
            <form className={'abstract_header_search'} onSubmit={handleSubmit}>
                <input type={"search"} placeholder={'Search'} enterKeyHint={"enter"} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default Header;