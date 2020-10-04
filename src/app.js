import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const router = express.Router();

router.use((req, res, next) => {
  fs.readFile(path.resolve('../public/index.html'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred');
    }
    const app = ReactDOMServer.renderToString(<App />);
    data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
    res.send(data);
  });
});

module.exports = router;
