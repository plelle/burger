var express = require("express");
var burger = require("../models");

var router = express.Router();

router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res){
    burger.create([
        "Burger Name", "Devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(){
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }, condition, function(){
        res.redirect("/burgers");
    });
});

module.exports = router;
