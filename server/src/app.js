const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const cors=require('cors');
const sequelize=require('./models/index').sync;
const config=require('./config/config');
const routes=require('./routes/route');


const app=express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

routes(app);

sequelize.then(()=>{
        app.listen(config.port,()=>{
            console.log('Server started on port 8585');
        });
    })
