import https from 'https';

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
};

https.get('https://unsplash.com/s/photos/lawn-mower', options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const urls = body.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g);
      if (urls) {
          const unique = [...new Set(urls)].filter(u => !u.includes('profile'));
          console.log("\nLawn Mower Photos:\n" + unique.slice(0, 10).join('\n'));
      } else {
          console.log("No urls found, response code: " + res.statusCode);
      }
    });
});

https.get('https://unsplash.com/s/photos/landscape-gardening', options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const urls = body.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g);
      if (urls) {
          const unique = [...new Set(urls)].filter(u => !u.includes('profile'));
          console.log("\nLandscaping Photos:\n" + unique.slice(0, 10).join('\n'));
      }
    });
});
