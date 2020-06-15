const express = require('express');
const path = require('path');
const fs = require("fs");
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');


const app = express()
app.use(express.static(path.join(__dirname, "build")));
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(process.env.PORT || 8080)


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const writeFile = newData => {
  const stringifiedData = JSON.stringify(newData);

  fs.writeFile("public/highScore.json", stringifiedData, error => {
    if (error) {
      console.log("Write: NOT successful!");
      console.log(error);
    } else {
      console.log("Write: successful!");
    }
  });
};

app.get("/express_backend", (req, res) => {
  let rawdata = fs.readFileSync("public/highScore.json");
  let highScore = JSON.parse(rawdata);
  console.log(highScore);
  res.send(highScore);
});

app.post("/express_backend", (req, res) => {
  res.status(200).send({ status: "OK" });
  writeFile(req.body);
  res.end();
});

const transport = {
    host: 'smtp.gmail.com', 
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  console.log(req.body)
  const email = req.body.email
  const message = req.body.message
  const content = `email: ${email} \n message: ${message} `

  const mail = {
    from: email,
    to: 'hanak.risko@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

