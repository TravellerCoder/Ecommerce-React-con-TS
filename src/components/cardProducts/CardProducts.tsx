import styles from './CardProduct.module.css'

export const CardProducts = ({product}) => {
  return (
    <div className={styles.cardContainer} >
      <img className={styles.cardImage} src={product.image} alt={product.name} />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>{product.category}</p>
          <p className={styles.cardPrice}>
            {product.price} 
          </p>
        </div>
        <button className={styles.cardButton}>Agregar al carrito</button>
      </div>
    </div>
  )
}
