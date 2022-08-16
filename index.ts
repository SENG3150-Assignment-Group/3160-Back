import express from 'express';
const app = express();
const port = 3000;
import db from './src/models';


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
} )