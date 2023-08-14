import {authentication} from "../../constant/texts";
import AbstractArticles from "../../container/AbstractArticles/AbstractArticles";
const ManageAccount = () => (
    <div style={{margin:'6rem 4rem'}}>
        <AbstractArticles title={'Authenticate to Abstract'} articles={authentication}/>
    </div>
)

export default ManageAccount;