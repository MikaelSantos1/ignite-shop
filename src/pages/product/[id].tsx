import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/Product";

interface ProductProps{
    product:{
        name:string;
        imagesUrl:string;
        id:string;
        price:string;
        description:string;
      }[]
}

export default function Product({product}:ProductProps) {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1></h1>
                <span>99</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam inventore exercitationem laborum dolores, id praesentium a consequuntur eligendi eos illum, eius fugit reprehenderit nesciunt debitis magnam delectus, molestias iure quam.</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price


    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imagesUrl: product.images[0],
                url: product.url,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount / 100),
                description: product.description
            }
        },
        revalidate: 60 * 60 * 1
    }
}