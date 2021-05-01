module.exports = {
  ci: {
    collect:{
      method: 'node',
      url: ["https://nationalpost.com", "https://healthing.ca"]
    },
    upload: {
      target: 'lighthouse-reporting',
    },
  },
};
