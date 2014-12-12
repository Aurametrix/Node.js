/**
 * Created by Answer1215 on 12/8/2014.
 */
angular.module('app', []).directive('src', function () {
    var URL_RE = /^http:\/\/[^\/]*/;
    var HTTP_RE = /^(http|https):\/\//;

    return function (scope, element, attrs) {
        var context = {url: attrs.src.match(URL_RE)[0]};
        context.domain = context.url.replace(HTTP_RE, '');
        /*
        * Object {url: "http://fursealworld.com", domain: "fursealworld.com"} app.js:11
         Object {url: "http://resources.news.com.au", domain: "resources.news.com.au"} app.js:11
         Object {url: "http://www.hdwallpaperscool.com", domain: "www.hdwallpaperscool.com"}
        * */
        var templateFn = _.template('<a href="<%= url %>" target="_blank">Photo courtesy of <%= domain %></a>');
        element.css({border: "2px solid grey"});
        element.after(templateFn(context));
    };
});
