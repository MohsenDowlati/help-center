import {BiHelpCircle} from 'react-icons/bi'
import './floatButton.css';
import {useState} from "react";

const FloatButton = () => {

    const [clicked , setClicked] = useState(false);
    const handleClick = () => {
      if (!clicked)
          setClicked(true);
    }

    return(
        <button className={'float'} onClick={handleClick}><BiHelpCircle size={24}/> Help</button>
    )
}

export default FloatButton;