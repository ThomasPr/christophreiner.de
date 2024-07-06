'use strict';

document.addEventListener("DOMContentLoaded", domLoadedEvent => {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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


document.addEventListener("DOMContentLoaded", domLoadedEvent => {
  document.querySelectorAll('.more-button').forEach(anchor => {
    anchor.addEventListener('click', clickEvent => {
      clickEvent.preventDefault();
      const parent = clickEvent.currentTarget.parentElement;
      parent.querySelector(".more-button").style.display = 'none';
      parent.querySelector(".more-content").style.display = 'block';
    });
  });
});


const updateMap = () => {
  const containerWidth = document.getElementById("mapContainer1").clientWidth;
  const mapWidth = Math.min(containerWidth, 640);

  document.getElementById("map1").src =
    "https://maps.googleapis.com/maps/api/staticmap" +
    `?markers=color:0x00a1ff|Karlsplatz+5,+München` +
    "&zoom=14" +
    `&size=${mapWidth}x${Math.floor(mapWidth / 2)}` +
    "&scale=" + (window.devicePixelRatio || 1) +
    "&key=AIzaSyCpnH4RQigHrMsZxB8yPdAGLURKh1psPOs";

  document.getElementById("map2").src =
    "https://maps.googleapis.com/maps/api/staticmap" +
    `?markers=color:0x00a1ff|Agnes-Bernauer-Str.+123,+München` +
    "&zoom=13" +
    `&size=${mapWidth}x${Math.floor(mapWidth / 2)}` +
    "&scale=" + (window.devicePixelRatio || 1) +
    "&key=AIzaSyCpnH4RQigHrMsZxB8yPdAGLURKh1psPOs";
}

window.addEventListener("DOMContentLoaded", updateMap);
window.addEventListener("resize", updateMap);


const manikinPadding = () => {
  document.querySelectorAll('h2.manikin').forEach(element => {
    element.style.paddingLeft = element.clientHeight * 0.75 + "px";
  });
}
window.addEventListener("DOMContentLoaded", manikinPadding);
window.addEventListener("resize", manikinPadding);


document.addEventListener("DOMContentLoaded", () => {
  const impressumContent = document.getElementById("impressum-content")
  document.getElementById("impressum-link").addEventListener("click", clickEvent => {
    clickEvent.preventDefault();
    impressumContent.hidden = !impressumContent.hidden;
  })
});

