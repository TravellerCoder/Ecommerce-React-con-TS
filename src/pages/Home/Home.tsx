import { useQuery } from "@tanstack/react-query"
import { Toaster } from "sonner"
import { CardProduct } from "../../components/cardProducts"
import { Hero } from "../../components/ui/Hero/Hero"
import { getProducts } from "../../service"
import styles from "./Home.module.css"
import { useState } from "react"
import { ProductResponse } from "../../interface"


const Home = () => {

  const [page , setPage] = useState(0);

  const {data, isLoading, error} = useQuery<ProductResponse>({
    queryKey: ['products', page],
    queryFn: () => {
      console.log('page', page);
      return  getProducts(page)
    } ,
  })



  return (
    <>
      < Hero />
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error loading products</h1>}
      <div className={styles.container}>
        {data?.map(product => (
          <CardProduct
            key={product.id} product={product} 
          /> 
          ))}
      </div>
    </>
  )
}

export default Home

