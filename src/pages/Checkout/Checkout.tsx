import { Table } from "../../components/ui/Table/Table"
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Finaliza tu compra</h1>
      <div className={styles.grid}>
        <div>
          < Table />
        </div>
      </div>

    </div>
    
  )
}

export default Checkout 