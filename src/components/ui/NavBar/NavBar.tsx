import Logo from '../../../assets/logo.svg';
import CartIcon from '../../../assets/cart.svg';
import styles from './NavBar.module.css';


export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
            <img src={Logo} alt="Logo de empresa" />
            <div>
                <h2>Ecommerce</h2>
            </div>
        </div>
        <div className={styles.navbarCartContainer}>
            <span className={styles.navBarTextAmount}>2</span>
            <img src={CartIcon} alt="Emoji de carrito" />
        </div>
    </div>
  )
}
