const express  = require('express')
const app = express()

app.use(require('cors')()) //允许被跨域
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongdb://localhost:27017/element-admin',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
})
const Article = mongoose.model('Article',new mongoose.Schema({
    title: {type:String},
    body: {type:String},
}))


app.get('/', async (req, res) => {
    res.send('index')
})


//新增文章
app.post('/api/articles',async(req,res) =>{
    const article = await Article.create(req.body)
    res.send(article)
})
//文章列表
app.get('/api/articles',async(req,res) =>{
    const article = await Article.find()
    res.send(article)
})

//删除文章列表
app.get('/api/articles／:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        stata:true
    })
})

//文章详情
app.get('/api/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

//编辑文章
app.put('/api/articles/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})




app.listen(3001,() => {
    console.log('http://localhost:3001')
})