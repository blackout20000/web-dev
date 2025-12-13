const express = require("express");
// const errorhandler = require("./middlewares/errorhandler");
const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
    let today = new Date();
    let now = today.toLocaleTimeString();
    req.requestTime = now;
    next();
};

app.use(requestTime);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const logger = (req, res, next) => {
//     console.log("User Logged");
//     next();
// };
// app.use(logger);

app.get("/", (req, res) => {
    // res.status(200);
    // res.send("Hello Node!");
    const responseText = `Hello Node! \n요청 시간 : ${req.requestTime}`;
    res.set("Content-type", "text/plain");
    res.send(responseText);
});
app.use("/contacts", require("./routes/contactRoutes"));

// app.get("/test", (req, res, next) => {
//     const error = new Error("테스트용 에러");
//     error.status = 404;
//     next(error);
// });
// app.use(errorhandler);

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
