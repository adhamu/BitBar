#!/usr/bin/env /usr/local/bin/node

const bitbar = require('bitbar');
const config = require('../bookmarks.json');
const _ = require('underscore');

var bookmarks = [{
    text: '★',
    color: bitbar.darkMode ? 'white' : 'red',
    dropdown: false
}];

bookmarks.push(bitbar.sep);

_.each(config.bookmarks, function(category, c) {
    bookmarks.push({
        text: c
    });
    _.each(category, function(bookmark, b) {
        bookmarks.push({
            text: b
        });
        _.each(bookmark, function(value, c) {
            var item = {
                text: '-- ' + value.title,
                href: value.href
            }
            if (value.color) {
                item.color = value.color;
            }
            bookmarks.push(item);
        });
    });
    bookmarks.push(bitbar.sep);
});

bitbar(bookmarks);
