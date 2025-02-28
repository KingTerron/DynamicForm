const fs = require('fs')
const path = require('path');
const express = require('express');
const router = new express.Router();

const filesPath = path.join(__dirname, '../JsonFiles');


let html = null

router.get('/readFiles', (req,res) => {
    fs.readdir(filesPath, function(err,files) {
        if (err) { 
            return res.status(404).send({error: "No file found"}); 
        }
        res.send(files)
    })
})

router.post('/createFromFile', async (req,res) => {
    //console.log(req)
    let perc = (path.join(filesPath, req.body.chooseFile));
    
    fs.readFile(perc , (err,data) => {
        /* try {
            formData = JSON.parse(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'Internal server error'})
        }  */

            formData = JSON.parse(data)
            const data = Object.assign({}, {
                fields: [],
                title: "Default title"
            }, formData)
            if (!(formData && formData.fields && formData.title)) {
                return res.status(400).json({error: 'Json format is not valid'})
            }

            res.render('index', {title: formData.title, fields: formData.fields}, (error,form) => {
                res.send(form)
            })
    })   
})

module.exports = router