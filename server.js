const express = require('express');
const router = require('./src/app');

const app = express();
let count = 100;

app.use('^/$', router);
app.use(express.static('./public'));

app.get('/api/count', (_req, res) => res.json({ count }));
app.get('/api/incr', (_req, res) => res.json({ count: ++count }));
app.get('/api/decr', (_req, res) => res.json({ count: --count }));
app.get('/api/reset', (_req, res) => {
  count = 0;
  res.json({ count });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server is listening on port', port));
