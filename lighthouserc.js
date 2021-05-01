module.exports = {
  ci: {
    collect:{
      method: 'node',
      settings: { 
        chromeFlags: '--no-sandbox' 
      },
      url: ["https://nationalpost.com"]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
