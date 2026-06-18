const BASE_URL = "https://mi-sitio.com";

// Simulando datos de una base de datos
const getPostsFromDB = async () => {
  return [
    { slug: "introduccion-nextjs" },
    { slug: "optimizacion-seo" },
    { slug: "lazy-loading" },
  ];
};

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];
  const posts = await getPostsFromDB();
  const dynamicUrls = posts.map((post) => `/blog/${post.slug}`);
  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}