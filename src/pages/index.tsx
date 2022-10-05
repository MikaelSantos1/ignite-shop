
import Image from "next/image"
import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/Home"
import Link from "next/link"
import { useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import { GetServerSideProps, GetStaticProps } from "next"
import Stripe from "stripe"

interface HomeProps{
  products:{
    name:string;
    imagesUrl:string;
    id:string;
    price:string;
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView:3,
      spacing:48
    }
  })
  console.log(products)
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
     {products &&
      products.map((product)=>(
        <Link key={product.id}  href={`product/${product.id}`}>
        <Product className="keen-slider__slide" >
        
        <Image src={product.imagesUrl} width={520} height={480}/>
        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      </Product>
      </Link>
      ))
     }
      
    </HomeContainer>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
  const response = await stripe.products.list({
    expand:['data.default_price']
  })

  const products= response.data.map(product=>{
    const price = product.default_price as Stripe.Price
    return {
      id:product.id,
      name:product.name,
      imagesUrl:product.images[0],
      url:product.url,
      price:new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL'
      }).format(price.unit_amount / 100),

    }
  })
  return{
    props:{
      products
    },
    revalidate:60 * 60 * 2
  }
}