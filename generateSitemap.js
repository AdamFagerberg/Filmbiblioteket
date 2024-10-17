import path from "path";
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

async function generateSitemap() {
  const hostname = "https://filmbiblioteket.vercel.app";

  const writeStream = createWriteStream(path.resolve("public", "sitemap.xml"));
  const sitemap = new SitemapStream({ hostname });

  sitemap.pipe(writeStream);

  const urls = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/favourites", changefreq: "weekly", priority: 0.5 },
  ];

  urls.forEach(({ url, changefreq, priority }) => {
    sitemap.write({ url, changefreq, priority });
  });

  sitemap.end();
}

generateSitemap();
