window.onload = function() {
    
    var currentUrl = window.location.pathname;
    var currentPage = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    
    if (currentPage == "") {
        currentPage = "index.html";
    }
    
    var navLinks = document.querySelectorAll(".nav-links a");
    
    for (var i = 0; i < navLinks.length; i++) {
        var linkHref = navLinks[i].getAttribute("href");
        
        if (linkHref == currentPage) {
            navLinks[i].classList.add("active");
        }
    }
};