const path = require("path");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./hugo_stats.json"],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

module.exports = {
  plugins: [
    require("postcss-import")({
      path: './'
    }),
    require("tailwindcss"),
    require("autoprefixer")({
      path: './'
    }),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
  ],
};
