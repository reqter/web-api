var jwt = require('jsonwebtoken');
const config = require('../config');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const broker = require('./serviceBroker');


exports.getAll = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'getallassets').then((result)=>{
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

  exports.getbyid = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : {id : req.query.id}}, 'getassetbyid').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'addasset').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'updateasset').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'removeasset').then((result)=>{
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


exports.publish = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'publishasset').then((result)=>{
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

exports.unPublish = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'unpublishasset').then((result)=>{
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

exports.archive = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'archiveasset').then((result)=>{
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

exports.unArchive = function(req, res, next) {
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : req.body}, 'unarchiveasset').then((result)=>{
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
    broker.sendRPCMessage({spaceId : req.spaceid, userId : req.userId, body : {fileType : req.query.fileType, status : req.query.status}}, 'filterassets').then((result)=>{
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