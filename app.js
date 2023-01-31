const express = require('express');
const app = express();
const links = require('./models/index').links
const utils = require('./utils/utilityMethods');
const path = require('path');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/short', async (req,res)=>{
        const enteredLink = req.body.link;
        const absoluteUrl = utils.absoluteUrl(enteredLink);
        const response = await utils.stringGenerator();
        let linkRecord = {
            original: absoluteUrl,
            shortened: response.data.data.formatted
        }
        await links.create(linkRecord);

        linkRecord.protocol = req.protocol;
        linkRecord.host = req.get('host');
        res.json(linkRecord);
})

app.get('/:id' , async (req,res)=>{
    const shortend = req.params.id;
    const linkRecord = await links.findByPk(shortend);
    if(linkRecord){
        const original = linkRecord.original;
        console.log('original link is : '+ original);
        res.redirect(original);
        return
    }
    
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})