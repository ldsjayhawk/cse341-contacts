const mongodb = require('../database/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    }); //.catch(err);
}

const getIndividual = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    }); //.catch(err);
};

module.exports = {getAll, getIndividual}