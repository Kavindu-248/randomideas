const express = require('express');
const router = express.Router();

//Get all Ideas

router.get('/', (req, res) => {
    res.json({ success: true, data: ideas });
});

//Get single Idea

router.get('/:id', (req, res) => {

    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res.status(404).json({ success: false, message: 'Idea not found' });
    }

    res.json({ success: true, data: idea });
});


//Add Idea

router.post('/', (req, res) => {
    res.send(req.body.text);
});


module.exports = router;
