const icon = document.querySelector('.fa');
const links = document.querySelector('.list-links')

icon.addEventListener('click', () => {
  links.classList.toggle('active')
  icon.classList.toggle('fa-transform')
})

function initMap() {
  const options = {
    zoom: 11,
    center: { lat: 46.770920, lng: 23.589920 },
  }

  const map = new google.maps.Map(document.querySelector(".map"), options)

  const marker = new google.maps.Marker({
    position: { lat: 46.73883122603859, lng: 23.472590446472168 },
    map: map,
  });

}

// AJAX

