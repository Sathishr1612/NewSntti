// Detect current page path
var currentPath = window.location.pathname.toLowerCase();
var isAboutPage = currentPath.indexOf('about') !== -1;
var isCoursePage = currentPath.indexOf('course') !== -1;
var isContactPage = currentPath.indexOf('contact') !== -1;
var isAdmissionsPage = currentPath.indexOf('admissions') !== -1;
var isResourcesPage = currentPath.indexOf('resources') !== -1;
var isBlogPage = currentPath.indexOf('blog') !== -1;
var isIndexPage = currentPath === '' || currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('\\index.html');
var isSubPage = !isIndexPage;

// Build link prefix: on subpages, all section anchors point to index.html#...
var lp = isSubPage ? 'index.html' : '';

// Active class assignments
var homeActiveClass = isIndexPage ? ' active' : '';
var aboutActiveClass = isAboutPage ? ' active' : '';
var courseActiveClass = isCoursePage ? ' active' : '';
var admissionsActiveClass = isAdmissionsPage ? ' active' : '';
var resourcesActiveClass = (isResourcesPage || isBlogPage) ? ' active' : '';
var contactActiveClass = isContactPage ? ' active' : '';
var mobileHomeActiveClass = isIndexPage ? ' active' : '';
var mobileAboutActiveClass = isAboutPage ? ' active' : '';
var mobileAdmissionsActiveClass = isAdmissionsPage ? ' active' : '';
var mobileResourcesActiveClass = (isResourcesPage || isBlogPage) ? ' active' : '';
var mobileContactActiveClass = isContactPage ? ' active' : '';

// Navbar extra class: subpages have 'scrolled' baked in
var navbarScrolledClass = isSubPage ? ' scrolled' : '';

// Logo href
var logoHref = isSubPage ? 'index.html' : '#';

// Book Consultation button: link to contact page
var consultationBtn = '<a href="contact.html" class="btn btn-consultation">\n          <i class="bi bi-calendar-check-fill"></i> Book Consultation\n        </a>';

// Visit Solace Minds button (external site)
var solaceBtn = '<a href="https://solaceminds.in/" target="_blank" rel="noopener noreferrer" class="btn btn-solace">\n          <i class="bi bi-box-arrow-up-right"></i> Visit Solace Minds\n        </a>';
var mobileSolaceBtn = '<a href="https://solaceminds.in/" target="_blank" rel="noopener noreferrer" class="btn btn-solace w-100 justify-content-center mb-2"\n        onclick="closeMobileMenu()">\n        <i class="bi bi-box-arrow-up-right me-2"></i> Visit Solace Minds\n      </a>';

// Mobile menu: Home link href and footer CTA
var mobileHomeHref = isSubPage ? 'index.html#home' : '#home';


// Mobile footer CTA
var mobileCTA = '<a href="contact.html" class="btn btn-consultation btn-mobile-consultation w-100 justify-content-center"\n        onclick="closeMobileMenu()">\n        <i class="bi bi-calendar-check-fill me-2"></i> Book Free Consultation\n      </a>';

