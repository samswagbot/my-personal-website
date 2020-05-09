module.exports = {
  extends: ["wesbos"],
  settings: {
    "import/resolver": "webpack"
  },
  rules: {
    "import/no-cycle": 0
  }
};

