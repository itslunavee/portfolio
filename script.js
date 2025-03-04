document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove("active");
                }
            });
        });
    }

    // Profile picture flip
    const profilePic = document.getElementById("profile-pic");
    if (profilePic) {
        profilePic.addEventListener("mouseenter", function () {
            profilePic.classList.add("flipped");
        });

        profilePic.addEventListener("mouseleave", function () {
            profilePic.classList.remove("flipped");
        });
    }

    // Card scroll animations
    const cards = document.querySelectorAll(".card");
    if (cards.length > 0) {
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
    }

    // Hero text animation
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
        heroText.addEventListener("animationend", function () {
            heroText.style.visibility = "visible";
        });
    }

    // Project navigation
    const nextProject = document.getElementById("nextProject");
    const prevProject = document.getElementById("prevProject");
    if (nextProject && prevProject) {
        let currentProject = 0;
        const projects = document.querySelectorAll('.project-item');

        function showProject(index) {
            projects.forEach(project => project.classList.remove('active'));
            projects[index].classList.add('active');
        }

        nextProject.addEventListener('click', () => {
            currentProject = (currentProject + 1) % projects.length;
            showProject(currentProject);
        });

        prevProject.addEventListener('click', () => {
            currentProject = (currentProject - 1 + projects.length) % projects.length;
            showProject(currentProject);
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if(name && email && message) {
                alert('Thank you for your message! I\'ll respond soon.');
                this.reset();
                
                document.querySelectorAll('.form-input').forEach(input => {
                    input.dispatchEvent(new Event('input'));
                });
            }
        });
    }
});