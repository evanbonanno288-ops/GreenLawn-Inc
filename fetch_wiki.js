async function searchWiki(query) {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srnamespace=6`);
    const data = await res.json();
    console.log(query, data.query.search.slice(0, 5).map(s => s.title));
}
searchWiki('lawn mower');
searchWiki('landscaping');
searchWiki('weed control lawn');
