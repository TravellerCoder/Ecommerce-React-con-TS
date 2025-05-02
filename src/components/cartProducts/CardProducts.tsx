import styles from './CardProduct.module.css'

export const CardProducts = () => {
  return (
    <div className={styles.cardContainer} >
      <img className={styles.cardImage} src="" alt="" />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>title</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>type</p>
          <p className={styles.cardPrice}>
            price <small>00</small>
          </p>
        </div>
        <button className={styles.cardPrice}>Agregar al carrito</button>
      </div>
    </div>
  )
}
