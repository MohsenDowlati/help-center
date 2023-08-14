import {manage_billing} from "../../constant/texts";
import AbstractArticles from "../../container/AbstractArticles/AbstractArticles";
const ManageAccount = () => (
    <div style={{margin:'6rem 4rem'}}>
        <AbstractArticles title={'Manage billing'} articles={manage_billing}/>
    </div>
)

export default ManageAccount;