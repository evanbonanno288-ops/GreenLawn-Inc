const https = require('https');

https.get('https://unsplash.com/napi/search/photos?query=lawn%20care&per_page=10', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      json.results.slice(0, 5).forEach(img => {
        console.log(`Lawn Care: ${img.id} - ${img.alt_description}`);
      });
    } catch (e) { console.error('Parse error'); }
  });
});

https.get('https://unsplash.com/napi/search/photos?query=landscaping&per_page=5', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      json.results.slice(0, 5).forEach(img => {
        console.log(`Landscaping: ${img.id} - ${img.alt_description}`);
      });
    } catch (e) { console.error('Parse error'); }
  });
});

https.get('https://unsplash.com/napi/search/photos?query=fertilizer%20lawn&per_page=5', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      json.results.slice(0, 5).forEach(img => {
        console.log(`Fertilizer: ${img.id} - ${img.alt_description}`);
      });
    } catch (e) { console.error('Parse error'); }
  });
});

https.get('https://unsplash.com/napi/search/photos?query=lawn%20mower&per_page=5', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      json.results.slice(0, 5).forEach(img => {
        console.log(`Mower: ${img.id} - ${img.alt_description}`);
      });
    } catch (e) { console.error('Parse error'); }
  });
});
