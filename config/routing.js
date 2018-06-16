let router = require('express').Router(),
    path = require('path');

// put routes bellow here
//=========================================






//=========================================
// catch all
router.all('*', function(req, res){
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
})

module.exports = router;
