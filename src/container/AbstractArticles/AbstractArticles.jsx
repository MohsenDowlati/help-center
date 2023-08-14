import './abstractArticles.css';
const AbstractArticles = ({title , articles}) =>(
    <article className={"abstract_abstract_articles_article"}>
        <h2>{title}</h2>
        <ul>
            {articles.map((article , index)=>(
                <li key={index}>{article}</li>
            ))}
        </ul>
    </article>
)

export default AbstractArticles;