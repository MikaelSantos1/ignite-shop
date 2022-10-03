
import Image from "next/image"
import { styled } from "../src/styles"
import { HomeContainer, Product } from "../src/styles/pages/Home"
import camiseta1 from '../src/assets/1.png'
import camiseta2 from '../src/assets/2.png'
import camiseta3 from '../src/assets/3.png'
import { useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../src/lib/stripe"
import { GetServerSideProps, GetStaticProps } from "next"
import Stripe from "stripe"

interface HomeProps{
  products:{
    name:string;
    imagesUrl:string;
    id:string;
    price:number[];
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
        <Product className="keen-slider__slide" key={product.id}>
        <Image src={product.imagesUrl} width={520} height={480}/>
        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      </Product>
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
      price:price.unit_amount / 100,

    }
  })
  return{
    props:{
      products
    },
    revalidate:60 * 60 * 2
  }
}