const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
const multer = require('multer');
const upload = multer();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const log = msg => console.log(msg);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', express.static(`${process.cwd()}/views`));

// serve static assets
app.get('/', (req, res) => {
    //   res.sendFile(process.cwd() + '/view/index.html');
      res.sendFile(`${process.cwd()}/views/index.html`);
    });

app.post('/file-size', multer({ dest: './uploads/'}).single('upfile'), function(req,res){
    console.log('{size: '+req.file.size+'}');
    const fsize = req.file.size;
    const name = req.file.originalname;
    res.json({
        name: name,
        size: fsize
    });
});

app.listen(port, () => log(`server started on port ${port}`));