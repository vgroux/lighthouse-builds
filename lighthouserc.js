module.exports = {
  ci: {
    collect:{
      method: 'node',
      headful: 'false',
      url: ["https://nationalpost.com", "https://healthing.ca"]
    },
    upload: {
      target: 'lighthouse-reporting',
    },
  },
};
