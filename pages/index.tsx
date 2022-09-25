
import Image from "next/image"
import { styled } from "../src/styles"
import { HomeContainer, Product } from "../src/styles/pages/Home"
import camiseta1 from '../src/assets/1.png'
import camiseta2 from '../src/assets/2.png'
import camiseta3 from '../src/assets/3.png'
import { useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView:3,
      spacing:48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480}/>
        <footer>
          <strong>Camiseta-X</strong>
          <span>79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480}/>
        <footer>
          <strong>Camiseta-X</strong>
          <span>79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480}/>
        <footer>
          <strong>Camiseta-X</strong>
          <span>79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480}/>
        <footer>
          <strong>Camiseta-X</strong>
          <span>79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
