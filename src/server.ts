import 'reflect-metadata';

import express from 'express';
import routes from './routes/index';
import UploadConfig from './config/upload';

import './database/index';

const app = express();

app.use(express.json());
app.use('/files', express.static(UploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
