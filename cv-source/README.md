# CV source

`cv.html` is the source for `public/cv/William-Nasoni-CV.pdf`. Edit the HTML,
then regenerate the PDF — do not edit the PDF directly, or the two will drift.

To regenerate (needs Playwright's Chromium, or any headless Chrome):

```js
const { chromium } = require('@playwright/test');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + __dirname + '/cv.html', { waitUntil: 'networkidle' });
  await p.pdf({
    path: '../public/cv/William-Nasoni-CV.pdf',
    format: 'A4', printBackground: true,
    margin: { top: '13mm', bottom: '13mm', left: '14mm', right: '14mm' },
  });
  await b.close();
})();
```

The original LibreOffice PDF used Carlito/Calibri. Chromium falls back to a
system sans on macOS, so letterforms differ slightly from that version.
