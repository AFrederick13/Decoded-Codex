module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("topics", function(collection) {
    return collection.getFilteredByGlob("topics/*.md");
  });

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "pages",
      output: "_site",
      includes: "../_includes"
    }
  };
};