const puppet = require("puppeteer");
const wait = (milliseconds) => {
  //function for waiting
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, milliseconds);
  });
};

const startApp = async () => {
  const browser = await puppet.launch({
    headless: false, // false to show browser, true to run in the background
    ignoreHTTPSErrors: true,
    // args: ["--no-sandbox", "--disable-web-security"],
    timeout: 0,
  });

  const page = await browser.newPage();
  // set view for the page dynamically
  await page.setViewport({
    width: 1268 + Math.floor(Math.random() * 100),
    height: 960 + Math.floor(Math.random() * 100),
    // deviceScaleFactor: 1,
    hasTouch: false,
    isLandscape: false,
    isMobile: false,
  });

  await page.goto("https://www.imdb.com/", {
    waitUntil: "load",
    timeout: 0,
  });
  console.log("target link opened");
  console.log("start waiting....");
  await wait(10000);
  console.log("close the browser");
  await browser.close();
};

startApp();
