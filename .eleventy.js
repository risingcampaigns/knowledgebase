module.exports = function(config) {  
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

  // Markdown
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  config.setLibrary("md", markdownIt(options));
  config.setDynamicPermalinks(false);
  config.addPassthroughCopy("favicon.ico");
  config.addPassthroughCopy('img');
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