const path = require("path")

module.exports = {
    components: ["./ui/components/**/*.vue"],
    defaultExample: true,
    version: "1.0.0",
    usageMode: "expand",
    exampleMode: "expand",
    title: "UI",
    pagePerSection: true,
    styleguideDir: "docs/styleguide",
    webpackConfig: require("./webpack/webpack.styleguide.js"),
    sections: require("./styleguide/sections.js"),
    styles: require("./styleguide/styles.js"),
    theme: require("./styleguide/theme.js"),
    require: [path.join(__dirname, "styleguide/global.requires.js")],
    //skipComponentsWithoutExample:true,
}
