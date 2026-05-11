import google from 'googlethis';

async function search() {
  const options = {
    page: 0, 
    safe: false, 
    additional_params: { 
      hl: 'en' 
    }
  };

  const weed = await google.image('lawn care technician applying fertilizer residential beautiful', options);
  console.log("Weed1:", weed.slice(0, 5).map(i => i.url));

  const weed2 = await google.image('professional lawn spraying fertilizer residential', options);
  console.log("Weed2:", weed2.slice(0, 5).map(i => i.url));
}

search();

