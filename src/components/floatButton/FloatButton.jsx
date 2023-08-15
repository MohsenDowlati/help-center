import {BiHelpCircle} from 'react-icons/bi'
import './floatButton.css';

const FloatButton = () => {

    const handleClick = () => {
      window.alert('Help!');
    }

    return(
        <button className={'float'} onClick={handleClick}><BiHelpCircle size={24}/> Help</button>
    )
}

export default FloatButton;