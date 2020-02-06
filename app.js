const express = require('express');
const app = express();


/* app.use((req, res, next) => {
    console.log('first middleware');
    next();
})

app.use((req, res, next) => {
    console.log('second middleware');
    res.send('ok!');
}) */

// 미들웨어는 위에서 부터 아래로 순차적으로 적용된다 
app.use('/users', (req, res, next) => {
    console.log(`User Page`);
    res.send(`<h1>User Page</h1>`);
})

app.use('/', (req, res, next) => {
    console.log(`I love Node JS`);
    res.send(`<h1>I love Node JS</h1>`);
})

app.listen(3000);

// 예약어 start 를 사용하여 스크립트를 실행하는 경우 
// npm start 
// 예약어가 아닌 다른 명령을 사용할 경우 run을 붙여준다
// npm run start-server
