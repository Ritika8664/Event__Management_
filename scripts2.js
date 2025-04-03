document.getElementById("eventSelector").addEventListener("change", function() {
    const selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage; // Redirects to the selected page
    }
});


// Check if dark mode is already set in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Select the toggle button
const toggleBtn = document.getElementById('toggleBtn');

// Add event listener to toggle dark mode
toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save the current mode preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
