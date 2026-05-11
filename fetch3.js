async function fetchImages() {
    try {
        const mowerReq = await fetch('https://unsplash.com/s/photos/lawn-mower', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const mowerBody = await mowerReq.text();
        const mowerUrls = mowerBody.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g);
        console.log("Mower:", mowerUrls ? [...new Set(mowerUrls)].slice(0, 5) : "None" , mowerReq.status);

        const landReq = await fetch('https://unsplash.com/s/photos/front-yard-landscaping', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const landBody = await landReq.text();
        const landUrls = landBody.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g);
        console.log("Landscaping:", landUrls ? [...new Set(landUrls)].slice(0, 5) : "None");
        
        const weedReq = await fetch('https://unsplash.com/s/photos/weed-control', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const weedBody = await weedReq.text();
        const weedUrls = weedBody.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g);
        console.log("Weed:", weedUrls ? [...new Set(weedUrls)].slice(0, 5) : "None");

    } catch (e) {
        console.error(e);
    }
}

fetchImages();
