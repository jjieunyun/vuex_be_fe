const path = require("path");

module.exports = {
  // build 파일 위치를 backend의 public에 생성
    outputDir: path.resolve(__dirname, "../backend/public"),
    // '/api'로 주소가 전달되면 전부 백엔드로 넘겨준다.
    
};