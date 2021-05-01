module.exports = {
  ci: {
    collect:{
      method: 'node',
      settings: { 
        chromeFlags: '--no-sandbox',
        // Don't run accessibility category
        onlyCategories: ["performance"]
      },
      url: ["https://nationalpost.com"]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
