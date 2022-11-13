import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header__text}>Mushabüm</h1>            
            <nav className={styles.header__menu}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/checkout'>Checkout</NavLink>                
            </nav>
        </div>
    );
};

export default Header;