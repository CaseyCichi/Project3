import path from 'path';
import fs from 'fs';
import renderhtml from './renderhtml'

const universalLoader = (req, res) => {
  const filePath = path.resolve(__dirname, '../build/index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Read error', err);
      return res.status(404).end();
    }
    const html = renderhtml(req.path, htmlData);
    res.send(html);
  });
};

export default universalLoader;