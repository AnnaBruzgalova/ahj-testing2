import puppeteer from 'puppeteer';

describe('credit card validation', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  jest.setTimeout(10000);

  test('success submit should add class .valid for correct card logo', async () => {
    await page.goto('http://localhost:9000/');

    await page.waitForSelector('.cards');
    await page.waitForSelector('.form-widget');
    await page.waitForSelector('[title="American Express"] img');

    const form = await page.$('.form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('3714 4963 5398 431');
    await submit.click();

    await page.waitForSelector('[title="American Express"] img.valid');
  });

  test('fail attempt of validation should show response in input field', async () => {
    await page.goto('http://localhost:9000/');

    await page.waitForSelector('.cards');
    await page.waitForSelector('.form-widget');
    await page.waitForSelector('[title="American Express"] img');

    const form = await page.$('.form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('12345678901122');
    await submit.click();

    await page.waitForSelector('.input.invalid');
  });

  afterEach(async () => {
    await browser.close();
  });
});
