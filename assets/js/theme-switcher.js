// Theme Switcher for Minimal Mistakes
(function() {
    'use strict';
    
    const THEMES = {
        DARK: 'dark',
        AIR: 'air'
    };
    
    const STORAGE_KEY = 'minimal-mistakes-theme';
    
    // Get current theme from localStorage or default to dark
    function getCurrentTheme() {
        return localStorage.getItem(STORAGE_KEY) || THEMES.DARK;
    }
    
    // Set theme by updating data-theme attribute and body class
    function setTheme(theme) {
        const htmlElement = document.documentElement;
        const bodyElement = document.body;
        
        if (theme === THEMES.AIR) {
            htmlElement.setAttribute('data-theme', 'air');
            bodyElement.classList.add('theme-air');
            bodyElement.classList.remove('theme-dark');
        } else {
            htmlElement.removeAttribute('data-theme');
            bodyElement.classList.add('theme-dark');
            bodyElement.classList.remove('theme-air');
        }
        
        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, theme);
        
        // Update button text
        updateButtonText(theme);
        
        // Debug logging
        console.log('Theme set to:', theme);
        console.log('HTML data-theme:', htmlElement.getAttribute('data-theme'));
        console.log('Body classes:', bodyElement.className);
    }
    
    // Update button text based on current theme
    function updateButtonText(currentTheme) {
        const button = document.querySelector('.theme-toggle-btn');
        if (button) {
            button.textContent = currentTheme === THEMES.DARK ? '🌞' : '🌚';
            button.title = currentTheme === THEMES.DARK ? 'Switch to light theme' : 'Switch to dark theme';
        }
    }
    
    // Toggle between themes
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === THEMES.DARK ? THEMES.AIR : THEMES.DARK;
        setTheme(newTheme);
    }
    
    // Initialize theme on page load
    function initTheme() {
        const currentTheme = getCurrentTheme();
        setTheme(currentTheme);
        
        // Add event listener to toggle button
        const toggleButton = document.querySelector('.theme-toggle-btn');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
    
    // Expose toggle function globally for manual use
    window.toggleTheme = toggleTheme;
})();