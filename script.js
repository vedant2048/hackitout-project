/* --- Initial Data --- */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        // Toggle the .active class on the hamburger (for the X animation)
        hamburger.classList.toggle("active");
        
        // Toggle the .active class on the links (to slide them in)
        navLinks.classList.toggle("active");
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));
}); 
const defaultData = [
    { id: 1, name: "Rahul Electricals", category: "Home Repair", location: "Mumbai", status: "Available", rating: 4.8 },
    { id: 2, name: "Elite Tutors", category: "Education", location: "Pune", status: "Busy", rating: 4.5 },
    { id: 3, name: "City Mechanics", category: "Automotive", location: "Delhi", status: "Available", rating: 4.2 }
];

let services = JSON.parse(localStorage.getItem('services')) || defaultData;

/* --- DOM Elements (Based on your HTML) --- */
const grid = document.getElementById('serviceGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const availabilityFilter = document.getElementById('availabilityFilter');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');

// Modal Elements
const modal = document.getElementById('addServiceModal');
const closeModalBtn = document.getElementById('closeModal');
const addServiceForm = document.getElementById('addServiceForm');

/* --- Render Function --- */
function renderServices(data) {
    grid.innerHTML = '';
    
    if (data.length === 0) {
        emptyState.classList.remove('hidden');
        resultCount.innerText = "0 Services found";
        return;
    } 
    
    emptyState.classList.add('hidden');
    resultCount.innerText = `${data.length} Services found`;

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
                <div class="rating"><i class="fa-solid fa-star"></i> ${item.rating}</div>
            </div>
            <div class="card-footer">
                <button class="btn-primary" style="padding:0.4rem 1rem; font-size:0.8rem;">View</button>
            </div>
        `;
        grid.appendChild(div);
    });
}

/* --- Filter Function --- */
function filterServices() {
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

/* --- Reset Function --- */
window.resetFilters = function() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    availabilityFilter.value = 'all';
    filterServices();
};

/* --- Event Listeners --- */
searchInput.addEventListener('input', filterServices);
categoryFilter.addEventListener('change', filterServices);
availabilityFilter.addEventListener('change', filterServices);

/* --- Modal Logic --- */
// Note: Modal ko OPEN karne wala button aapke snippet me nahi hai,
// isliye sirf CLOSE aur SUBMIT logic yahan hai.

if(closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

if(addServiceForm) {
    addServiceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newService = {
            id: Date.now(),
            name: document.getElementById('newServiceName').value,
            category: document.getElementById('newServiceCategory').value,
            location: document.getElementById('newServiceLocation').value,
            status: document.getElementById('newServiceStatus').value,
            rating: 5.0 
        };

        services.unshift(newService);
        localStorage.setItem('services', JSON.stringify(services));
        
        renderServices(services);
        modal.classList.add('hidden');
        addServiceForm.reset();
        alert("Service Added!");
    });
}

// Initial Render
renderServices(services);