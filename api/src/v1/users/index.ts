import express from "express"
const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.send([])
    })
    .post((req, res) => {
        //auth
        //create
        res.status(201).send('id')
    })

router.route('/:id')
    .get((req, res) => {
        res.send(req.params)
    })
    .put((req, res) => {
        //auth
        //create
        res.status(201).send('id')
    })
    .delete((req, res) => {
        //auth
        //create
        console.log('test')
        res.status(204).end()
    })

export default router