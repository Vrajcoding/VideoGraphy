import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

  gsap.from("#home .details", {
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      end:"top 30%",
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#about .section-title", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    
  });

  
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out",
    
    });
  });


  gsap.from("#skill h2", {
    scrollTrigger: {
      trigger: "#skill",
      start: "top 85%",
    },
    opacity: 0,
    x: -100,
    duration: 1,
  
  });

  gsap.from(".skills .works", {
    scrollTrigger: {
      trigger: "#skill",
      start: "top 85%",
    },
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.2,
   
  });

  gsap.from(".skills .tools", {
    scrollTrigger: {
      trigger: "#skill",
      start: "top 85%",
    },
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.4,
   
  });


  gsap.from("#contact .footer-content", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
    },
    opacity: 0,
    y: 60,
    duration: 1,
   
  });



