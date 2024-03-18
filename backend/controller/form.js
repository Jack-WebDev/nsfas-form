
const db = require("../db/db")

const postForm = async (req,res) => {
    const {propertyID, propertyAddress, propertyName,changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads} = req.body

    try {
        
        await db('nsfas-form').insert({propertyID, propertyAddress, propertyName,changeDescriptonDetails, reasonForChange,desiredOutcome, requestorID, requestorName, requestorJobTitle,date, priority, uploads})

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



module.exports = postForm;