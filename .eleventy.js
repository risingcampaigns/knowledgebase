const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(config) {
  config.addPlugin(eleventyNavigationPlugin);
  // Markdown
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  const slugify = require("slugify");
  let opts = {
      // permalink: true,
      // permalinkClass: "direct-link",
      // permalinkSymbol: "#",
  
      // this is the same function shared above
      slugify: function(input) {
        const options = {
          replacement: "-",
          remove: /[&,+()$~%.'":*?<>{}]/g,
          lower: true
        };
        return slugify(input, options);
      }
  };
  config.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );
  config.setDynamicPermalinks(true);
  config.addPassthroughCopy("favicon.ico");
  config.addPassthroughCopy('img');
  // config.addPassthroughCopy('_headers');
  config.addPassthroughCopy('fonts');
  config.addPassthroughCopy('src/site/admin/config.yml');
  return {
    dir: {
      input: "src/site",
      output: "public",
      includes: "includes"
    },
    passthroughFileCopy: true,
    templateFormats: [ 'md', 'njk'],
    markdownTemplateEngine: "liquid",
  };
};