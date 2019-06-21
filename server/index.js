import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) => {
  // res.send('hellp world');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on local:3000'));
