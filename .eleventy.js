module.exports = function(eleventyConfig) {
  // Add custom configuration here

  // Set input and output directories
  return {
    dir: {
      input: "src",    // Source directory
      output: "_site"   // Output directory
    }
  };
};
