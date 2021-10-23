const express = require('express');
const router = express.Router();
const request = require('request');
const {response} = require("express");
const fetch = require('node-fetch');

import {getWeather} from "../config/const";

/* PROBLEM B: WRAPPED IN A PROMISE */
router.post('/b', function (req, res, next) {
    return new Promise((resolve, reject) => {
        request(getWeather, (err, response, body) => {
            if (response.statusCode == 200) {
                resolve(body);
                const data = body.text()
                res.render('index',{title: data})
            } else {
                reject(response);
                res.render('index',{title:'something went wrong'})
            }

        });
    })
});

/* PROBLEM C: node-fetch as an async function */
router.post('/c', async function (req, res, next) {
    const response = await fetch(getWeather);
    const data = await response.text();
    res.render('index', {title: data})
})

/* PROBLEM D: Callback */
router.post('/d', function(req,res,next){
    callAPI(function(result){
        response.send(result)
    })
})
function callAPI(callback){
    request(getWeather, function(err, res, body){
        return callback(err,body)
    })
}

/* Problem E */
router.get('/data', async function (req, res, next) {
    const response = await fetch(getWeather);
    const data = await response.text();
    res.render('index', {title: data})
})

/* PROBLEM F */
router.get('/', function(req, res, next){
    res.render('Weatherform')
});

router.post('/', async function(req,res,next){
    const city = req.body.city;
    console.log(req.body);
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=132e2f11ae4a441689512148212310&q=${city}&aqi=no`);
    const data = await request.text();
    res.render('index', {title: data})
})

module.exports = router;
