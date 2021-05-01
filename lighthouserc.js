module.exports = {
  ci: {
    collect:{
      method: 'node',
      settings: { 
        chromeFlags: '--no-sandbox' 
      },
      url: ["https://nationalpost.com", "https://healthing.ca"]
    },
    upload: {
      target: 'lighthouse-reporting',
    },
  },
};
