const express = require('express')
var router = express.Router()

var { PostMessage } = require('../models/postMessage')

router.get('/', (req, res) => {
    // PostMessage.find((err, docs) => {
    //     if (!err) res.send(docs)
    //     else console.log(err)
    // })
    PostMessage.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => { console.log(err) })
})

router.post('/', (req, res) => {
    var newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })
    newRecord.save((err, doc) => {
        if (!err) res.send(doc)
        else console.log(err);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;

    var updateRecord = {
        title: req.body.title,
        message: req.body.message
    }
    PostMessage.findByIdAndUpdate(id, { $set: updateRecord }, { new: true }, (err, doc) => {
        if (!err) res.send(doc)
        else console.log(err);
    })
})

router.delete('/:id', (req, res) => {

    const id = req.params.id;

    PostMessage.findByIdAndDelete(id, (err, doc) => {
        if (!err) res.send(doc)
        else console.log(err);
    })
})

module.exports = router;