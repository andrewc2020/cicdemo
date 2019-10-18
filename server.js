import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import 'dotenv/config';
import morgan from 'morgan';
const path = require('path');



// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 3000;
// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './')));

app.get('/',(req,res)=>{
    sendFile(path.join(__dirname, './index.html'));
})

// Register our routes in app

app.use('/', routes);

// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
export default app;