
document.addEventListener('DOMContentLoaded', function() {
    const NASA_API_KEY = 'XroyhDFAKZch0BGfvcSg36V1iUAt7Jjxfcp4j8Me';

    // Fetch Astronomy Picture of the Day
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('apod-info').textContent = data.explanation;
            document.getElementById('apod-image').src = data.url;
        })
        .catch(error => console.error('Error fetching APOD:', error));

    // Fetch Near-Earth Asteroids
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${NASA_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const asteroids = data.near_earth_objects[Object.keys(data.near_earth_objects)[0]];
            const asteroidsContent = document.getElementById('asteroids-content');
            asteroids.slice(0, 4).forEach(asteroid => {
                const asteroidElement = document.createElement('div');
                asteroidElement.innerHTML = `
                    <p>Name: ${asteroid.name}</p>
                    <p>Diameter (meters): ${asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}</p>
                    <p>Close Approach Date: ${asteroid.close_approach_data[0].close_approach_date}</p>
                    <p>Miss Distance (kilometers): ${asteroid.close_approach_data[0].miss_distance.kilometers}</p>
                `;
                asteroidsContent.appendChild(asteroidElement);
            });
        })
        .catch(error => console.error('Error fetching asteroids:', error));

    // Fetch ISS Tracker data and space metrics
    function fetchISSData() {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(response => response.json())
            .then(data => {
                const { latitude, longitude } = data.iss_position;
                document.getElementById('iss-coordinates').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            })
            .catch(error => console.error('Error fetching ISS data:', error));

        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                const people = data.people.map(person => person.name).join(', ');
                document.getElementById('people-in-space').textContent = `People in space: ${data.number} (${people})`;
            })
            .catch(error => console.error('Error fetching people in space:', error));

        // Use dummy data for space weather metrics
        const spaceWeatherData = {
            solar_flare_activity: 'Moderate',
            geomagnetic_storms: 'Active',
            solar_wind_speed: '500 km/s'
        };
        document.getElementById('space-weather').innerHTML = `
            <p>Solar Flare Activity: ${spaceWeatherData.solar_flare_activity}</p>
            <p>Geomagnetic Storms: ${spaceWeatherData.geomagnetic_storms}</p>
            <p>Solar Wind Speed: ${spaceWeatherData.solar_wind_speed}</p>
        `;

        // Initialize Leaflet map
        const map = L.map('iss-map').setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const issIcon = L.icon({
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
            iconSize: [50, 32],
            iconAnchor: [25, 16]
        });
        const issMarker = L.marker([0, 0], { icon: issIcon }).addTo(map);

        function updateISSPosition() {
            fetch('http://api.open-notify.org/iss-now.json')
                .then(response => response.json())
                .then(data => {
                    const { latitude, longitude } = data.iss_position;
                    issMarker.setLatLng([latitude, longitude]);
                    map.setView([latitude, longitude], 2);
                    document.getElementById('iss-coordinates').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
                })
                .catch(error => console.error('Error fetching ISS data:', error));
        }

        updateISSPosition();
        setInterval(updateISSPosition, 5000); // Update ISS position every 5 seconds
    }

    fetchISSData();
    setInterval(fetchISSData, 5000); // Update ISS data every 5 seconds
});
