document.addEventListener('DOMContentLoaded', function () {
    // Replace with your own locations
    const locations = [
        { lat: 22.760277, lng: 75.8855556, info: 'INDIA, Indore, Site1' },
        { lat: 22.762778, lng:  75.883888,  info: 'INDIA, Site2' },
        { lat: 22.761111, lng:  75.880556, info: 'INDIA, Site3' },
        { lat: 22.761111, lng:  75.886111, info: 'INDIA, Site4' }
    ];

    // Initialize the map
    const map = L.map('map').setView([locations[0].lat, locations[0].lng], 4);

    // Set up the OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers to the map
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(location.info);
    });
});
