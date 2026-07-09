// 1. Grab our structural layout containers from the page DOM
const homeVideoGrid = document.querySelector('.video-grid');
const watchPageContainer = document.getElementById('watchPageContainer');
const videoIframe = document.getElementById('videoIframe');
const videoCards = document.querySelectorAll('.video-card');
const youtubeHomeLogo = document.querySelector('.youtube-logo') || document.querySelector('.logo-container');

// 2. THE LOCAL WATCH ENGINE: Listen for a click on any card item
videoCards.forEach((card) => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video');
        console.log(`🎯 Native Watch Stream Route Activated for ID: ${videoId}`);
        
        if (videoId && homeVideoGrid && watchPageContainer && videoIframe) {
            // Step A: Hide the homepage grid elements cleanly from screen view
            homeVideoGrid.style.setProperty('display', 'none', 'important');
            // 🔑 FIX 1: Checks if the ID is a full URL or short tag and injects it cleanly
            const cleanEmbedUrl = videoId.includes('http') ? videoId : `https://youtube.com{videoId}`;
            videoIframe.setAttribute('src', `${cleanEmbedUrl}?autoplay=1&modestbranding=1&rel=0`);
            
            // Step C: Flex the professional split-column view into view instantly!
            watchPageContainer.style.setProperty('display', 'flex', 'important');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
if (youtubeHomeLogo) {
    youtubeHomeLogo.addEventListener('click', () => {
        console.log("🏠 Returning back to homepage main video grid feed...");
        
        if (homeVideoGrid && watchPageContainer && videoIframe) {
            // Kill the current video stream completely so audio stops playing in background
            videoIframe.setAttribute('src', '');
            
            // Hide the video player container box completely
            watchPageContainer.style.setProperty('display', 'none', 'important');
            
            // Unhide your pristine video grid section cleanly!
            homeVideoGrid.style.setProperty('display', 'grid', 'important');
        }
    });
}