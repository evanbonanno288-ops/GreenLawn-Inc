import { image_search } from 'duckduckgo-images-api';

async function search() {
    try {
        const mowers = await image_search({ query: "residential landscaping lawn mowing professional", moderate: true });
        console.log("Mower:", mowers.slice(0, 5).map(x => x.image));

        const weed = await image_search({ query: "lawn weed control spraying professional", moderate: true });
        console.log("Weed:", weed.slice(0, 5).map(x => x.image));

        const landscape = await image_search({ query: "beautiful luxury front yard landscaping", moderate: true });
        console.log("Landscape:", landscape.slice(0, 5).map(x => x.image));
        
        const team = await image_search({ query: "professional lawn care landscaping truck workers", moderate: true });
        console.log("Team:", team.slice(0, 5).map(x => x.image));
    } catch (e) {
        console.error("Error", e);
    }
}
search();
