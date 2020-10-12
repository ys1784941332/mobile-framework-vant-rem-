module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": { remUnit: 75, exclude: /node_modules/i },      // 设计稿为750，rem基准值为 75px = 1rem
  },
};
