document.addEventListener('DOMContentLoaded', () => {

    // Service Data Source
    const services = [
        { id: 1, name: "Rajesh Electrician", category: "Home Repair", location: "Dadar, Mumbai", price: 499, rating: 4.8, reviews: 120, status: "Available", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop" },
        { id: 2, name: "Suresh Plumbing Works", category: "Home Repair", location: "Bandra, Mumbai", price: 350, rating: 4.2, reviews: 45, status: "Busy", image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=400&fit=crop" },
        { id: 3, name: "Sharma Carpenters", category: "Home Repair", location: "Goregaon, Mumbai", price: 550, rating: 4.4, reviews: 67, status: "Available", image: "https://images.unsplash.com/photo-1622760806899-2708eb18ec1c?w=400&h=400&fit=crop" },
        { id: 4, name: "Cool Breeze AC Repair", category: "Home Repair", location: "Andheri West, Mumbai", price: 999, rating: 4.5, reviews: 85, status: "Busy", image: "https://images.unsplash.com/photo-1581094794329-cd1361ddee2f?w=400&h=400&fit=crop" },
        { id: 5, name: "Vijay Painters", category: "Home Repair", location: "Malad, Mumbai", price: 1200, rating: 4.6, reviews: 32, status: "Available", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop" },
        { id: 6, name: "Anita's Deep Cleaning", category: "Cleaning", location: "Juhu, Mumbai", price: 799, rating: 4.9, reviews: 210, status: "Available", image: "https://images.unsplash.com/photo-1581578731117-104f2a863a17?w=400&h=400&fit=crop" },
        { id: 7, name: "Terminator Pest Control", category: "Cleaning", location: "Thane, Mumbai", price: 899, rating: 4.3, reviews: 50, status: "Available", image: "https://plus.unsplash.com/premium_photo-1661662927263-899183492532?w=400&h=400&fit=crop" },
        { id: 8, name: "Sparkle Sofa Cleaning", category: "Cleaning", location: "Vashi, Navi Mumbai", price: 600, rating: 4.7, reviews: 90, status: "Offline", image: "https://images.unsplash.com/photo-1527512860163-41c99c824c3d?w=400&h=400&fit=crop" },
        { id: 9, name: "Glamour Home Salon", category: "Beauty", location: "Colaba, Mumbai", price: 1500, rating: 4.9, reviews: 150, status: "Available", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=400&fit=crop" },
        { id: 10, name: "Men's Grooming Station", category: "Beauty", location: "Lower Parel, Mumbai", price: 400, rating: 4.5, reviews: 78, status: "Available", image: "https://images.unsplash.com/photo-1503951914205-9847b5985b96?w=400&h=400&fit=crop" },
        { id: 11, name: "Lotus Home Spa", category: "Beauty", location: "Powai, Mumbai", price: 2000, rating: 4.8, reviews: 110, status: "Busy", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop" },
        { id: 12, name: "Expert Maths Tutor", category: "Education", location: "Thane, Mumbai", price: 600, rating: 5.0, reviews: 30, status: "Offline", image: "https://images.unsplash.com/photo-1544531320-98e96f67107f?w=400&h=400&fit=crop" },
        { id: 13, name: "Priya Guitar Classes", category: "Education", location: "Bandra, Mumbai", price: 800, rating: 4.7, reviews: 25, status: "Available", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop" },
        { id: 14, name: "Python Coding Tutor", category: "Education", location: "Online", price: 500, rating: 4.9, reviews: 60, status: "Available", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=400&fit=crop" },
        { id: 15, name: "Dr. Anjali (Physio)", category: "Health", location: "Powai, Mumbai", price: 1200, rating: 4.9, reviews: 55, status: "Available", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" },
        { id: 16, name: "Yoga with Riya", category: "Health", location: "Colaba, Mumbai", price: 800, rating: 4.8, reviews: 40, status: "Offline", image: "https://images.unsplash.com/photo-1544367563-1219a1a67592?w=400&h=400&fit=crop" },
        { id: 17, name: "Iron Pump Trainer", category: "Health", location: "Andheri East", price: 1500, rating: 4.6, reviews: 95, status: "Available", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop" },
        { id: 18, name: "Quick Fix Mechanic", category: "Automotive", location: "Navi Mumbai", price: 299, rating: 4.3, reviews: 112, status: "Busy", image: "https://images.unsplash.com/photo-1537462713117-1a09e113a77d?w=400&h=400&fit=crop" },
        { id: 19, name: "Doorstep Car Wash", category: "Automotive", location: "Borivali, Mumbai", price: 499, rating: 4.5, reviews: 200, status: "Available", image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&h=400&fit=crop" },
        { id: 20, name: "Laptop Repair Guru", category: "Technology", location: "Vashi, Mumbai", price: 450, rating: 4.7, reviews: 200, status: "Available", image: "https://images.unsplash.com/photo-1597872250921-0e6e8a46eac2?w=400&h=400&fit=crop" },
        { id: 21, name: "Mobile Screen Fix", category: "Technology", location: "Kurla, Mumbai", price: 1100, rating: 4.2, reviews: 88, status: "Available", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop" },
        { id: 22, name: "CCTV Setup Pro", category: "Technology", location: "Chembur, Mumbai", price: 800, rating: 4.6, reviews: 45, status: "Busy", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=400&fit=crop" },
        { id: 23, name: "Wedding Photographer", category: "Events", location: "Juhu, Mumbai", price: 15000, rating: 4.9, reviews: 300, status: "Available", image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd552?w=400&h=400&fit=crop" },
        { id: 24, name: "Party Decorators", category: "Events", location: "Kandivali, Mumbai", price: 3000, rating: 4.4, reviews: 60, status: "Available", image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?w=400&h=400&fit=crop" },
        { id: 25, name: "DJ Max Entertainment", category: "Events", location: "Bandra, Mumbai", price: 8000, rating: 4.8, reviews: 150, status: "Busy", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&h=400&fit=crop" }
    ];

    // DOM Elements
    const grid = document.getElementById('serviceGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');
    const resultCount = document.getElementById('resultCount');
    const emptyState = document.getElementById('emptyState');

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    const modal = document.getElementById('addServiceModal');
    const closeModalBtn = document.getElementById('closeModal');
    const addServiceForm = document.getElementById('addServiceForm');

    // Generate Stars
    function getStars(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars += '<i class="fa-solid fa-star"></i>';
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars += '<i class="fa-solid fa-star-half-stroke"></i>';
            } else {
                stars += '<i class="fa-regular fa-star"></i>';
            }
        }
        return stars;
    }

    // Main Render Function
    function renderServices(data) {
        // Guard clause for pages that don't have the grid (like About Us)
        if (!grid) return; 

        grid.innerHTML = ''; 
        
        if (data.length === 0) {
            if(emptyState) emptyState.classList.remove('hidden');
            if(resultCount) resultCount.innerText = "0 Services found";
            return;
        } 
        
        if(emptyState) emptyState.classList.add('hidden');
        if(resultCount) resultCount.innerText = `${data.length} Services found`;

        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <div class="card-header">
                    <span class="category-badge">${item.category}</span>
                    <div class="status status-${item.status}">
                        <span class="status-dot"></span> ${item.status}
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="service-name">${item.name}</h3>
                    <div class="location"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
                    
                    <div class="price-rating-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                        <div class="price" style="font-size: 1.1rem; font-weight: 700; color: #111;">
                            ₹${item.price} <span style="font-size: 0.8rem; font-weight: 400; color: #666;">/ visit</span>
                        </div>
                        <div class="rating">
                            ${getStars(item.rating)} <span style="color: #666; font-size: 0.8rem;">(${item.reviews || 0})</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn-primary" style="width:100%;" onclick="alert('Booking request sent for ${item.name}')">Book Now</button>
                </div>
            `;
            grid.appendChild(div);
        });
    }

    // Filter Logic
    function filterServices() {
        if (!searchInput) return;

        const searchTerm = searchInput.value.toLowerCase();
        const catValue = categoryFilter.value;
        const statusValue = availabilityFilter.value;

        const filtered = services.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                                  item.location.toLowerCase().includes(searchTerm);
            const matchesCat = catValue === 'all' || item.category === catValue;
            const matchesStatus = statusValue === 'all' || item.status === statusValue;

            return matchesSearch && matchesCat && matchesStatus;
        });

        renderServices(filtered);
    }

    // Event Listeners for Filters
    if(searchInput) searchInput.addEventListener('input', filterServices);
    if(categoryFilter) categoryFilter.addEventListener('change', filterServices);
    if(availabilityFilter) availabilityFilter.addEventListener('change', filterServices);

    // Global Reset
    window.resetFilters = function() {
        if(searchInput) searchInput.value = '';
        if(categoryFilter) categoryFilter.value = 'all';
        if(availabilityFilter) availabilityFilter.value = 'all';
        filterServices();
    };

    // Hamburger Menu
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }));
    }

    // Scroll to Services Logic (Navbar & Hero buttons)
    const getStartedBtns = document.querySelectorAll('.nav-btn, .hero-btn');
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const serviceSection = document.getElementById('serviceGrid') || document.querySelector('.search-section');
            
            if (serviceSection) {
                e.preventDefault();
                if(hamburger) hamburger.classList.remove("active");
                if(navLinks) navLinks.classList.remove("active");
                serviceSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If on another page, redirect to home
                window.location.href = 'index.html#serviceGrid';
            }
        });
    });

    // Modal Logic (Only for Pricing Plans)
    const openModalBtns = document.querySelectorAll('.btn-plan');
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(btn.tagName === 'A') e.preventDefault();
            if(modal) modal.classList.remove('hidden');
        });
    });

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Add Service Form
    if(addServiceForm) {
        addServiceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newService = {
                id: services.length + 1,
                name: document.getElementById('newServiceName').value,
                category: document.getElementById('newServiceCategory').value,
                location: document.getElementById('newServiceLocation').value,
                status: document.getElementById('newServiceStatus').value,
                price: 500,
                rating: 0, 
                reviews: 0
            };

            services.unshift(newService);
            renderServices(services);
            modal.classList.add('hidden');
            addServiceForm.reset();
            alert("Service Added Successfully!");
        });
    }

    // Initialize View
    renderServices(services);
});