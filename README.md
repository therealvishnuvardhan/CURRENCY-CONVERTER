# 💱 Currency Converter  

A simple **currency converter web app** built with **HTML, CSS, and JavaScript**.  
It uses the **ExchangeRate API** to fetch real-time currency exchange rates.  

---

## 🚀 Features  
- Enter an amount in any currency  
- Convert between multiple currencies (USD, INR, EUR, GBP, JPY, RUB, etc.)  
- Swap between "From" and "To" currencies with one click  
- Beautiful glassmorphism design with blurred background containers  
- Custom font styling with `money1.ttf`  

---

## 📂 Project Structure

```plaintext
currency-converter/
│── index.html       # HTML structure of the app
│── style.css        # CSS styles (UI design + blur containers)
│── script.js        # JavaScript logic (API fetch + conversion)
│── README.md        # Documentation of the project
│── money1.ttf       # Custom font file
│── b2.jpg           # Background image


---

## ⚙️ Setup Instructions  

1. Clone or download this repository  
2. Place your `money1.ttf` font file and `b2.jpg` background image in the project folder  
3. Open `index.html` in your browser  

---

## 🔑 API Setup  

This project uses the **ExchangeRate API**.  

1. Sign up at [ExchangeRate API](https://www.exchangerate-api.com/)  
2. Get your free API key  
3. In `script.js`, replace `YOUR_API_KEY` with your actual key:  

```javascript
const apiKey = "YOUR_API_KEY";
