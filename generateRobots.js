import path from "path";
import { promises as fs } from "fs";

async function generateRobotsTxt() {
  const robotsTxtContent = `
  User-agent: *
  Disallow: /search
  Disallow: /favourites
  Disallow: /movie
  Allow: /

  Sitemap: https://filmbiblioteket.vercel.app/sitemap.xml
  `;

  const filePath = path.resolve("public", "robots.txt");
  await fs.writeFile(filePath, robotsTxtContent, "utf-8");

  console.log("robots.txt generated and saved to", filePath);
}

generateRobotsTxt();
