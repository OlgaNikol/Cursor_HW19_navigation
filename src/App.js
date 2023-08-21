import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Main from "./pages/main";
import Posts from "./pages/posts";
import Pictures from "./pages/pictures";
import Contacts from "./pages/contacts";
import ContactDetails from "./components/contact/ContactDetails";

function App() {
    return (
        <BrowserRouter>
            <nav className="navigation">
                <Link to='/'>Main</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/pictures'>Pictures</Link>
                <Link to='/contacts'>Contacts</Link>
            </nav>
            <Routes>
                <Route index element={<Main />}/>
                <Route path='posts' element={<Posts />}/>
                <Route path='pictures' element={<Pictures />}/>
                <Route path='contacts'>
                    <Route index element={<Contacts />}></Route>
                    <Route path=':contactName' element={<ContactDetails />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;