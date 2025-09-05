document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.thumbnail__image');
  
  if (!images.length) return;
  
  if ('loading' in HTMLImageElement.prototype) {
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
    return;
  }
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      const currentSrc = img.getAttribute('src');
      img.setAttribute('data-src', currentSrc);
      img.setAttribute('src', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E');
      imageObserver.observe(img);
    });
  }
}); 