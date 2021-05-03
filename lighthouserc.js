module.exports = {
  ci: {
    collect:{
      method: 'node',
      settings: { 
        chromeFlags: '--no-sandbox',
        // Don't run accessibility category
        onlyCategories: ["accessibility", "performance", "seo", "best-practices", "pwa"],
        maxWaitForFcp: 60 * 1000,
      },
      url: ["https://nationalpost.com/news/canada/looming-showdown-as-michigan-governor-orders-line-5-pipeline-to-ontario-shut-down"]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
