import { initAnimations } from './modules/animations.js';
import { initNavObserver } from './modules/navigation.js';
import { initBackToTop } from './modules/backToTop.js';
import { initTheme } from './modules/theme.js';
import { initMobileNav } from './modules/mobileNav.js';
import { initCopyToClipboard } from './modules/copyToClipboard.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all imported modules
    initAnimations();
    initNavObserver();
    initBackToTop();
    initTheme();
    initMobileNav();
    initCopyToClipboard();
});