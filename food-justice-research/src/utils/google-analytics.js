import ReactGA from 'react-ga4';

const ANALYTICS_ID = "G-XXXXXXXXXX"; // Placeholder

export const initGA = () => {
    if (process.env.NODE_ENV === 'production') {
        ReactGA.initialize(ANALYTICS_ID);
    }
};

export const trackPageView = (path) => {
    if (process.env.NODE_ENV === 'production') {
        ReactGA.send({ hitType: "pageview", page: path });
    }
};
