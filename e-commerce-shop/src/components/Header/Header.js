import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Mushabüm</h1>
            
            <nav>
                <NavLink to='/'>Home</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;