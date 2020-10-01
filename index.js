import { config } from 'dotenv'
import screenshotmachine from 'screenshotmachine';
import { createUniqueName } from './helper';

config()

const customerKey = process.env.SCREENSHOT_KEY;
const secretPhrase = process.env.SECRETPHRASE;
const url = 'https://www.propertypartner.co' // change this url to test test cases
const options = {
  url,
  dimension: '1920x1080',
  device: 'desktop',
  format: 'jpg',
  cacheLimit: '0',
  delay: '100',
  zoom: '100'
}

export const apiUrl = screenshotmachine.generateScreenshotApiUrl(customerKey, secretPhrase, options);

export const output = `${createUniqueName(url)}.jpg`;

