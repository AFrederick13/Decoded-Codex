module.exports = function (eleventyConfig) {
    // This copies the CSS folder
    eleventyConfig.addPassthroughCopy("css");

    return {
        pathPrefix: "/"
    };
};