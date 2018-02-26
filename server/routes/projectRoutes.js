var express = require('express');
var router = express.Router();
const projectontroller = require('../db/controllers/projects');
const pagescraper = require("../../modules/page-scraper");

router.route("/")
  .get(projectontroller.all)
  .post(projectontroller.create);

router.route("/:id")
  .get(projectontroller.findById)
  .put(projectontroller.update)
  .delete(projectontroller.remove);

  
module.exports = router;
