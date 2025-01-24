document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookieConsent')) {
      const banner = document.createElement('div');
      banner.id = 'cookie-banner';
      banner.innerHTML = `
        <p>Wir verwenden Cookies, um unsere Website zu analysieren und zu verbessern. <a href="datenschutz.html" style="color: #ffa500; text-decoration: underline;">Mehr erfahren</a></p>
        <button id="accept-cookies">Akzeptieren</button>
      `;
      document.body.appendChild(banner);
  
      document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'true');
        document.getElementById('cookie-banner').remove();
      });
    }
  });
  document.getElementById('accept-cookies').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookie-banner').remove();
  
    // Google Analytics aktivieren
    gtag('config', 'GTM-5F9H9PFR');
  });