import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { FC } from 'react'
import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interface'

interface Props {
    handleShowCartModal: () => void
}

export const CartModal : FC<Props> = ({handleShowCartModal}) => {

    const {state: {cartItems}, dispatch } = useCartContext()

    const removeItem = (item: CartProduct) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: item})
    }

    const addItem = (item : CartProduct) => {
        dispatch ({ type: 'ADD_TO_CART', payload: item})
    }

    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
                <img src={Close} alt="Close" />
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Delete</th>
                        <th>Quantity</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <p>{item.title}</p>
                        </td>
                        <td className={styles.modalModifierButtonContainer}>
                            <button onClick={() => removeItem(item)} > -1 </button>
                        </td>
                        <td>
                            <p>{item.quantity}</p>
                        </td>
                        <td className={styles.modalModifierButtonContainer}>
                            <button onClick={() => addItem(item)} > +1 </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h3>Total : u$d : 599</h3>
            </div>
            <div className={styles.modalButtonContainer }>
                <button >
                    checkout
                </button>
            </div>
        </div>
    )
}
