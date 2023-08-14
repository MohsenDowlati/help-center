import './sectionCard.css';
import {Link} from 'react-router-dom'
const SectionCard = ({img,title,description,navigate}) =>(
    <div className={"abstract_home_section"}>
        <div className={"abstract_home_section_img"}>
            <img src={img} alt="card"/>
        </div>
        <div className={"abstract_home_section_info"}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to={navigate}>Learn More &#10230;</Link>
        </div>
    </div>
)

export default SectionCard;