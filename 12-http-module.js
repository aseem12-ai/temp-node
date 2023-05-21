const http=require('http');


const server=http.createServer((req,res)=>{

  if(req.url==='/'){
    res.end('welcome to our home page')

  }
  if(req.url==='/about'){
    res.end('here is our short history')
  }
  res.end(`
  <h1>oops!</h1>
  <p>we cant find a page that you are looking for</p>
  <a href="/">back home</a>
  `)

})


server.listen(4000)