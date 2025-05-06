import { FC } from 'react'
import useCartContext from '../../hooks/useCartContext'
import { CartProduct, Product } from '../../interface'
import styles from './CardProduct.module.css'

interface Props{
  product: Product
}



export const CardProduct: FC<Props> = ({product}) => {

  const {dispatch} = useCartContext()

  const item: CartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity : 1,
  }

  const addToCart = ((item: CartProduct) => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  })

  return (
    <div className={styles.cardContainer} >
      <img className={styles.cardImage} src={product.image} alt={product.title} />
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
