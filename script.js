document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle hamburger menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (for mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const profilePic = document.getElementById("profile-pic");
    
        // Flip the profile picture on hover
        profilePic.addEventListener("mouseenter", function () {
            profilePic.classList.add("flipped");
        });
    
        // Unflip the profile picture when not hovering
        profilePic.addEventListener("mouseleave", function () {
            profilePic.classList.remove("flipped");
        });
    });

    // Scroll animations for cards
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero-text");

    // Wait for the animation to finish, then make the text permanently visible
    heroText.addEventListener("animationend", function () {
        heroText.style.visibility = "visible"; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let currentProject = 0;
    const projects = document.querySelectorAll('.project-item');
    
    function showProject(index) {
        projects.forEach(project => project.classList.remove('active'));
        projects[index].classList.add('active');
    }

    document.getElementById('nextProject').addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        showProject(currentProject);
    });

    document.getElementById('prevProject').addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        showProject(currentProject);
    });
}); 