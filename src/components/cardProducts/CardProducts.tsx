import styles from './CardProduct.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CardProducts = ({product}) => {

  const {dispatch} = useContext(CartContext)

  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity : 1,
  }

  const addToCart = (() => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  })

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
        <button className={styles.cardButton} onClick={() => addToCart(item)}>Agregar al carrito</button>
      </div>
    </div>
  )
}
