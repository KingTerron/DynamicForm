const fs = require('fs')
const path = require('path');
const express = require('express');
const router = new express.Router();

const filesPath = path.join(__dirname, '../JsonFiles');

router.get('/readFiles', (req,res, next) => {
    fs.readdir(filesPath, function(err,files) {
        if (err) { 
            return res.status(404).send({error: "No file found"}); 
        }
        res.send(files)
    })
})


module.exports = router