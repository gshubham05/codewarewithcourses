export const GA_ID = "G-CHHEXD2NKX";

export const pageview = (url) => {
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};