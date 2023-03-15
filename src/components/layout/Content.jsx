import './Content.css';
import { Routes, Route } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';

const Content = (props) => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/param/:id" element={<Param/>} />
            </Routes>
        </main>
    );
}

export default Content;