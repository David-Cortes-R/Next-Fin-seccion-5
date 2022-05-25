import { FC } from "react";
import Head from "next/head";
import { Navbar } from '../ui';
import { useRouter } from "next/router";


interface Props {
    children: JSX.Element,
    title?: string
}


const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {



    
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="David Cortes" />
            <meta name="description" content={`Información sobre el Pokemon ${ title }`} />
            <meta name="keywords" content={`Pokemon, pokedex, XXXXX, XXXXX, XXXXX`} />

            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la Pagina sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
