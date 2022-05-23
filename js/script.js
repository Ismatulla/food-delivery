const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()

yearEl.textContent = currentYear
    /////////////////////

const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.heading__title')
btnEl.addEventListener('click', (e) => {
    headerEl.classList.toggle('nav-open')
})

// Making sticky navigation visible when it reaches to the next section 
const sectionHeroEl = document.querySelector(".hero");


const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0]
        if (!ent.isIntersecting) document.body.classList.add('sticky')
        if (ent.isIntersecting) document.body.classList.remove('sticky')

    }, {
        // in the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
)
obs.observe(sectionHeroEl)

// Removing menu toggler when one of the links clicked

const allLinks = document.querySelectorAll("a:link");


allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(link);

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile navigation
        if (link.classList.contains("nav-list")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});