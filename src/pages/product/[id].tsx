import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/Product";

export default function Product(){
    return(
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>99</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam inventore exercitationem laborum dolores, id praesentium a consequuntur eligendi eos illum, eius fugit reprehenderit nesciunt debitis magnam delectus, molestias iure quam.</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}