import Logo from '../../../assets/navbarIcono2.png';
import CartIcon from '../../../assets/cart.svg';
import styles from './NavBar.module.css';
import { useState } from 'react';
import { CartModal } from '../cartModal';
import useCartContext from '../../../hooks/useCartContext';
import { useLocation, useNavigate } from 'react-router-dom';


export const NavBar = () => {

    const [showCartModal, setShowCartModal] = useState(false);

    const {state:{cartItems}} = useCartContext();

    const navigate = useNavigate();

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal);
    }

    const handleHomeClick = () => {
        navigate('/');    
    }

    const location = useLocation();


  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
            <img src={Logo} alt="Logo de empresa" />
            <div>
                <button onClick={handleHomeClick} className={styles.navbarButton}>
                    <h2>MotoTire</h2>
                </button>
            </div>
        </div>
        {location.pathname !== '/checkout' && (
            <>
                <div className={styles.navbarCartContainer}>
                    <span className={styles.navBarTextAmount}>{ cartItems.length }</span>
                    <img src={CartIcon} alt="Emoji de carrito" onClick={handleShowCartModal} />
                </div>
                {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
            </>
        )}
    </div>
    )
}
