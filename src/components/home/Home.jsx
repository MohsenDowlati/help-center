import SectionCard from "../../container/SectionsCard/SectionCard";
import {home_data} from "../../constant/texts";
import './home.css';
const Home = () => (
    <div className={"abstract_home"}>
        {home_data.map((card,index)=>(
            <div>
            <SectionCard img={card.img} title={card.title} description={card.description} key={index}/>
            </div>
            ))}
    </div>
)

export default Home;