import { useState, useEffect  } from "react"
import { Hero } from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/cardProducts"
import { Product } from "../../interface"
import { getProducts } from "../../service"
import { Toaster } from "sonner"

const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getProducts().then((data) => {
    setProducts(data);
}).catch(() => {
    setError(true)
}).finally(() =>{
    setLoading(false)
}
)}
, [])


  return (
    <>
      < Hero />
      <Toaster />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error loading products</h1>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct
            key={product.id} product={product} 
          /> 
          ))}
      </div>
    </>
  )
}

export default Home

