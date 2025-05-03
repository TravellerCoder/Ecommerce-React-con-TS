import Logo from '../../../assets/logo.svg';
import CartIcon from '../../../assets/cart.svg';
import styles from './NavBar.module.css';
import { useState } from 'react';
import { CartModal } from '../cartModal';


export const NavBar = () => {

    const [showCartModal, setShowCartModal] = useState(false);

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal);
    }

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
            <img src={CartIcon} alt="Emoji de carrito" onClick={handleShowCartModal} />
        </div>
        {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
    </div>
  )
}
