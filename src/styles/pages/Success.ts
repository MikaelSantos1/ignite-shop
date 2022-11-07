import { styled } from "@stitches/react";

export const SuccessContainer = styled('main',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'0 auto',
    height:656,

    h1:{
        fontSize:'2xl',
        color:'$gray100'
    },
    p:{
        marginTop:'2rem',
        fontSize:'xl',
        color:'$gray300',
        maxWidth:560,
        textAlign:'center',
        lineHeight:'1.4rem'
    },
    a:{
        marginTop:'5rem',
        display:'block',
        fontSize:'large',
        color:'$green500',
        textDecoration:'none',
        fontWeight:'bold',

        '&:hover':{
            color:'$green300'
        }
    }
})

export const ImageContainer= styled('div',{
    width:'100%',
    maxWidth:130,
    height:145,
    background:'linear-gradient(180deg, #1ea483 0%, #7465D4 100%)',
    borderRadius:8,
    padding:'0.25rem',
    marginTop:'4rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
    img:{
        objectFit:'cover'
    }
})