var express = require('express');
var router = express.Router();

/* GET userlist. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* DELETE to deleteuser. */
router.delete('/deleteuser/:id', (req, res) => {
  var collection = req.db.get('userlist');
  var userToDelete = req.params.id;
  collection.remove({'_id' : userToDelete}, (err) => {
    res.send((err === null) ? {msg: ''} : {msg:'error: ' + err});
  });
});

module.exports = router;