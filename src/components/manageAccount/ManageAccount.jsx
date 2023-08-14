import {manage_account} from "../../constant/texts";
import AbstractArticles from "../../container/AbstractArticles/AbstractArticles";
const ManageAccount = () => (
    <div style={{margin:'6rem 4rem'}}>
        <AbstractArticles title={'Manage your account '} articles={manage_account}/>
    </div>
)

export default ManageAccount;