var headerHTML = `<!-- Top Contact Bar -->
  <header id="header-top" class="top-header-bar d-flex align-items-center">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between py-1 gap-2">
        <!-- Left Contact Information -->
        <div class="d-flex align-items-center gap-2 gap-md-3"
          style="white-space: nowrap; font-size: 13px;">
          <span class="d-inline-flex align-items-center gap-1">
            <i class="bi bi-geo-alt-fill text-dark"></i> Bangalore
          </span>
          <span class="d-none d-sm-inline opacity-25">|</span>
          <a href="tel:+919916095796" title="Call SNTTI">
            <i class="bi bi-telephone-fill text-dark"></i> +91 99160 95796
          </a>
          <span class="d-none d-lg-inline opacity-25">|</span>
          <a href="mailto:info.sntti@gmail.com" class="d-none d-lg-inline-flex" title="Email SNTTI">
            <i class="bi bi-envelope-fill text-dark"></i> info.sntti@gmail.com
          </a>
        </div>

        <!-- Center Announcement -->
        <div class="d-none d-xl-flex align-items-center justify-content-center" style="white-space: nowrap;">
          <a href="admissions.html" class="top-announcement-pill" title="Admissions Open for 2026–2027 Batch">
            <span class="pill-icon"><i class="bi bi-mortarboard-fill"></i></span>
            <span>ADMISSION OPEN FOR 2026–2027 BATCH</span>
          </a>
        </div>

        <!-- Right Social Links & Action -->
        <div class="d-flex align-items-center justify-content-end gap-2">
          <div class="d-inline-flex align-items-center gap-1">
            <a href="https://www.facebook.com/NTTGunjur" target="_blank" rel="noopener noreferrer"
              class="social-icon-link" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sowmyanurseryteachertraining/" target="_blank" rel="noopener noreferrer"
              class="social-icon-link" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/sowmya-nursery-teacher-training-institute-and-counselling/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
              class="social-icon-link" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Sticky Navbar -->
  <nav id="navbar-main" class="navbar navbar-expand-xl custom-navbar${navbarScrolledClass}">
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
        <ul class="navbar-nav align-items-center gap-xxl-4 gap-xl-2 gap-2">
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
            <a class="nav-link${admissionsActiveClass}" href="admissions.html" id="navAdmissions">Admissions</a>
          </li>
          <!-- Resources Link with Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle${resourcesActiveClass}" href="resources.html" id="navResources">
              Resources <i class="bi bi-chevron-down ms-1" style="font-size: 11px;"></i>
            </a>
            <ul class="dropdown-menu shadow-lg border-0" aria-labelledby="navResources" style="border-radius: 14px; padding: 8px; border: 1px solid rgba(221, 174, 47, 0.25); min-width: 230px;">
              <li>
                <a class="dropdown-item py-2 px-3 rounded-3 d-flex align-items-center gap-2" href="resources.html#video-gallery-section">
                  <i class="bi bi-play-btn-fill text-warning" style="font-size: 16px;"></i>
                  <span>Video Gallery</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2 px-3 rounded-3 d-flex align-items-center gap-2" href="resources.html#gallery-section">
                  <i class="bi bi-images text-warning" style="font-size: 16px;"></i>
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li><hr class="dropdown-divider my-1 opacity-25"></li>
              <li>
                <a class="dropdown-item py-2 px-3 rounded-3 d-flex align-items-center gap-2" href="blog.html">
                  <i class="bi bi-journal-text text-warning" style="font-size: 16px;"></i>
                  <span>Our Blog</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link${contactActiveClass}" href="contact.html" id="navContact">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Book Consultation Button on Right -->
      <div class="d-none d-xl-flex align-items-center gap-2 btn-consultation-desktop">
        ${solaceBtn}
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

      <a href="admissions.html" class="mobile-nav-item${mobileAdmissionsActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-mortarboard-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Admissions
      </a>

      <!-- Resources Dropdown in Mobile Menu -->
      <div class="mobile-nav-dropdown">
        <div class="mobile-nav-item d-flex align-items-center justify-content-between${mobileResourcesActiveClass}" id="mobileResourcesToggle" onclick="toggleMobileResourcesSubmenu(event)" style="cursor: pointer;">
          <div class="d-flex align-items-center">
            <i class="bi bi-folder-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Resources
          </div>
          <i class="bi bi-chevron-down accordion-icon text-white-50"></i>
        </div>
        <div class="mobile-submenu" id="mobileResourcesSubmenu">
          <a href="resources.html" class="mobile-submenu-item" onclick="closeMobileMenu()">
            <i class="bi bi-grid-fill me-2 text-warning"></i> All Resources
          </a>
          <a href="resources.html#video-gallery-section" class="mobile-submenu-item" onclick="closeMobileMenu()">
            <i class="bi bi-play-btn-fill me-2 text-warning"></i> Video Gallery
          </a>
          <a href="resources.html#gallery-section" class="mobile-submenu-item" onclick="closeMobileMenu()">
            <i class="bi bi-images me-2 text-warning"></i> Photo Gallery
          </a>
          <a href="blog.html" class="mobile-submenu-item" onclick="closeMobileMenu()">
            <i class="bi bi-journal-text me-2 text-warning"></i> Our Blog
          </a>
        </div>
      </div>

      <a href="contact.html" class="mobile-nav-item${mobileContactActiveClass}" onclick="closeMobileMenu()">
        <i class="bi bi-envelope-fill me-3" style="color:#E9B13A; font-size:18px;"></i> Contact
      </a>
    </div>

    <!-- Mobile Footer Action -->
    <div class="mobile-menu-footer">
      ${mobileSolaceBtn}
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

// Global mobile resources accordion toggle
window.toggleMobileResourcesSubmenu = function (e) {
  if (e) e.preventDefault();
  var mobileResourcesSubmenu = document.getElementById('mobileResourcesSubmenu');
  var toggle = document.getElementById('mobileResourcesToggle');
  if (mobileResourcesSubmenu) mobileResourcesSubmenu.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open');
};
