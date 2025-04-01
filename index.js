
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRouter from './routes/contact.route.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin:'*',
}))
app.use(express.json());
app.use('/api/user', contactRouter);

app.listen(PORT, ()=>{
    console.log(`The Server is listening at PORT ${PORT}`);
})