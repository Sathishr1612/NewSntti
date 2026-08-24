const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// For top row, duplicate the original set 2 more times (total 4 sets)
const topOriginal = html.substring(html.indexOf('<div class="marquee-track marquee-left">') + 42, html.indexOf('<!-- Duplicate Set for Seamless Loop -->', html.indexOf('<div class="marquee-track marquee-left">')));
const topDuplicate = html.substring(html.indexOf('<!-- Duplicate Set for Seamless Loop -->', html.indexOf('<div class="marquee-track marquee-left">')), html.indexOf('</div>', html.indexOf('<!-- Duplicate Set for Seamless Loop -->', html.indexOf('<div class="marquee-track marquee-left">')) + 5000)); // Rough estimation, better use a DOM parser or regex?
