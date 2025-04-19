const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const connectDB = require('./db');
const memberRoutes = require('./routes/memberRoutes');

// ✅ 모든 출처 허용
app.use(cors());
app.use(express.json());
app.use('/api', memberRoutes);

// ✅ DB 연결 성공 후에 서버 실행
connectDB()
   .then(() => {
      app.listen(PORT, () => {
         console.log(`서버 실행 중: http://localhost:${PORT}`);
      });
   })
   .catch((err) => {
      console.error('DB 연결 실패:', err);
   });
