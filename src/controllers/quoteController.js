var jwt = require('jsonwebtoken');
const config = require('../config');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const broker = require('./serviceBroker');


exports.getAll = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId,  body : req.body}, 'getquotes').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
  }

exports.getById = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : {id : req.query.id}}, 'getquotesbyid').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}

exports.getByRequestId = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : {requestId : req.query.requestId}}, 'getquotesbyrequestid').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}

  exports.add = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'addquote').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}

exports.update = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'updatequote').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}

exports.remove = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'removequote').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}

exports.setstatus = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'setstatus').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}

exports.filter = function(req, res, next) {
    console.log(req)
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : 
        {   name : req.query.name, 
            category : req.query.category, 
            contentType : req.query.contentType, 
            status : req.query.status,
            formId : req.query.formId
        }}, 'filterquotes').then((result)=>{
        var obj = JSON.parse(result.toString('utf8'));
        if (!obj.success)
        {
            if (obj.error)
                return res.status(500).json(obj);
            else
            {
                res.status(404).json(obj);
            }
        }
        else
        {
            res.status(200).json(obj.data);
        }
    });
}