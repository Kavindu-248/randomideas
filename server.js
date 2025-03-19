const express = require('express');
const port = 8000;

const app = express();

// Body Parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Random ideas' });
});


const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});