import TagManager from "react-gtm-module";

const GA_TAGMANAGER_ID = import.meta.env.VITE_GA_TAGMANAGER_ID;

export const initGoogleTM = () => {
  TagManager.initialize({ gtmId: GA_TAGMANAGER_ID });
};
