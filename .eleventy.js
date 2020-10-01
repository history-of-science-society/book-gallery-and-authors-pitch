module.exports = function (eleventyConfig) {
  // Liquid Filter
  eleventyConfig.addLiquidFilter("slugify", function (value) {
    return value.replace(/[\s\W]/g, "-").toLowerCase();
  });
};
