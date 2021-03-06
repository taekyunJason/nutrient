//mongoose와 db를 연결
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//mongoose를 서버 주로의 컬렉션에 연결하고, undefined일때는 무시하고 error는 캐치해서 콘솔에 띄워주는 설정
const connnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error(err);
    });
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

//connnect를 모듈로 내보내겠다는 설정
module.exports = connnect;
