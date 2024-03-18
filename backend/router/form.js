
const express = require("express")
const formRouter = express.Router()
const postForm = require("../controller/form")

formRouter.post("/users", postForm)



module.exports =  formRouter;

