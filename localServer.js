// 托管snowpack示例打包文件
const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.listen(9001, () => {
  console.log('node服务启动成功 端口： 9001');
})

server.on('request', (req, res)=> {
  const {url} = req;
  console.log('url---', url);
  if (url === '/snowpack') {
    console.log('顶顶顶顶');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.readFile('./snapshot-snowpack/build/index.html', 'utf-8', (err, data) => {
      if (err) {
        throw err
      }
      res.end(data);
    })
  } else {
    fs.readFile(`./snapshot-snowpack/build${url}`, (err, data) => {
      if (err) {
        // throw err
        res.writeHead(404);
        // res.end()
      }
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.end(data);
    })
  }
})