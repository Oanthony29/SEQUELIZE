import('./Config/dbConfig.js');
import express from 'express';
import saleRouter from './Routes/salesRoutes.js';

const port = 1010;
const app = express();

app.use(express.json())
app.use('/api/v1', saleRouter)
app.listen(port, ()=>{
    console.log(`Connecting.....: ${port}`)
})