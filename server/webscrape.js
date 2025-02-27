const puppeteer = require("puppeteer");   // imports puppeteer

async function scrapeQuotes() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");

  const quotes = await page.evaluate(() => {
    const quoteElements = document.querySelectorAll(".quote");
    const quotesArray = [];

    for (const quoteElement of quoteElements) {
      const quoteText = quoteElement.querySelector(".text").innerText;
      const author = quoteElement.querySelector(".author").innerText;

      const tagElements = quoteElement.querySelectorAll(".tags .tag");
      const tagsArray = [];

      for (const tagElement of tagElements) {
        const tagLabel = tagElement.innerText;
        tagsArray.push(tagLabel);
      }

      quotesArray.push({
        quote: quoteText,
        author,
        tags: tagsArray,
      });
    }
    return quotesArray;
  });

  await browser.close();
  return quotes;
}

module.exports = { scrapeQuotes };