/**
 * SNTTI - Shared Footer Component
 * Injects the site footer into #site-footer.
 * Runs immediately (no DOMContentLoaded). Loaded before main.js.
 */

// Detect if we are on a secondary page
var isAboutPageFooter = window.location.pathname.toLowerCase().indexOf('about') !== -1;
var isCoursePageFooter = window.location.pathname.toLowerCase().indexOf('course') !== -1;
var isContactPageFooter = window.location.pathname.toLowerCase().indexOf('contact') !== -1;
var isAdmissionsPageFooter = window.location.pathname.toLowerCase().indexOf('admissions') !== -1;
var isResourcesPageFooter = window.location.pathname.toLowerCase().indexOf('resources') !== -1;
var isBlogPageFooter = window.location.pathname.toLowerCase().indexOf('blog') !== -1;
var isSubPageFooter = isAboutPageFooter || isCoursePageFooter || isContactPageFooter || isAdmissionsPageFooter || isResourcesPageFooter || isBlogPageFooter;

// Build link prefix: on subpages, section anchors point to index.html#...
var flp = isSubPageFooter ? 'index.html' : '';

// Footer Quick Links differ between pages
var footerHomeLink = isSubPageFooter ? 'index.html#home' : '#home';
var footerAboutLink = 'about.html';
var footerAdmissionsLink = 'admissions.html';
var footerResourcesLink = 'resources.html';
var footerContactLink = 'contact.html';

// Footer Courses links
var footerNttLink = 'course.html#ntt-course';
var footerWorkshopLink = 'course.html#teacher-training-workshop';
var footerCounsellingLink = 'course.html#counselling';
var footerCareerLink = 'course.html#career-guidance';

var footerHTML = `<footer id="footer" class="footer-section">
    <div class="container">
      <div class="row g-4">

        <!-- Top Area: Brand & Description -->
        <div class="col-lg-4 col-md-6 col-12">
          <div class="brand-logo-container mb-3">
            <img src="assets/images/sntti-new/logo-footer-sntti.png" alt="SNTTI Logo"
              class="brand-logo-img footer-logo-img">
          </div>
          <p class="footer-brand-desc">
            Sowmya Nursery Teacher Training Institute (SNTTI) is a premier educational institute empowering passionate
            educators since 2016 with government certified diploma programs in early childhood teacher training.
          </p>

          <div class="footer-social-icons">
            <a href="https://www.facebook.com/NTTGunjur" target="_blank" rel="noopener noreferrer"
              class="footer-social-btn" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sowmyanurseryteachertraining/" target="_blank" rel="noopener noreferrer"
              class="footer-social-btn" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Column 1: Quick Links -->
        <div class="col-lg-2 col-md-6 col-6">
          <h2 class="footer-heading">Quick Links</h2>
          <ul class="footer-links">
            <li><a href="${footerHomeLink}"><i class="bi bi-chevron-right fs-6"></i> Home</a></li>
            <li><a href="${footerAboutLink}"><i class="bi bi-chevron-right fs-6"></i> About Us</a></li>
            <li><a href="${footerAdmissionsLink}"><i class="bi bi-chevron-right fs-6"></i> Admissions</a></li>
            <li><a href="${footerResourcesLink}"><i class="bi bi-chevron-right fs-6"></i> Resources</a></li>
            <li><a href="${footerContactLink}"><i class="bi bi-chevron-right fs-6"></i> Contact Us</a></li>
          </ul>
        </div>

        <!-- Column 2: Courses -->
        <div class="col-lg-3 col-md-6 col-6">
          <h2 class="footer-heading">Courses</h2>
          <ul class="footer-links">
            <li><a href="${footerNttLink}"><i class="bi bi-journal-check"></i> Nursery Teacher Training</a></li>
            <li><a href="${footerWorkshopLink}"><i class="bi bi-people"></i> Teacher Training Workshop</a></li>
            <li><a href="${footerCounsellingLink}"><i class="bi bi-heart-pulse"></i> Counselling &amp; Psychology</a></li>
            <li><a href="${footerCareerLink}"><i class="bi bi-compass"></i> Career Guidance</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact & Google Map Placeholder -->
        <div class="col-lg-3 col-md-6 col-12">
          <h2 class="footer-heading">Contact Info</h2>

          <div class="footer-contact-item">
            <i class="bi bi-geo-alt-fill"></i>
            <a href="https://www.google.com/maps/search/?api=1&query=No.+286,+Sowmya+Nursery+Teacher+Training+Institute+and+Counseling+(SNTTI),+Shree+Maatha+Nilaya,+Krupanidhi+College,+Road,+next+to+Durga+departmental+store,+Gunjur+Village,+Bengaluru,+Karnataka+560087"
              target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none">
              No. 286, Shree Maatha Nilaya, Near Krupanidhi College, Gunjur Village, Bengaluru, 560087
            </a>
          </div>

          <div class="footer-contact-item">
            <i class="bi bi-telephone-fill"></i>
            <a href="tel:+919916095796" class="text-white">+91 99160 95796</a>
          </div>

          <div class="footer-contact-item">
            <i class="bi bi-envelope-fill"></i>
            <a href="mailto:info.sntti@gmail.com" class="text-white">info.sntti@gmail.com</a>
          </div>

          <!-- Google Map Placeholder Card -->
          <a href="https://www.google.com/maps/search/?api=1&query=No.+286,+Sowmya+Nursery+Teacher+Training+Institute+and+Counseling+(SNTTI),+Shree+Maatha+Nilaya,+Krupanidhi+College,+Road,+next+to+Durga+departmental+store,+Gunjur+Village,+Bengaluru,+Karnataka+560087"
            target="_blank" rel="noopener noreferrer" class="map-placeholder-card text-decoration-none">
            <i class="bi bi-map-fill text-warning fs-3"></i>
            <div>
              <div class="fw-bold text-white small">SNTTI Campus Location</div>
              <div class="text-warning extra-small">View on Google Maps <i class="bi bi-box-arrow-up-right ms-1"></i>
              </div>
            </div>
          </a>
        </div>

      </div>

      <!-- Bottom Strip -->
      <div class="footer-bottom-strip d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <div>
          \u00A9 2026 Sowmya Nursery Teacher Training Institute (SNTTI). All Rights Reserved.
        </div>
        <div class="d-flex gap-3">
          <a href="privacy-policy.html">Privacy Policy</a>
          <span>\u2022</span>
          <a href="terms-of-service.html">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>`;

var siteFooterPlaceholder = document.getElementById('site-footer');
if (siteFooterPlaceholder) {
  siteFooterPlaceholder.innerHTML = footerHTML;
}
