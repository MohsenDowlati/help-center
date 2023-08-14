import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Navbar , Header , Home , Footer , Abstract , ManageAccount} from './components/index';

const App = () => (
    <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
            <Route path={'/'} exact element={<Home/>}/>
            <Route path={'/categories/abstract'} element={<Abstract/>}/>
            <Route path={'/categories/Manage-account'} element={<ManageAccount/>}/>
            <Route path={'/categories/Manage-projects'} element={<button/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
)


export default App;