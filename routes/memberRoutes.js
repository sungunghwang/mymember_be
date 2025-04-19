const express = require('express');
const router = express.Router();
const Member = require('../models/member');

//GET요청 회원데이터 가져오기
router.get('/members', async (req, res) => {
   try {
      const members = await Member.find().sort({ joinDate: -1 }); // 최근 가입 순
      res.json(members);
   } catch (err) {
      console.error('MongoDB 조회 오류:', err);
      res.status(500).json({ message: '서버 오류' });
   }
});

//POST요청  postman 을 이용한 다중 회원 추가하기
router.post('/members', async (req, res) => {
   try {
      const members = req.body; // 배열로 받음
      const result = await Member.insertMany(members);
      res.status(201).json(result);
   } catch (error) {
      console.error('회원 추가 실패:', error);
      res.status(500).json({ message: '회원 추가 중 오류 발생' });
   }
});

module.exports = router;
