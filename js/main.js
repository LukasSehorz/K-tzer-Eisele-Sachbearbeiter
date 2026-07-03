/* Krotzer & Eisele – Interaktionen */
(function () {
  "use strict";

  /* Sticky header shadow */
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const open = burger.classList.toggle("open");
      mobileNav.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq__item").forEach((item) => {
    const q = item.querySelector(".faq__q");
    const a = item.querySelector(".faq__a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close siblings within same .faq
      const parent = item.closest(".faq");
      if (parent) {
        parent.querySelectorAll(".faq__item.open").forEach((o) => {
          if (o !== item) { o.classList.remove("open"); o.querySelector(".faq__a").style.maxHeight = null; }
        });
      }
      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
    });
  });

  /* Scroll reveal */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* Footer year */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* Contact form (demo handler – kein Backend) */
  const form = document.querySelector("form[data-demo]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form__status");
      if (note) {
        note.textContent = "Vielen Dank! Ihre Anfrage wurde vorbereitet. Bitte verbinden Sie das Formular mit Ihrem E-Mail-/Backend-Dienst, um sie zu versenden.";
        note.style.color = "var(--c-accent-2)";
      }
      form.reset();
    });
  }
})();
