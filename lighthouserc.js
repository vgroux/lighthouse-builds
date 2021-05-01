module.exports = {
  ci: {
    collect:{
      method: 'node',
      settings: { 
        chromeFlags: '--no-sandbox' 
      },
      url: ["https://www.google.com"]
    },
    upload: {
      target: 'lighthouse-reporting',
    },
  },
};
