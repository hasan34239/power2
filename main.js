
document.body.style.height = "100vh";
document.body.style.overflow = "hidden";

window.addEventListener("load", () => {

    setTimeout(() => {

        window.scrollTo({ top: 0 });

        const tl = gsap.timeline();

        tl.to(".side-1", {
            top: "-100%",
            ease: "power-3.out",
        }, "+=0.5")

        .to("#turbulence", {
            duration: 2,
            attr: { baseFrequency: "0 0" }
        }, "<")

        .from(".banner-img img", {  // corrected from ".form"
            opacity: 0,
            y: -300,
            // duration: 3,
            ease: "power4.out",
        }, "<")

        .to(".loader img", {
            animation: "none",
            width: "2.5em",
        }, "<")

        .to(".loader img", {
            top: "calc(0% + 2.5em)",
            left: "calc(0% + 2.5em)",
            duration: 1,
            ease: "power3.out",
        }, "<")

        .from(".logo img", { opacity: 0 }, "+=0.5")
        .to(".loader img", { opacity: 0 }, "<")

        .to("body", { height: "initial", overflow: "unset" });

        gsap.to(".banner-img img", { filter: "none", delay: 2 });
        gsap.to(".loader", { display: "none", delay: 2.5 });  // corrected "delaay"
    }, 2000);
});





const panelsAnim = gsap.utils.toArray(".feature-img > div");
panelsAnim.forEach(panel => {
    gsap.from(panel, {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
    trigger: panel.parentElement,
    start: "20% center",
    }
    });
});

const images = gsap.utils.toArray(".feature-img img");
images.forEach(img => {
gsap.from(img, {
    y: -100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.4,
    scrollTrigger: {
    trigger: img.parentElement,
    start: "20% center",
    }
});
});

const gridItems = gsap.utils.toArray(".product");
gridItems.forEach(item => {
gsap.from(item, {
    opacity: 0,
    ease: "power3.out",
    delay: 0.3,
    scrollTrigger: {
    trigger: item,
    start: "20% center",
    end: "bottom top",
    }
});
});

const features = document.querySelectorAll(".feature");

for (let i = 0; i < features.length; i++) {

    // Correct querySelector('.feature-img')
    const panels = features[i].querySelector('.feature-img').children;

    const sensitivities = [
        15, 35, -25, 5
    ];

    features[i].addEventListener("mousemove", e => {
        for (let j = 0; j < panels.length; j++) {  // Change inner loop index to `j`

            setTimeout(() => {

                const x = e.clientX;
                const y = e.clientY;

                const w = features[i].offsetWidth / 2;
                const h = features[i].offsetHeight / 2;  // Corrected Y calculation

                // Use backticks for string template in transform
                let convertX = ((x - w) * sensitivities[j]) / w;
                let convertY = ((y - h) * sensitivities[j]) / h;

                panels[j].style.transform = `
                    translateX(${convertX}px) 
                    translateY(${convertY}px)`;

            }, 200);
        }
    });
}
 
document.querySelector("footer span").innertext = newDate().getFullYear();