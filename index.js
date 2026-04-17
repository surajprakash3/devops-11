const express = require('express');
const app = express();

const PORT = 4001

app.get('/', async (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome | Suraj's Server</title>
            <style>
                body {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    font-family: 'Segoe UI', Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .container {
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 8px 32px rgba(44, 62, 80, 0.2);
                    padding: 40px 32px;
                    max-width: 400px;
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    color: #764ba2;
                    margin-bottom: 10px;
                }
                .name-card {
                    margin: 24px 0 0 0;
                    padding: 18px 0;
                    background: #f3f3f3;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
                }
                .name-card h2 {
                    margin: 0;
                    color: #333;
                    font-size: 1.3rem;
                }
                .footer {
                    margin-top: 32px;
                    color: #aaa;
                    font-size: 0.9rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>👋 Welcome to My Server</h1>
                <div class="name-card">
                    <h2>Name: Suraj Prakash</h2>
                </div>
                <div class="footer">Powered by Node.js & Express</div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})