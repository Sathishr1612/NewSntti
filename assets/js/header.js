// Detect if we are on a secondary page (about.html, course.html, contact.html, Admissions.html, etc.)
var isAboutPage = window.location.pathname.toLowerCase().indexOf('about') !== -1;
var isCoursePage = window.location.pathname.toLowerCase().indexOf('course') !== -1;
var isContactPage = window.location.pathname.toLowerCase().indexOf('contact') !== -1;
var isAdmissionsPage = window.location.pathname.toLowerCase().indexOf('admissions') !== -1;
var isSubPage = isAboutPage || isCoursePage || isContactPage || isAdmissionsPage;

// Build link prefix: on subpages, all section anchors point to index.html#...
var lp = isSubPage ? 'index.html' : '';

// Active class assignments
var homeActiveClass = isSubPage ? '' : ' active';
var aboutActiveClass = isAboutPage ? ' active' : '';
var courseActiveClass = isCoursePage ? ' active' : '';
var admissionsActiveClass = isAdmissionsPage ? ' active' : '';
var contactActiveClass = isContactPage ? ' active' : '';
var mobileHomeActiveClass = isSubPage ? '' : ' active';
var mobileAboutActiveClass = isAboutPage ? ' active' : '';
var mobileAdmissionsActiveClass = isAdmissionsPage ? ' active' : '';
var mobileContactActiveClass = isContactPage ? ' active' : '';

// Navbar extra class: subpages have 'scrolled' baked in
var navbarScrolledClass = isSubPage ? ' scrolled' : '';

// Logo href
var logoHref = isSubPage ? 'index.html' : '#';

// Book Consultation button: index uses anchor, subpages use modal
var consultationBtn = isSubPage
  ? '<a href="#consultationModal" class="btn btn-consultation" data-bs-toggle="modal" data-bs-target="#consultationModal">\n          <i class="bi bi-calendar-check-fill"></i> Book Consultation\n        </a>'
  : '<a href="#contact-enquiry" class="btn btn-consultation">\n          <i class="bi bi-calendar-check-fill"></i> Book Consultation\n        </a>';

// Mobile menu: Home link href and footer CTA
var mobileHomeHref = isSubPage ? 'index.html#home' : '#home';


// Mobile footer CTA
var mobileCTA = isSubPage
  ? '<a href="#consultationModal" class="btn btn-consultation btn-mobile-consultation w-100 justify-content-center"\n        data-bs-toggle="modal" data-bs-target="#consultationModal" onclick="closeMobileMenu()">\n        <i class="bi bi-calendar-check-fill me-2"></i> Book Free Consultation\n      </a>'
  : '<a href="#contact-enquiry" class="btn btn-consultation btn-mobile-consultation w-100 justify-content-center"\n        onclick="closeMobileMenu()">\n        <i class="bi bi-calendar-check-fill me-2"></i> Book Free Consultation\n      </a>';

