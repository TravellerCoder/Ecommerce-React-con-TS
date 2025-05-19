import  styles  from './Table.module.css'
import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interface'

export const Table = () => {

    const {state: {cartItems}, dispatch } = useCartContext()

    const removeItem = (item: CartProduct) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: item})
    }

    const addItem = (item : CartProduct) => {
        dispatch ({ type: 'ADD_TO_CART', payload: item})
    }

    const totalPrice = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        return total
        }    

    return (
        <>
        <table className={styles.tableContainer}>
            <tbody className={styles.tableBody}>
                    {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td className={styles.tableImageContainer}>
                            <img src={item.image} alt={item.title} />
                        </td>
                        <td className={styles.tableTitleContainer}>
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
                <h3>{totalPrice()}</h3>
            </div>
        </>
    )
}
