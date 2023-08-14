import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Navbar , Header , Home , Footer , Abstract , ManageAccount , ManageProject , ManageBilling , Authenticate , FloatButton , Support} from './components/index';
import './app.css';
const App = () => (
    <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
            <Route path={'/'} exact element={<Home/>}/>
            <Route path={'/categories/abstract'} element={<Abstract/>}/>
            <Route path={'/categories/Manage-account'} element={<ManageAccount/>}/>
            <Route path={'/categories/Manage-projects'} element={<ManageProject/>}/>
            <Route path={'/categories/Manage-billing'} element={<ManageBilling/>}/>
            <Route path={'/categories/authenticate'} element={<Authenticate/>}/>
            <Route path={'/categories/support'} element={<Support/>}/>
        </Routes>
        <FloatButton/>
        <Footer/>
    </BrowserRouter>
)


export default App;