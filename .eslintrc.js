module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module"  // since we're using ecmascript modules
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: [
    "html"
  ]
};
