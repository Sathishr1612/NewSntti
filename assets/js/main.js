/**
 * SNTTI - Sowmya Nursery Teacher Training Institute
 * Vanilla JavaScript Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Scroll Shadow Effect
  const navbar = document.querySelector('.custom-navbar');

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Full-Screen Mobile Navigation Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-item:not(#mobileCoursesToggle), .mobile-submenu-item');

  function toggleMobileMenu() {
    const isOpen = mobileNavToggle?.classList.contains('active');

    if (!isOpen) {
      mobileNavToggle?.classList.add('active');
      mobileMenuOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      closeMobileMenu();
    }
  }

  function closeMobileMenu() {
    mobileNavToggle?.classList.remove('active');
    mobileMenuOverlay?.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scroll
  }

  window.closeMobileMenu = closeMobileMenu;

  // Expose toggleMobileSubmenu globally (called from onclick in HTML)
  window.toggleMobileSubmenu = function (e) {
    e.preventDefault();
    const mobileSubmenu = document.getElementById('mobileSubmenu');
    const toggle = document.getElementById('mobileCoursesToggle');
    if (mobileSubmenu) mobileSubmenu.classList.toggle('open');
    if (toggle) toggle.classList.toggle('open');
  };

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu on clicking links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 3. Mobile Accordion Toggle for Courses Submenu (also handled via onclick in HTML)
  const mobileCoursesToggle = document.getElementById('mobileCoursesToggle');
  const mobileSubmenu = document.getElementById('mobileSubmenu');
  // The onclick="toggleMobileSubmenu(event)" on the element handles the toggle.

  // 5. Bootstrap Carousel Sync with Indicator Dots & Counter
  const heroCarouselEl = document.getElementById('heroBannerCarousel');
  if (heroCarouselEl) {
    const heroDots = document.querySelectorAll('#heroCarouselDots button');
    const heroSlideCurrent = document.getElementById('heroSlideCurrent');

    heroCarouselEl.addEventListener('slide.bs.carousel', (e) => {
      const slideIndex = e.to;

      // Update slide counter text (01, 02, 03)
      if (heroSlideCurrent) {
        heroSlideCurrent.textContent = String(slideIndex + 1).padStart(2, '0');
      }

      // Update indicator dots
      heroDots.forEach((btn, index) => {
        if (index === slideIndex) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      });
    });
  }

  // 6. Active Section ScrollSpy Highlighting (Disabled for multi-page site)
  // This logic was removing the .active class from page links (like about.html) on scroll
  /*
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-menu .nav-link, .mobile-nav-item');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  */

  // 7. Robust Scroll Animation Observer for Smooth Reveals
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .about-pg-reveal, .about-pg-clip-reveal'
  );

  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '120px 0px 120px 0px',
      }
    );

    animatedElements.forEach((el) => {
      // Immediately reveal elements already near or within viewport on load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 8. Swiper.js Carousel Initialization for "Our Courses" Section
  if (typeof Swiper !== 'undefined' && document.querySelector('.courses-swiper')) {
    const coursesSwiper = new Swiper('.courses-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      speed: 800,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '#coursesNextBtn',
        prevEl: '#coursesPrevBtn',
      },
      breakpoints: {
        576: {
          slidesPerView: 1.15,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
        }
      },
      on: {
        init: function (swiper) {
          updateCoursesCounter(swiper);
        },
        slideChange: function (swiper) {
          updateCoursesCounter(swiper);
        },
        resize: function (swiper) {
          updateCoursesCounter(swiper);
        }
      }
    });

    // Fallback manual click handlers to guarantee navigation works
    const prevBtn = document.getElementById('coursesPrevBtn');
    const nextBtn = document.getElementById('coursesNextBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        coursesSwiper.slidePrev();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        coursesSwiper.slideNext();
      });
    }

    function updateCoursesCounter(swiper) {
      const currentEl = document.getElementById('coursesSlideCurrent');
      const totalEl = document.getElementById('coursesSlideTotal');

      if (currentEl) {
        // Use realIndex for correct slide number in loop mode
        const currentPage = (swiper.realIndex !== undefined ? swiper.realIndex : 0) + 1;
        currentEl.textContent = String(currentPage).padStart(2, '0');
      }

      if (totalEl) {
        // In loop mode, swiper.slides includes duplicated slides.
        // We count only the original slides.
        let totalPages = 0;
        if (swiper.slides) {
            totalPages = Array.from(swiper.slides).filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;
        } else {
            totalPages = document.querySelectorAll('.courses-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
        }
        totalEl.textContent = String(totalPages).padStart(2, '0');
      }
    }

    // Ensure swiper recalculates when section is animated into view
    window.addEventListener('scroll', function () {
      if (coursesSwiper && typeof coursesSwiper.update === 'function') {
        coursesSwiper.update();
      }
    }, { passive: true, once: true });
  }

});

// 13. Get in Touch Form Submission Logic
document.addEventListener('DOMContentLoaded', () => {
  const mainContactForm = document.getElementById('mainContactForm');
  const successMessage = document.getElementById('contactSuccessMessage');

  if (mainContactForm && successMessage) {
    mainContactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent page reload

      // Hide the form with a smooth fade
      mainContactForm.style.transition = 'opacity 0.3s ease';
      mainContactForm.style.opacity = '0';

      setTimeout(() => {
        mainContactForm.style.display = 'none';

        // Show success message
        successMessage.classList.remove('d-none');
        successMessage.style.opacity = '0';
        successMessage.style.transition = 'opacity 0.5s ease';

        // Trigger reflow
        void successMessage.offsetWidth;

        successMessage.style.opacity = '1';
      }, 300);
    });
  }
});

// 14. Course Editorial Sticky Navigation Active Tab Sync
document.addEventListener('DOMContentLoaded', () => {
  const courseTabs = document.querySelectorAll('.editorial-nav-tab');
  if (courseTabs.length > 0) {
    courseTabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        courseTabs.forEach((t) => t.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Scrollspy synchronization
    const sections = ['#ntt-course', '#teacher-training-workshop', '#counselling', '#career-guidance']
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    window.addEventListener(
      'scroll',
      () => {
        const scrollPos = window.scrollY + 180;
        sections.forEach((sec) => {
          if (
            scrollPos >= sec.offsetTop &&
            scrollPos < sec.offsetTop + sec.offsetHeight
          ) {
            const targetHref = '#' + sec.id;
            courseTabs.forEach((tab) => {
              if (tab.getAttribute('href') === targetHref) {
                tab.classList.add('active');
              } else {
                tab.classList.remove('active');
              }
            });
          }
        });
      },
      { passive: true }
    );
  }
});
