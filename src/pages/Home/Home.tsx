import { useQuery } from "@tanstack/react-query"
import { Toaster } from "sonner"
import { CardProduct } from "../../components/cardProducts"
import { Hero } from "../../components/ui/Hero/Hero"
import { getProducts } from "../../service"
import styles from "./Home.module.css"


const Home = () => {

  const {data, isLoading, error} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })



  return (
    <>
      < Hero />
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error loading products</h1>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct
            key={product.id} product={product} 
          /> 
          ))}
      </div>
    </>
  )
}

export default Home

