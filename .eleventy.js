module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("topics", function(collectionApi) {
    return collectionApi.getAllSorted().filter(function(item) {
      // path is relative to the project root
      return item.inputPath.startsWith('./pages/topics/');
    });
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