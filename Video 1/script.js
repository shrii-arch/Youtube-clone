// 1. Grab our structural layout containers from the page DOM
const homeVideoGrid = document.querySelector('.video-grid');
const watchPageContainer = document.getElementById('watchPageContainer');
const videoIframe = document.getElementById('videoIframe');
const videoCards = document.querySelectorAll('.video-card');

// 2. THE LOCAL WATCH ENGINE: Listen for a click on any card item
videoCards.forEach((card) => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video');
        console.log(`🎯 Native Watch Stream Route Activated for ID: ${videoId}`);
        
        if (videoId && homeVideoGrid && watchPageContainer && videoIframe) {
            // Step A: Hide the homepage grid elements cleanly from screen view
            homeVideoGrid.style.setProperty('display', 'none', 'important');
            
            // Step B: Inject the clean YouTube embed path variable into your page player box
            videoIframe.setAttribute('src', `${videoId}?autoplay=1&modestbranding=1&rel=0`);
            
            // Step C: Flex the professional split-column view into view instantly!
            watchPageContainer.style.display = 'flex';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
