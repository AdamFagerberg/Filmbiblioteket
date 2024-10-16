import ReactGA from "react-ga4";

const ANALYTICS_ID = import.meta.env.VITE_GA_ANALYTICS_ID;

export const initGA = () => {
  ReactGA.initialize(ANALYTICS_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", path: path });
};
