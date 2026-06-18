const BASE_URL = "https://mi-proyecto-seo-six.vercel.app";

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];

  // Obteniendo posts desde una API externa (simula un CMS)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await response.json();
  const dynamicUrls = posts.map((post) => `/blog/${post.id}`);

  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allUrls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();
}