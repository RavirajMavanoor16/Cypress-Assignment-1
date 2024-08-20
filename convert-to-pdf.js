const puppeteer = require('puppeteer');
const path = require('path');

async function printPDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const reportPath = path.resolve(__dirname, 'cypress/reports/report.html');
  await page.goto(`file://${reportPath}`, { waitUntil: 'networkidle2' });
  await page.pdf({ path: 'cypress/reports/report.pdf', format: 'A4' });
  await browser.close();
}

printPDF();
