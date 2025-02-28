const express = require('express');
const router = new express.Router();

let html = null

router.get('/', (req,res) => {
    res.render('createForm');
})

router.post('/generateForm', async (req,res) => {    
    try {
        let formData = req.body.createJson
        formData = JSON.parse(formData)
        if (!formData || !formData.fields || !formData.title) {
            return res.status(400).json({error: 'Json format is not valid'})
        }

        res.render('index', {title: formData.title, fields: formData.fields}, (error,form) => {
            html = form
            res.send(html)
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }    
})

router.get('/generatedForm', async (req,res) => {
    try {
        res.send(html)
    } catch (error) {
        res.status(404).send()
    }
})

module.exports = router