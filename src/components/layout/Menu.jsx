import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/param/1">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/2">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;