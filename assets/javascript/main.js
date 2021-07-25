'use strict';

document.addEventListener("DOMContentLoaded", domLoadedEvent => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', clickEvent => {
      clickEvent.preventDefault();

      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});


document.addEventListener("DOMContentLoaded", domLoadedEvent => {
  window.addEventListener('scroll', scrollEvent => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    document.querySelectorAll("nav .navbar-menu .navbar-item").forEach(menuItem => {
      const section = document.querySelector(menuItem.getAttribute("href"));

      if (section.offsetTop <= scrollPosition + 52) {
        document.querySelector('.navbar .is-active').classList.remove('is-active');
        document.querySelector('.navbar a[href*=' + section.id + ']').classList.add('is-active');
      }
    });
  });
});


const updateMap = (container, map, location) => {
  const containerWidth = document.getElementById(container).clientWidth;
  const mapWidth = Math.min(containerWidth, 640);

  document.getElementById(map).src =
    "https://maps.googleapis.com/maps/api/staticmap" +
    `?markers=color:0x00a1ff|${location}` +
    "&zoom=14" +
    `&size=${mapWidth}x${Math.ceil(mapWidth / 2)}` +
    "&scale=" + (window.devicePixelRatio || 1) +
    "&key=AIzaSyCpnH4RQigHrMsZxB8yPdAGLURKh1psPOs";
}

const updateMap1 = () => updateMap("mapContainer1", "map1", "Karlsplatz+5,+München");
const updateMap2 = () => updateMap("mapContainer2", "map2", "Herzog-Heinrich-Str.+6,+München");

window.addEventListener("DOMContentLoaded", updateMap1);
window.addEventListener("resize", updateMap1);
window.addEventListener("DOMContentLoaded", updateMap2);
window.addEventListener("resize", updateMap2);
