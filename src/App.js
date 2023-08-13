import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Navbar , Header , Home , Footer , Abstract} from './components/index';

const App = () => (
    <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
            <Route path={'/'} exact element={<Home/>}/>
            <Route path={'/categories/abstract'} element={<Abstract/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
)


export default App;