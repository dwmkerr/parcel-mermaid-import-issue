import chromeLauncher from 'chrome-launcher';
import * as path from 'path';
var absolutePath = path.resolve("../dist");

console.log(`Path is: ${absolutePath}`)

chromeLauncher.launch({
  startingUrl: 'chrome://extensions',
  //chromeFlags: ['--new-window', `--load-and-launch-app=${absolutePath}`]
  chromeFlags: ['--new-window']

}).then(chrome => {
  console.log(`Chrome debugging port running on ${chrome.port}`);
});
