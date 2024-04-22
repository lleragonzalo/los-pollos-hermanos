function initMap() {

    const restaurantCoords = { lat: -34.86855002805953, lng: -56.213803575121965 };


    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: restaurantCoords,
    });

    const marker = new google.maps.Marker({
        position: restaurantCoords,
        map: map,
        title: "Los pollos hermanos",
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("open-google-maps").addEventListener("click", function (event) {
        event.preventDefault();
        window.open("https://www.google.com/maps/place/Husares+3638,+11700+Montevideo");
    });
});

