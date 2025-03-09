const express = require('express');
const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});


app.get('/api/ideas', (req, res) => {
    res.json({ success: true, data: [{ id: 1, title: 'Idea 1' }, { id: 2, title: 'Idea 2' }] });
});

app.get('/api/ideas/:id', (req, res) => {
    const { id } = req.params;
    res.json({ success: true, data: { id, title: `Idea ${id}` } });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});