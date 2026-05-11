async function check(url) {
  try {
    const res = await fetch(url.replace(/\?.*$/, ''), { method: 'HEAD' });
    console.log(url.slice(0, 30), res.status);
  } catch (e) {
    console.log(url.slice(0, 30), e.message);
  }
}
check('https://blog.landscapeprofessionals.org/wp-content/uploads/2025/04/meganclouse_september2023-369-scaled.jpg');
check('https://lehighvalleylawn.com/files/account/images/blog/blog-lawn-care-tech-applying-fertilizer-treatment-on-grass.webp');
check('https://myelitelawncare.com/media/images/imported/2022/12/elite-lawn-care-lawn-fertilizer-service-3.2-1024x683.jpg');
check('https://www.landscapingbuffalony.com/assets/professional-fertilizer-application-buffalo-ny.png');

