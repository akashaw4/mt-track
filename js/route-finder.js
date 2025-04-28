// Bus stops array for route suggestions
const busStops = [
    'Central Bus Stand', 'Rankala Lake', 'Railway Station', 'New Palace',
    'Tarabai Park', 'Rajarampuri', 'Shivaji Peth', 'Sambhaji Nagar',
    'Kasba Bawada', 'Udyam Nagar', 'Laxmipuri', 'Jaysingpur',
    'Ichalkaranji', 'Bindu Chowk', 'Shahupuri', 'Kalamba',
    'Market Yard', 'Shivaji University', 'Mahadwar Road',
    'Line Bazaar', 'Gangavesh'
].sort();

function initializeSearchDropdowns() {
    const fromSelect = document.getElementById('from-location');
    const toSelect = document.getElementById('to-location');

    // Populate dropdowns with bus stops
    busStops.forEach(stop => {
        const fromOption = new Option(stop, stop);
        const toOption = new Option(stop, stop);
        fromSelect.add(fromOption);
        toSelect.add(toOption);
    });

    // Add event listeners for dropdowns
    [fromSelect, toSelect].forEach(select => {
        select.addEventListener('change', () => {
            if (fromSelect.value && toSelect.value) {
                findRoutes();
            }
        });
    });
}

function findRoutes() {
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;
    const searchResults = document.getElementById('search-results');
    
    if (!fromLocation || !toLocation) {
        searchResults.innerHTML = '<div class="alert alert-warning">Please select both starting and destination locations</div>';
        return;
    }
    
    searchResults.innerHTML = '<div class="loading-indicator"></div>';
    
    setTimeout(() => {
        const routes = [
            {
                routeId: 'KMT-01',
                from: fromLocation,
                to: toLocation,
                departureTime: '07:30 AM',
                arrivalTime: '08:15 AM',
                fare: '₹25',
                distance: '7.5 km',
                duration: '45 min',
                stops: 8,
                status: 'On Time'
            },
            {
                routeId: 'KMT-03',
                from: fromLocation,
                to: toLocation,
                departureTime: '08:00 AM',
                arrivalTime: '08:50 AM',
                fare: '₹30',
                distance: '8.2 km',
                duration: '50 min',
                stops: 10,
                status: 'Delayed'
            },
            {
                routeId: 'KMT-05',
                from: fromLocation,
                to: toLocation,
                departureTime: '08:30 AM',
                arrivalTime: '09:10 AM',
                fare: '₹25',
                distance: '7.2 km',
                duration: '40 min',
                stops: 7,
                status: 'On Time'
            }
        ];
        
        displayRoutes(routes);
    }, 1500);
}

function displayRoutes(routes) {
    const searchResults = document.getElementById('search-results');
    
    if (routes.length > 0) {
        let resultsHTML = `
            <h3>Available Routes</h3>
            <div class="routes-container">
        `;
        
        routes.forEach(route => {
            const statusClass = route.status === 'On Time' ? 'on-time' : 'delayed';
            resultsHTML += `
                <div class="route-card">
                    <div class="route-header">
                        <span class="route-id">${route.routeId}</span>
                        <span class="status-badge ${statusClass}">${route.status}</span>
                    </div>
                    <div class="route-body">
                        <div class="route-stations">
                            <div class="station-from">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <span class="time">${route.departureTime}</span>
                                    <span class="name">${route.from}</span>
                                </div>
                            </div>
                            <div class="route-line">
                                <span class="stops">${route.stops} stops</span>
                            </div>
                            <div class="station-to">
                                <i class="fas fa-map-marker"></i>
                                <div>
                                    <span class="time">${route.arrivalTime}</span>
                                    <span class="name">${route.to}</span>
                                </div>
                            </div>
                        </div>
                        <div class="route-info">
                            <span><i class="fas fa-clock"></i> ${route.duration}</span>
                            <span><i class="fas fa-road"></i> ${route.distance}</span>
                            <span><i class="fas fa-ticket-alt"></i> ${route.fare}</span>
                        </div>
                    </div>
                    <div class="route-footer">
                        <button class="btn book-btn" onclick="showTicketingOptions('${route.routeId}', '${route.from}', '${route.to}', '${route.departureTime}')">Book Ticket</button>
                        <button class="btn track-btn" onclick="trackBus('${route.routeId}')">Track Bus</button>
                    </div>
                </div>
            `;
        });
        
        resultsHTML += `</div>`;
        searchResults.innerHTML = resultsHTML;
    } else {
        searchResults.innerHTML = '<div class="alert alert-info">No routes found between these locations. Please try different locations.</div>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSearchDropdowns();
    
    // Add click event listener to the search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            findRoutes();
        });
    }
});