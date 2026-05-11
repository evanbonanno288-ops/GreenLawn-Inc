import google from 'googlethis';

async function search() {
  const options = {
    page: 0, 
    safe: false, 
    additional_params: { 
      hl: 'en' 
    }
  };

  const mower = await google.image('site:images.unsplash.com lawn mower landscape', options);
  console.log("Mower:", mower.slice(0, 3).map(i => i.url));

  const weed = await google.image('site:images.unsplash.com fertilizing lawn weed spraying', options);
  console.log("Weed:", weed.slice(0, 3).map(i => i.url));

  const landscape = await google.image('site:images.unsplash.com front yard landscaping', options);
  console.log("Landscape:", landscape.slice(0, 3).map(i => i.url));

  const team = await google.image('site:images.unsplash.com professional lawn care workers', options);
  console.log("Team:", team.slice(0, 3).map(i => i.url));
}

search();
