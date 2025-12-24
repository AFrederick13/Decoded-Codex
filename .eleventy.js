module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("topics", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./pages/topics/*.md")
      .filter(item => item.data.published !== false && !item.data.eleventyExcludeFromCollections);
  });

  // Ensure changes to CSS and Images trigger a refresh
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

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