import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/index';
import 'dotenv/config';
import morgan from 'morgan';
import path from 'path';



// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 3000;
// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// Register our routes in app

app.use('/', routes);
app.use(express.static(path.join(__dirname, './')));





// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
export default app;