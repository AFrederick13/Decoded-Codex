module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("topics", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./pages/topics/*.md")
      .filter(item => item.data.published !== false && !item.data.eleventyExcludeFromCollections)
      .sort((a, b) => {
        const titleA = a.data.title || "";
        const titleB = b.data.title || "";
        return titleA.localeCompare(titleB, undefined, { sensitivity: "base" });
      });
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