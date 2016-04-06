#!/usr/bin/env /usr/local/bin/node

const bitbar = require('bitbar');
const config = require('../links.json');
const _ = require('underscore');

var links = [{
    text: '★',
    color: bitbar.darkMode ? 'white' : 'red',
    dropdown: false
}];

links.push(bitbar.sep);

_.each(config.links.work, function(val, key) {
    links.push({
        text: key
    });

    _.each(val, function(v, k) {
        var item = {
            text: '- ' + v.title,
            href: v.href
        }
        if (v.color) {
            item.color = v.color;
        }
        links.push(item);
    });
    links.push(bitbar.sep);
});

bitbar(links);
