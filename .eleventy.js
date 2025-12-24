module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("topics", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./pages/topics/*.md")
      .filter(item => item.data.published !== false && !item.data.eleventyExcludeFromCollections);
  });

  // Static Asset Passthrough
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");

  // More robust watching for Linux environments
  eleventyConfig.setWatchThrottleWaitTime(100); 

  return {
    dir: {
      input: "pages",
      output: "_site",
      includes: "../_includes"
    }
  };
};