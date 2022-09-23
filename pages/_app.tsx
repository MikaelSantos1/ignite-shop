import { globalStyles } from "../src/styles/global"
import logoImg from '../src/assets/logo.svg'
import { Container, Header } from "../src/styles/pages/app";
import  Image from 'next/future/image'
globalStyles();
export default function App({ Component, pageProps }) {
  
  return( 
  <Container>
    <Header>
      <Image src={logoImg} alt="" />
    </Header>
  
 <Component {...pageProps} />
 </Container>
 )
}


