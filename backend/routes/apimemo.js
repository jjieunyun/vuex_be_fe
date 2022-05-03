var express = require('express');
var router = express.Router();
const memos = require('../memo.json')

/*메모리스트를 전달*/
router.get('/', function(req, res, next) {
  res.send(memos);
});


/*메모 전달*/
router.get('/:id',(req, res, next) => {
    const id = req.params.id;
    const m = memos.find( (memo)=> memo.id === id)
    res.send(m);
    console.log(m)
})

module.exports = router;
