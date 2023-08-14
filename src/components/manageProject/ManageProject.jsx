import {manage_projects} from "../../constant/texts";
import AbstractArticles from "../../container/AbstractArticles/AbstractArticles";
import './manageProject.css';
const ManageProject = () => (
    <div className={"abstract_project"} style={{margin:'6rem 4rem'}} >
        {manage_projects.map((project)=>(
            <AbstractArticles title={project.title} articles={project.articles} key={project.id}/>
        ))}
    </div>
)

export default ManageProject;