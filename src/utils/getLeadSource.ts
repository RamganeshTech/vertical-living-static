export const getLeadSource = () => {
    // Check if the code is running in a browser
    if (typeof window === 'undefined') return 'Organic';

    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const fbclid = params.get('fbclid');
    const utmSource = params.get('utm_source')?.toLowerCase();

    // 1. Check for Google Ads
    if (gclid || utmSource === 'google' || utmSource === 'adwords') {
        return 'Google Ads';
    }
    
    // 2. Check for Meta Ads (Facebook/Instagram)
    if (fbclid || utmSource === 'facebook' || utmSource === 'meta' || utmSource === 'ig' || utmSource === 'instagram') {
        return 'Meta Ads';
    }

    // 3. Default to Organic
    return 'Organic';
};