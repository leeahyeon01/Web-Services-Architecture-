const http = require("http"); //http모듈 사용
const fs = require("fs").promises; //fs모듈로 html 파일을 읽는다.

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./body.txt");
      res.writeHead(200, { "Content-Type": "text/html; charset=uft8" });
      res.end(data);
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf8" });
      res.end(err.massage);
    }
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중입니다");
  });
