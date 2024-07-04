export const GA_TAG_ID = process.env.GA_TAG_ID || '';

export const pageView = (path: string) => {
  window.gtag('config', GA_TAG_ID, {
    page_path: path,
  });
};
