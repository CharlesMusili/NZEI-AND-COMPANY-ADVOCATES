document.getElementById("toggle-btn").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    
    sidebar.classList.toggle("hidden");

    
    if (sidebar.classList.contains("hidden")) {
        mainContent.style.marginLeft = "0";
    } else {
        mainContent.style.marginLeft = "250px";
    }
});
