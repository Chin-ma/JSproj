// console.log("Chinmay Phanasgaonkar")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
      <style>
          .navbar{
              background-color: darkblue;
              border-radius: 40px;
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar li{
              float: left;
              list-style: none;
              margin: 13px 20px;
          }
          .navbar li a{
              padding: 3px 3px;
              text-decoration: none;
              color: lightpink;
              font-family: cursive;
          }
          .navbar li a:hover{
             color: lime;
          }
          
          .search{
              float: right;
              color: white;
              padding: 12px 75px;
          }
          .navbar input{
              border: 2px solid black;
              border-radius: 10px;
              padding: 3px 10px;
              width: 129px;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Contact us</a></li>
                  <div class="search">
                      <input type="text" name="search" id="search"placeholder="Search this website">
                  </div>
                  
              </ul>
          </nav>
      </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});