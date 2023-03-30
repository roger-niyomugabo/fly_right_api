import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import docs from '../swagger.json';
import connectDB from './database/dbConnect';
import routes from './routes';

const app = express();

connectDB();
app.use(morgan('dev'));
app.use(express.json());
app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.use('/api', routes);

export default app;
