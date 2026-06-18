import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta name="description" content="Artículos sobre desarrollo web y SEO con Next.js." />
        <meta name="keywords" content="blog, Next.js, desarrollo web" />
        <meta property="og:title" content="Blog - Mi Sitio Optimizado" />
        <meta property="og:description" content="Lee los últimos artículos sobre tecnología web." />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Blog</h1>
      <p>Aquí encontrarás artículos sobre desarrollo web y SEO.</p>
    </>
  );
} 