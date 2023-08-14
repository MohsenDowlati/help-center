import AbstractArticles from "../../container/AbstractArticles/AbstractArticles";
import {abstract_articles , abstract_practice} from "../../constant/texts";
import './abstract.css';
const Abstract = () => (
    <div className={"abstract_abstract section_padding"}>
        <div className={"abstract_abstract_articles"}>
            {abstract_articles.map((card,index)=>(
                <AbstractArticles title={card.title} articles={card.articles} key={card.id} key={index}/>
            ))}
        </div>
        <div className={"abstract_abstract_practices"}>
            <h1>Abstract Best Practices</h1>
            <ul className={'abstract_abstract_practices_practice'}>
            {abstract_practice.map((value)=>(
                <li>{value.title} <ul>{value.practices.map((practice)=>(
                    <li>{practice}</li>
                ))}</ul></li>
            ))}
            </ul>
        </div>
    </div>
)

export default Abstract;