var headerHTML = `<!-- Top Contact Bar -->
  <header id="header-top" class="top-header-bar d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center py-1">
        <!-- Left Contact Information -->
        <div class="col-xl-5 col-lg-6 col-md-6 col-12 d-flex align-items-center gap-2 gap-md-3"
          style="white-space: nowrap; font-size: 13px;">
          <span class="d-inline-flex align-items-center gap-1">
            <i class="bi bi-geo-alt-fill text-dark"></i> Bangalore
          </span>
          <span class="d-none d-sm-inline opacity-25">|</span>
          <a href="tel:+919916095796" title="Call SNTTI">
            <i class="bi bi-telephone-fill text-dark"></i> +91 99160 95796
          </a>
          <span class="d-none d-md-inline opacity-25">|</span>
          <a href="mailto:info.sntti@gmail.com" class="d-none d-md-inline-flex" title="Email SNTTI">
            <i class="bi bi-envelope-fill text-dark"></i> info.sntti@gmail.com
          </a>
        </div>

        <!-- Center Announcement -->
        <div class="col-xl-4 d-none d-xl-block text-center" style="white-space: nowrap;">
          <span class="center-announcement fw-bold" style="font-size: 12px; letter-spacing: 0.5px; font-weight: 700;">
            <i class="bi bi-mortarboard-fill me-1 text-warning"></i> ADMISSION OPEN FOR 2026–2027 BATCH
          </span>
        </div>

        <!-- Right Social Links & Action -->
        <div class="col-xl-3 col-lg-6 col-md-6 col-12 text-end d-flex align-items-center justify-content-end gap-2">
          <div class="d-inline-flex align-items-center gap-1 me-2">
            <a href="https://www.facebook.com/NTTGunjur" target="_blank" rel="noopener noreferrer"
              class="social-icon-link" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sowmyanurseryteachertraining/" target="_blank" rel="noopener noreferrer"
              class="social-icon-link" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-icon-link"
              aria-label="YouTube">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
          <!-- <button type="button" class="btn btn-header-admission" data-bs-toggle="modal"
            data-bs-target="#consultationModal">
            Admission Open
          </button> -->
        </div>
      </div>
    </div>
  </header>

  <!-- Sticky Navbar -->
  <nav id="navbar-main" class="navbar navbar-expand-xl custom-navbar${navbarScrolledClass} sticky-top">
    <div class="container">

      <!-- Logo on Left -->
      <a class="navbar-brand brand-logo-container" href="${logoHref}"
        aria-label="SNTTI - Sowmya Nursery Teacher Training Institute">
        <img src="assets/images/sntti-new/logo-heaer-sntti.png" alt="SNTTI Logo" class="brand-logo-img">
      </a>

      <!-- Mobile Hamburger Button -->
      <button class="mobile-nav-toggle d-xl-none" type="button" id="mobileNavToggle" aria-label="Toggle navigation">
        <div class="hamburger-box">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </div>
      </button>

      <!-- Desktop Navigation Menu Centered -->
      <div class="collapse navbar-collapse justify-content-center desktop-nav-menu" id="navbarNav">
        <ul class="navbar-nav align-items-center gap-lg-4 gap-md-2">
          <li class="nav-item">
            <a class="nav-link${homeActiveClass}" href="${lp}#home" id="navHome">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link${aboutActiveClass}" href="about.html" id="navAbout">About</a>
          </li>
          <!-- Courses Link -->
          <li class="nav-item">
            <a class="nav-link${courseActiveClass}" href="course.html" id="navCourses">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link${admissionsActiveClass}" href="Admissions.html" id="navAdmissions">Admissions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${lp}#resources" id="navResources">Resources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link${contactActiveClass}" href="contact.html" id="navContact">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Book Consultation Button on Right -->
      <div class="d-none d-xl-block btn-consultation-desktop">
        ${consultationBtn}
      </div>

    </div>
  </nav>

  <!-- Premium Full-Screen Mobile Navigation Overlay -->
  <div class="mobile-menu-overlay" id="mobileMenuOverlay">

    <!-- Top Header -->
    <div class="mobile-menu-header d-flex align-items-center justify-content-between">
      <a href="${mobileHomeHref}" class="d-flex align-items-center gap-2" onclick="closeMobileMenu()">
        <img src="assets/images/sntti-new/logo-footer-sntti.png" alt="SNTTI Logo" class="mobile-menu-logo">
      </a>
      <button type="button" class="mobile-close-btn" id="mobileCloseBtn" onclick="closeMobileMenu()"
        aria-label="Close menu">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <!-- Nav Links -->
    <div class="mobile-menu-nav" id="mobileMenuNav">
      <a href="${mobileHomeHref}" class="mobile-nav-item${mobileHomeActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-house-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Home
      </a>
      <a href="about.html" class="mobile-nav-item${mobileAboutActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-info-circle-fill me-3" style="color:#E9B13A; font-size:18px;"></i> About
      </a>

      <!-- Courses Link -->
      <a href="course.html" class="mobile-nav-item${courseActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-book-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Courses
      </a>

      <a href="Admissions.html" class="mobile-nav-item${mobileAdmissionsActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-mortarboard-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Admissions
      </a>
      <a href="${lp}#resources" class="mobile-nav-item" onclick="closeMobileMenu()">
        <i class="bi bi-folder-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Resources
      </a>
      <a href="contact.html" class="mobile-nav-item${mobileContactActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-envelope-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Contact
      </a>
    </div>

    <!-- Mobile Footer Action -->
    <div class="mobile-menu-footer">
      ${mobileCTA}

      <div class="d-flex align-items-center justify-content-between mt-4">
        <!-- <p class="mb-0"
          style="font-size:12px; color:rgba(255,255,255,0.4); font-family:'Plus Jakarta Sans',sans-serif;">
          Bangalore • Est. 2016
        </p> -->
        <div class="mobile-social-links">
          <a href="https://www.facebook.com/NTTGunjur" target="_blank" rel="noopener noreferrer"
            class="mobile-social-icon" aria-label="Facebook">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sowmyanurseryteachertraining/" target="_blank" rel="noopener noreferrer"
            class="mobile-social-icon" aria-label="Instagram">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>

  </div>`;

var siteHeaderPlaceholder = document.getElementById('site-header');
if (siteHeaderPlaceholder) {
  siteHeaderPlaceholder.innerHTML = headerHTML;
}
