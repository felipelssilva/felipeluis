const express = require('express');
const router = express.Router();
const path = require('path')
const nomeApp = process.env.npm_package_name

router.get('/', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

module.exports = router;