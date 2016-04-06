#!/usr/bin/env /usr/local/bin/node

const bitbar = require('bitbar');
const data = require('../bookmarks.json');
const _ = require('underscore');

var bookmarks = [{
    text: data.title,
    color: bitbar.darkMode ? data.darkModeColor : data.color,
    dropdown: false
}];

bookmarks.push(bitbar.sep);

_.each(data.bookmarks, function(category, c) {
    bookmarks.push({
        text: c
    });
    _.each(category, function(bookmark, b) {
        bookmarks.push({
            text: b
        });
        _.each(bookmark, function(value, c) {
            var item = {
                text: '-- ' + value.title
            }

            // Options (https://github.com/matryer/bitbar#plugin-api)
            if (value.color) item.color = value.color;
            if (value.href) item.href = value.href;
            if (value.font) item.font = value.font;
            if (value.size) item.size = value.size;
            if (value.alternate) item.alternate = true;
            if (value.templateImage) item.templateImage = value.templateImage;
            if (value.image) item.image = value.image;

            bookmarks.push(item);
        });
    });
    bookmarks.push(bitbar.sep);
});

bitbar(bookmarks);
