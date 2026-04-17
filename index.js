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
    <title>Suraj Mart | E-Commerce</title>

    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background: #f4f6f9;
        }

        header {
            background: #764ba2;
            color: white;
            padding: 20px;
            text-align: center;
        }

        header h1 {
            margin: 0;
        }

        .hero {
            padding: 40px;
            text-align: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }

        .hero h2 {
            margin-bottom: 10px;
        }

        .btn {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 20px;
            background: white;
            color: #764ba2;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
        }

        .section {
            padding: 30px;
            text-align: center;
        }

        .features {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .card {
            background: white;
            padding: 20px;
            margin: 10px;
            width: 250px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .products {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .product {
            background: white;
            padding: 15px;
            margin: 10px;
            width: 200px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 15px;
        }
    </style>
</head>

<body>

    <header>
        <h1>🛒 Suraj Mart</h1>
        <p>Your Trusted Online Store</p>
    </header>

    <div class="hero">
        <h2>Shop Smart, Shop Fast ⚡</h2>
        <p>Best deals on electronics, fashion & daily needs</p>
        <a href="#" class="btn">Shop Now</a>
    </div>

    <div class="section">
        <h2>📌 About Us</h2>
        <p>Suraj Mart is an e-commerce platform offering quality products at affordable prices with fast delivery and secure payments.</p>
    </div>

    <div class="section">
        <h2>🚀 Why Choose Us</h2>
        <div class="features">
            <div class="card">
                <h3>🚚 Fast Delivery</h3>
                <p>Quick delivery across India</p>
            </div>
            <div class="card">
                <h3>💳 Secure Payment</h3>
                <p>100% safe transactions</p>
            </div>
            <div class="card">
                <h3>📞 24/7 Support</h3>
                <p>Always here to help</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>🔥 Popular Products</h2>
        <div class="products">
            <div class="product">
                <h4>Smartphone</h4>
                <p>₹15,999</p>
            </div>
            <div class="product">
                <h4>Shoes</h4>
                <p>₹2,499</p>
            </div>
            <div class="product">
                <h4>Headphones</h4>
                <p>₹1,299</p>
            </div>
        </div>
    </div>

    <footer>
        <p>© 2026 Suraj Mart | Powered by Node.js & Express</p>
    </footer>

</body>
</html>
    `);
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})