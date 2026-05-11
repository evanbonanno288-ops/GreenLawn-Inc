import https from 'https';

https.get('https://unsplash.com/s/photos/lawn-care', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const urls = body.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+|https:\/\/plus\.unsplash\.com\/premium_photo-[a-zA-Z0-9\-]+/g);
    if (urls) {
        // filter out profile photos and deduplicate
        const unique = [...new Set(urls)].filter(u => !u.includes('profile'));
        console.log("Lawn Care Photos:\n" + unique.slice(0, 10).join('\n'));
    }
  });
});

https.get('https://unsplash.com/s/photos/lawn-mower', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const urls = body.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+|https:\/\/plus\.unsplash\.com\/premium_photo-[a-zA-Z0-9\-]+/g);
      if (urls) {
          const unique = [...new Set(urls)].filter(u => !u.includes('profile'));
          console.log("\nLawn Mower Photos:\n" + unique.slice(0, 10).join('\n'));
      }
    });
  });

  https.get('https://unsplash.com/s/photos/weed-control', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const urls = body.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+|https:\/\/plus\.unsplash\.com\/premium_photo-[a-zA-Z0-9\-]+/g);
      if (urls) {
          const unique = [...new Set(urls)].filter(u => !u.includes('profile'));
          console.log("\nWeed control Photos:\n" + unique.slice(0, 10).join('\n'));
      }
    });
  });

  https.get('https://unsplash.com/s/photos/beautiful-landscaping', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const urls = body.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+|https:\/\/plus\.unsplash\.com\/premium_photo-[a-zA-Z0-9\-]+/g);
      if (urls) {
          const unique = [...new Set(urls)].filter(u => !u.includes('profile'));
          console.log("\nLandscaping Photos:\n" + unique.slice(0, 10).join('\n'));
      }
    });
  });
