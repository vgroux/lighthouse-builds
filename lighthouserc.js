module.exports = {
  ci: {
    collect:{
      method: 'node',
      settings: { 
        chromeFlags: '--no-sandbox',
        // Don't run accessibility category
        onlyCategories: ["performance", "seo", "best-practices", "pwa"],
        maxWaitForFcp: 60 * 1000,
      },
      url: ["https://nationalpost.com"]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
