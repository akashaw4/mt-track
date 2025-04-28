// Function to show feature details in modal
function showFeatureDetails(featureTitle) {
    const modalContent = getElement('#modal-content-container');
    if (!modalContent) return;
    
    let content = '';
    
    switch(featureTitle) {
        case 'Mobile App':
            content = `
                <h2>Mobile App <span class="badge coming-soon">Coming Soon</span></h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Mobile App">
                    </div>
                    <div class="feature-info">
                        <p>The KMT Tracker mobile application is currently under development and will be available soon for Android and iOS devices.</p>
                        
                        <h3>Upcoming Features:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> Real-time bus tracking with live map view</li>
                            <li><i class="fas fa-check-circle"></i> Offline capabilities for route information</li>
                            <li><i class="fas fa-check-circle"></i> Journey planning with multiple stops</li>
                            <li><i class="fas fa-check-circle"></i> Digital ticket purchase and storage</li>
                            <li><i class="fas fa-check-circle"></i> Push notifications for service updates</li>
                            <li><i class="fas fa-check-circle"></i> Personalized travel history and favorites</li>
                        </ul>
                        
                        <div class="app-stores">
                            <p>Sign up to be notified when our app launches:</p>
                            <div class="notification-form">
                                <input type="email" placeholder="Enter your email" class="form-control">
                                <button class="btn btn-primary">Notify Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'Notifications':
            content = `
                <h2>Real-Time Notifications</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90aWZpY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Notifications">
                    </div>
                    <div class="feature-info">
                        <p>Stay informed with real-time notifications about your bus journey and service updates.</p>
                        
                        <h3>Notification Types:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-bell"></i> <strong>Departure Alerts:</strong> Get notified when your bus is about to depart</li>
                            <li><i class="fas fa-exclamation-triangle"></i> <strong>Delay Notifications:</strong> Instant alerts when your bus is running late</li>
                            <li><i class="fas fa-route"></i> <strong>Route Changes:</strong> Updates about any changes to your bus route</li>
                            <li><i class="fas fa-map-marker-alt"></i> <strong>Arrival Notifications:</strong> Alerts when your bus is approaching your stop</li>
                            <li><i class="fas fa-bullhorn"></i> <strong>Service Announcements:</strong> Important updates about KMT services</li>
                        </ul>
                        
                        <h3>Notification Channels:</h3>
                        <div class="notification-channels">
                            <div class="channel">
                                <i class="fas fa-mobile-alt"></i>
                                <span>Push Notifications</span>
                            </div>
                            <div class="channel">
                                <i class="fas fa-sms"></i>
                                <span>SMS Alerts</span>
                            </div>
                            <div class="channel">
                                <i class="fas fa-envelope"></i>
                                <span>Email Updates</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'QR Tickets':
            content = `
                <h2>QR Code Ticketing System</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="data:image/png;base64,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" alt="QR Tickets">
                    </div>
                    <div class="feature-info">
                        <p>Our digital ticketing system uses QR codes for quick, contactless boarding on all KMT buses.</p>
                        
                        <h3>How It Works:</h3>
                        <ol class="numbered-list">
                            <li>Book your ticket online through our website or mobile app</li>
                            <li>Receive a unique QR code ticket via email or in the app</li>
                            <li>Show the QR code to the conductor when boarding</li>
                            <li>The conductor scans the code with a handheld device</li>
                            <li>Board the bus and enjoy your journey!</li>
                        </ol>
                        
                        <h3>Benefits:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> <strong>Contactless:</strong> No need to handle cash or paper tickets</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Quick Boarding:</strong> Reduces boarding time by up to 60%</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Eco-Friendly:</strong> Reduces paper waste from traditional tickets</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Secure:</strong> Each QR code is unique and can't be duplicated</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Convenient:</strong> Store multiple tickets in one place</li>
                        </ul>
                        
                        <div class="qr-demo">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KMT-DEMO-TICKET" alt="Sample QR Ticket">
                            <p>Sample QR Ticket</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'Digital Payments':
            content = `
                <h2>Digital Payment Options</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMHBheW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Digital Payments">
                    </div>
                    <div class="feature-info">
                        <p>KMT Tracker supports multiple digital payment options for a seamless ticket purchasing experience.</p>
                        
                        <h3>Supported Payment Methods:</h3>
                        <div class="payment-methods">
                            <div class="payment-method">
                                <i class="fas fa-mobile-alt"></i>
                                <span>UPI</span>
                            </div>
                            <div class="payment-method">
                                <i class="fas fa-credit-card"></i>
                                <span>Credit/Debit Cards</span>
                            </div>
                            <div class="payment-method">
                                <i class="fas fa-wallet"></i>
                                <span>Digital Wallets</span>
                            </div>
                            <div class="payment-method">
                                <i class="fas fa-university"></i>
                                <span>Net Banking</span>
                            </div>
                        </div>
                        
                        <h3>Benefits:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> <strong>Secure Transactions:</strong> All payments are encrypted and secure</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Instant Confirmation:</strong> Receive ticket immediately after payment</li>
                            <li><i class="fas fa-check-circle"></i> <strong>No Cash Needed:</strong> Avoid the hassle of carrying exact change</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Transaction History:</strong> Keep track of all your ticket purchases</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Refund Processing:</strong> Easy refunds for cancelled journeys</li>
                        </ul>
                        
                        <div class="payment-partners">
                            <p>Our payment partners include:</p>
                            <div class="partner-logos">
                                <span>Google Pay</span>
                                <span>PhonePe</span>
                                <span>Paytm</span>
                                <span>Amazon Pay</span>
                                <span>BHIM</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'Multilingual':
            content = `
                <h2>Multilingual Support</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Multilingual">
                    </div>
                    <div class="feature-info">
                        <p>KMT Tracker is available in multiple languages to serve all residents and visitors of Kolhapur.</p>
                        
                        <h3>Supported Languages:</h3>
                        <div class="language-options">
                            <div class="language-option">
                                <span class="language-name">English</span>
                                <span class="language-status">Available</span>
                            </div>
                            <div class="language-option">
                                <span class="language-name">मराठी (Marathi)</span>
                                <span class="language-status">Available</span>
                            </div>
                            <div class="language-option">
                                <span class="language-name">हिंदी (Hindi)</span>
                                <span class="language-status">Available</span>
                            </div>
                        </div>
                        
                        <h3>Language Features:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> <strong>Full Translation:</strong> All content available in all supported languages</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Easy Switching:</strong> Change language with one click</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Remembers Preference:</strong> System remembers your language choice</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Regional Formats:</strong> Dates, times and numbers in local formats</li>
                        </ul>
                        
                        <p>We're committed to making public transportation accessible to everyone, regardless of language preference.</p>
                    </div>
                </div>
            `;
            break;
            
        // Fix for Journey Planner image syntax and update URLs to use local images
        case 'Journey Planner':
            content = `
                <h2>Journey Planner</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5dFXTuiVOQebBUHsRm1HXxcXUCJJMEcU0Q&s" alt="Journey Planner">
                    </div>
                    <div class="feature-info">
                        <p>Plan your entire journey with our advanced route planning system that helps you find the most efficient way to travel across Kolhapur.</p>
                        
                        <h3>Features:</h3>
                        <ul class="feature-list">
                                                       <li><i class="fas fa-check-circle"></i> <strong>Multi-Stop Planning:</strong> Plan journeys with multiple destinations</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Optimal Routes:</strong> Get suggestions for fastest or most direct routes</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Real-Time Updates:</strong> Routes adjust based on current traffic conditions</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Fare Estimation:</strong> Get accurate fare estimates before booking</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Walking Directions:</strong> First and last mile walking directions to bus stops</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Accessibility Options:</strong> Filter routes based on accessibility needs</li>
                        </ul>
                        
                        <h3>Try the Journey Planner:</h3>
                        <div class="journey-planner-demo">
                            <div class="form-group">
                                <label for="demo-from">From:</label>
                                <select id="demo-from" class="form-control">
                                    <option value="">Select starting point</option>
                                    <option value="Central Bus Stand">Central Bus Stand</option>
                                    <option value="Railway Station">Railway Station</option>
                                    <option value="Rankala Lake">Rankala Lake</option>
                                    <option value="New Palace">New Palace</option>
                                    <option value="Rajarampuri">Rajarampuri</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="demo-to">To:</label>
                                <select id="demo-to" class="form-control">
                                    <option value="">Select destination</option>
                                    <option value="Central Bus Stand">Central Bus Stand</option>
                                    <option value="Railway Station">Railway Station</option>
                                    <option value="Rankala Lake">Rankala Lake</option>
                                    <option value="New Palace">New Palace</option>
                                    <option value="Rajarampuri">Rajarampuri</option>
                                </select>
                            </div>
                            <button class="btn btn-primary" onclick="showDemoRoute()">Plan Journey</button>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        // Update other image sources to use local assets
        case 'Mobile App':
            content = `
                <h2>Mobile App <span class="badge coming-soon">Coming Soon</span></h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="assets/images/mobile-app.jpg" alt="Mobile App">
                    </div>
                    <div class="feature-info">
                        <p>The KMT Tracker mobile application is currently under development and will be available soon for Android and iOS devices.</p>
                        
                        <h3>Upcoming Features:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> Real-time bus tracking with live map view</li>
                            <li><i class="fas fa-check-circle"></i> Offline capabilities for route information</li>
                            <li><i class="fas fa-check-circle"></i> Journey planning with multiple stops</li>
                            <li><i class="fas fa-check-circle"></i> Digital ticket purchase and storage</li>
                            <li><i class="fas fa-check-circle"></i> Push notifications for service updates</li>
                            <li><i class="fas fa-check-circle"></i> Personalized travel history and favorites</li>
                        </ul>
                        
                        <div class="app-stores">
                            <p>Sign up to be notified when our app launches:</p>
                            <div class="notification-form">
                                <input type="email" placeholder="Enter your email" class="form-control">
                                <button class="btn btn-primary">Notify Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'Notifications':
            content = `
                <h2>Real-Time Notifications</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90aWZpY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Notifications">
                    </div>
                    <div class="feature-info">
                        <p>Stay informed with real-time notifications about your bus journey and service updates.</p>
                        
                        <h3>Notification Types:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-bell"></i> <strong>Departure Alerts:</strong> Get notified when your bus is about to depart</li>
                            <li><i class="fas fa-exclamation-triangle"></i> <strong>Delay Notifications:</strong> Instant alerts when your bus is running late</li>
                            <li><i class="fas fa-route"></i> <strong>Route Changes:</strong> Updates about any changes to your bus route</li>
                            <li><i class="fas fa-map-marker-alt"></i> <strong>Arrival Notifications:</strong> Alerts when your bus is approaching your stop</li>
                            <li><i class="fas fa-bullhorn"></i> <strong>Service Announcements:</strong> Important updates about KMT services</li>
                        </ul>
                        
                        <h3>Notification Channels:</h3>
                        <div class="notification-channels">
                            <div class="channel">
                                <i class="fas fa-mobile-alt"></i>
                                <span>Push Notifications</span>
                            </div>
                            <div class="channel">
                                <i class="fas fa-sms"></i>
                                <span>SMS Alerts</span>
                            </div>
                            <div class="channel">
                                <i class="fas fa-envelope"></i>
                                <span>Email Updates</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'QR Tickets':
            content = `
                <h2>QR Code Ticketing System</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1622676666769-1a0767518fcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXIlMjBjb2RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="QR Tickets">
                    </div>
                    <div class="feature-info">
                        <p>Our digital ticketing system uses QR codes for quick, contactless boarding on all KMT buses.</p>
                        
                        <h3>How It Works:</h3>
                        <ol class="numbered-list">
                            <li>Book your ticket online through our website or mobile app</li>
                            <li>Receive a unique QR code ticket via email or in the app</li>
                            <li>Show the QR code to the conductor when boarding</li>
                            <li>The conductor scans the code with a handheld device</li>
                            <li>Board the bus and enjoy your journey!</li>
                        </ol>
                        
                        <h3>Benefits:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> <strong>Contactless:</strong> No need to handle cash or paper tickets</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Quick Boarding:</strong> Reduces boarding time by up to 60%</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Eco-Friendly:</strong> Reduces paper waste from traditional tickets</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Secure:</strong> Each QR code is unique and can't be duplicated</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Convenient:</strong> Store multiple tickets in one place</li>
                        </ul>
                        
                        <div class="qr-demo">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KMT-DEMO-TICKET" alt="Sample QR Ticket">
                            <p>Sample QR Ticket</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'Digital Payments':
            content = `
                <h2>Digital Payment Options</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMHBheW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Digital Payments">
                    </div>
                    <div class="feature-info">
                        <p>KMT Tracker supports multiple digital payment options for a seamless ticket purchasing experience.</p>
                        
                        <h3>Supported Payment Methods:</h3>
                        <div class="payment-methods">
                            <div class="payment-method">
                                <i class="fas fa-mobile-alt"></i>
                                <span>UPI</span>
                            </div>
                            <div class="payment-method">
                                <i class="fas fa-credit-card"></i>
                                <span>Credit/Debit Cards</span>
                            </div>
                            <div class="payment-method">
                                <i class="fas fa-wallet"></i>
                                <span>Digital Wallets</span>
                            </div>
                            <div class="payment-method">
                                <i class="fas fa-university"></i>
                                <span>Net Banking</span>
                            </div>
                        </div>
                        
                        <h3>Benefits:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> <strong>Secure Transactions:</strong> All payments are encrypted and secure</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Instant Confirmation:</strong> Receive ticket immediately after payment</li>
                            <li><i class="fas fa-check-circle"></i> <strong>No Cash Needed:</strong> Avoid the hassle of carrying exact change</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Transaction History:</strong> Keep track of all your ticket purchases</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Refund Processing:</strong> Easy refunds for cancelled journeys</li>
                        </ul>
                        
                        <div class="payment-partners">
                            <p>Our payment partners include:</p>
                            <div class="partner-logos">
                                <span>Google Pay</span>
                                <span>PhonePe</span>
                                <span>Paytm</span>
                                <span>Amazon Pay</span>
                                <span>BHIM</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'Multilingual':
            content = `
                <h2>Multilingual Support</h2>
                <div class="feature-details">
                    <div class="feature-image">
                        <img src="assets/images/multilingual.jpg" alt="Multilingual">
                    </div>
                    <div class="feature-info">
                        <p>KMT Tracker is available in multiple languages to serve all residents and visitors of Kolhapur.</p>
                        
                        <h3>Supported Languages:</h3>
                        <div class="language-options">
                            <div class="language-option">
                                <span class="language-name">English</span>
                                <span class="language-status">Available</span>
                            </div>
                            <div class="language-option">
                                <span class="language-name">मराठी (Marathi)</span>
                                <span class="language-status">Available</span>
                            </div>
                            <div class="language-option">
                                <span class="language-name">हिंदी (Hindi)</span>
                                <span class="language-status">Available</span>
                            </div>
                        </div>
                        
                        <h3>Language Features:</h3>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> <strong>Full Translation:</strong> All content available in all supported languages</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Easy Switching:</strong> Change language with one click</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Remembers Preference:</strong> System remembers your language choice</li>
                            <li><i class="fas fa-check-circle"></i> <strong>Regional Formats:</strong> Dates, times and numbers in local formats</li>
                        </ul>
                        
                        <p>We're committed to making public transportation accessible to everyone, regardless of language preference.</p>
                    </div>
                </div>
            `;
            break;
            
        default:
            content = `
                <h2>${featureTitle}</h2>
                <div class="feature-details">
                    <p>Detailed information about this feature is being updated. Please check back soon.</p>
                </div>
            `;
    }
    // Add this function to handle ticket booking
function showTicketingOptions(routeId, from, to, departureTime) {
    const modalContent = getElement('#modal-content-container');
    if (!modalContent) return;
    
    const ticketId = generateTicketId();
    const ticketPrice = Math.floor(Math.random() * 30) + 20; // Random price between 20 and 50
    
    modalContent.innerHTML = `
        <h2>Book Your Ticket</h2>
        <div style="margin: 20px 0;">
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                <p><strong>Route:</strong> ${routeId}</p>
                <p><strong>From:</strong> ${from}</p>
                <p><strong>To:</strong> ${to}</p>
                <p><strong>Departure:</strong> ${departureTime}</p>
                <p><strong>Ticket ID:</strong> ${ticketId}</p>
                <p><strong>Price:</strong> ₹${ticketPrice.toFixed(2)}</p>
            </div>
            
            <h3>Select Payment Method</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0;">
                <label style="flex: 1; min-width: 120px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer;">
                    <input type="radio" name="payment" value="upi" checked>
                    <span style="margin-left: 5px;">UPI</span>
                </label>
                <label style="flex: 1; min-width: 120px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer;">
                    <input type="radio" name="payment" value="card">
                    <span style="margin-left: 5px;">Credit/Debit Card</span>
                </label>
                <label style="flex: 1; min-width: 120px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer;">
                    <input type="radio" name="payment" value="wallet">
                    <span style="margin-left: 5px;">Digital Wallet</span>
                </label>
            </div>
            
            <div class="qr-scanner">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticketId}" alt="QR Code">
                <p style="margin-top: 10px;">Scan this QR code to pay</p>
            </div>
        </div>
        <button class="submit-rating" onclick="processPayment('${ticketId}', '${routeId}', '${from}', '${to}', '${departureTime}', ${ticketPrice})">Complete Payment</button>
    `;
    
    // Show modal
    const modal = getElement('#feature-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Helper function to generate ticket ID
function generateTicketId() {
    return 'TKT-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

// Function to process payment
function processPayment(ticketId, routeId, from, to, departureTime, price) {
    const modalContent = getElement('#modal-content-container');
    if (!modalContent) return;
    
    // Show loading state
    modalContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fas fa-spinner fa-spin" style="font-size: 48px; color: #4a6cf7; margin-bottom: 20px;"></i>
            <h2>Processing Payment</h2>
            <p>Please wait while we process your payment...</p>
        </div>
    `;
    
    // Simulate payment processing
    setTimeout(() => {
        modalContent.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-check-circle" style="font-size: 48px; color: #4a6cf7; margin-bottom: 20px;"></i>
                <h2>Payment Successful!</h2>
                <p>Your ticket has been booked successfully.</p>
                <div style="margin: 20px 0; background: #f5f5f5; padding: 15px; border-radius: 5px; text-align: left;">
                    <p><strong>Ticket ID:</strong> ${ticketId}</p>
                    <p><strong>Route:</strong> ${routeId}</p>
                    <p><strong>From:</strong> ${from}</p>
                    <p><strong>To:</strong> ${to}</p>
                    <p><strong>Departure:</strong> ${departureTime}</p>
                    <p><strong>Amount Paid:</strong> ₹${price.toFixed(2)}</p>
                </div>
                <p>A copy of your ticket has been sent to your email and mobile number.</p>
                <div class="qr-scanner">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticketId}" alt="QR Code">
                    <p style="margin-top: 10px;">Show this QR code to the conductor when boarding</p>
                </div>
                <button onclick="closeModal()" class="submit-rating" style="margin-top: 20px;">Close</button>
            </div>
        `;
    }, 2000);
}
    
    // Show modal
    const modal = getElement('#feature-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }
    
    // Update modal content
    modalContent.innerHTML = content;
}