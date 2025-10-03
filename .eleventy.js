module.exports = function (eleventyConfig) {
    // Return your Object options:
    return {
        dir: {
            input: "pages",
            includes: "../_includes",
            data: "../_data",
            output: "_site"
        }
    };
};