import { GetStaticPaths, GetStaticProps } from "next";
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
        defaultPriceId:string;
      }
}

export default function Product({product}:ProductProps) {
    function handleBuyProduct(){
        console.log(product.defaultPriceId)
    }

    const { isFallback } = useRouter()
    if(isFallback){
        return <h1>loading</h1>
    }
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button onClick={handleBuyProduct}>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}
export const getStaticPaths:GetStaticPaths = async()=>{
    return{
        paths:[{
            params:{id:'prod_MXhAbo18pvpO8P'}
        },
    ],
    fallback:true
    }
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
                description: product.description,
                defaultPriceId:price.id
            }
        },
        revalidate: 60 * 60 * 1
    }
}