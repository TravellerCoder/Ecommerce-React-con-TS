import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { FC } from 'react'

interface Props {
    handleShowCartModal: () => void
}

export const CartModal : FC<Props> = ({handleShowCartModal}) => {
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
                    <tr>
                        <td>name</td>
                        <td className={styles.modalModifierButtonContainer}>
                            <button > -1 </button>
                        </td>
                        <td>12</td>
                        <td className={styles.modalModifierButtonContainer}>
                            <button > +1 </button>
                        </td>
                    </tr>
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
