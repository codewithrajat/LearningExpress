import express from 'express';
import testRoute from './src/routes/testRoute';
const port = 2626;
var app = express();

app.use(express.json());

app.use("/home" , testRoute);
app.listen(port, () => {
    console.log(`Automation Server started at Port ${port}`);
});
