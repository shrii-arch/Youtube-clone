// =========================================================================
// 1. DOM LAYOUT CONTAINERS SELECTION
// =========================================================================
const homeVideoGrid = document.querySelector('.video-grid');
const watchPageContainer = document.getElementById('watchPageContainer');
const videoIframe = document.getElementById('videoIframe');
const videoCards = document.querySelectorAll('.video-card');

// =========================================================================
// 2. WATCH PAGE CLICK STREAM ENGINE
// =========================================================================
videoCards.forEach((card) => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video');
        console.log(`Native Watch Stream Route Activated for ID: ${videoId}`);
        
        if (videoId && homeVideoGrid && watchPageContainer && videoIframe) {
            // Hide the homepage layout feed cleanly from view
            homeVideoGrid.style.setProperty('display', 'none', 'important');
            
            // Check if the parameter string is a full URL link track or a short code token
            const cleanEmbedUrl = videoId.includes('http') ? videoId : `https://youtube.com{videoId}`;
            videoIframe.setAttribute('src', `${cleanEmbedUrl}?autoplay=1&modestbranding=1&rel=0`);
            
            // Flex the dual-column player panel into view instantly
            watchPageContainer.style.setProperty('display', 'flex', 'important');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// =========================================================================
// 3. 🔑 UNFREEZE ROUTING ENGINE (LOGO & HOME BUTTON RESET CLICK ENGINE)
// =========================================================================
const homePageTriggers = [
    document.querySelector('.youtube-logo'),
    document.querySelector('.logo-container'),
    document.querySelector('.sidebar-link:first-child'), // Targets your Home menu button link layer
    document.querySelector('.header-left img')
];

homePageTriggers.forEach((trigger) => {
    if (trigger) {
        trigger.style.cursor = 'pointer'; // Turn mouse cursor into a clicking hand
        
        trigger.addEventListener('click', () => {
            console.log(" Reset Trigger Activated! Unfreezing system canvas layout...");
        
            if (watchPageContainer && homeVideoGrid && videoIframe) {
                // Wipe the current video feed so sound tracking clips cut off completely
                videoIframe.setAttribute('src', '');
                
                // Hide the watch container box layer completely
                watchPageContainer.style.setProperty('display', 'none', 'important');
                
                // Re-inject your main layout home feed grid sections perfectly!
                homeVideoGrid.style.setProperty('display', 'grid', 'important');
                
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        });
    }
});
