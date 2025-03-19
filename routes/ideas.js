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

    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag : req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10)
    };

    ideas.push(idea);

    res.send({ success: true, data: idea });
});


//Update Idea

router.put('/:id', (req, res) => {

    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res.status(404).json({ success: false, message: 'Idea not found' });
    }

    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;
    idea.username = req.body.username;

    res.json({ success: true, data: idea });
});

//Delete Idea

router.delete('/:id', (req, res) => {

        const idea = ideas.find((idea) => idea.id === +req.params.id);

        if(!idea) {
            return res.status(404).json({ success: false, message: 'Idea not found' });
        }

        const index = ideas.indexOf(idea);
        ideas.splice(index, 1);

        res.json({ success: true, data: {} });
    });




module.exports = router;