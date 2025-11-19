import express from 'express';
import folders from "./routes/folders.js";

const app = express();
const port = 3000;

app.use('/api/folders', folders)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
