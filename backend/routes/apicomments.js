var express = require('express');
var router = express.Router();
const comments = require('../comments.json')
const count = comments.length;


/* id값과 동일한 코멘트 배열 전달*/
router.get('/:id',(req, res, next) => {
    const id = req.params.id;
    //값을 여러개 찾기위해 filter를 사용
    const filterdComments = comments.filter( (comment)=> comment.memoid === id)
    console.log(filterdComments)
    res.send(filterdComments);
})

router.post('/',(req, res, next) => {
    const comment = req.body.data.comment;
    //전체 코멘트에 푸쉬
    comments.push(comment);
    //메모의 코멘트에만 필터
    const commentmemo = comments.filter((c) => c.memoid == comment.memoid);
    res.send(commentmemo)
})
module.exports = router;