let express = require("express"); //설치한 express module 불러온 뒤 변수(express)에 담음.
let app = express(); //express 실행 후 app object 초기화함.

// app.use(express.static(__dirname + "/public")); //1
app.get('/',function (req,res) {
    res.send('Hello World!');
});

let port = 3000; //사용할 포트 번호를 port 변수에 넣음
app.listen(port, function () { // port변수 이용해 3000번 포트에 node.js서버 연결
  console.log("server on! http://localhost:" + port); //서버 실행 시 표시될 메시지
});
