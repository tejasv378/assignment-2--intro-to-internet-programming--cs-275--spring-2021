const { src, dest, series } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);

let validateHTML = () => {
    return src([
        `html/*.html`,
        `html/**/*.html`])
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`html/*.html`,
        `html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
