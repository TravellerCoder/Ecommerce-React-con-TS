import { Table } from "../../components/ui/Table/Table"
import  CreditCardForm  from "../../components/ui/CreditCard/CreditCard"
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Finaliza tu compra</h1>
      <div className={styles.grid}>
        <div>
          < Table />
          < CreditCardForm />
        </div>
      </div>

    </div>
    
  )
}

export default Checkout 