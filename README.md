Wordworth
============

Wordsworth is a tiny chat application written entirely in JavaScript.

Architecture
------------

Front end code is written in ES6. We use JSPM to manage dependencies. Angular does the heavy lifting.
The back end is an Express node app, at the moment this is just ES5. Socket.io handles the realtime magic.

Todo
------------

- [ ] Fix up styles so the app is actually usable
- [ ] JIRA integration (log in with JIRA, harvest user name and Avatar)
- [ ] Desktop notifications
- [ ] Markdown instead of plain text
