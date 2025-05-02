import { useState, useEffect  } from "react"
import { Hero } from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import { CardProducts } from "../../components/cardProducts/CardProducts"


const Home = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
    const response = await fetch ('http://localhost:3000/products');
    const data = await response.json();
    console.log("Datos obtenidos:", data);
    setProducts(data);
  }catch (error) {
    console.error( error);
  }
}

useEffect(() => {
  getProducts()
}
, [])

  console.log(products)

  return (
    <>
      < Hero />
      <div className={styles.container}>
        {products.map((product) => (
          <CardProducts
            key={product.id} product={product} 
          /> 
          ))}
      </div>
    </>
  )
}

export default Home

