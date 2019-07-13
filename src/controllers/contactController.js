var jwt = require('jsonwebtoken');
const config = require('../config');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const broker = require('./serviceBroker');


exports.getAll = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId,  body : req.body}, 'getallcontacts').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : {id : req.query.id}}, 'getcontactsbyid').then((result)=>{
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

exports.getpartners = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId}, 'getpartnerslist').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'addcontact').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'updatecontact').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'removecontact').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'setcontactstatus').then((result)=>{
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
        requestAnimationFrame.query}, 'filtercontacts').then((result)=>{
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