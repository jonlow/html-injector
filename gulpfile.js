var gulp         = require("gulp");
var browserSync  = require("browser-sync");
var htmlInjector = require("bs-html-injector");

/**
 * Start BrowserSync
 */
gulp.task("browser-sync", function () {
    browserSync.use(htmlInjector, {});
    browserSync({
        server: "test/fixtures"
    });
});

/**
 * Default task
 */
gulp.task("default", ["browser-sync"], function () {
    gulp.watch("test/fixtures/*.html", htmlInjector);
});