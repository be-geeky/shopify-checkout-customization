# Shopify Checkout UI Extensions – Free Gift Feature 🎁  

This repository contains a **Shopify Checkout UI Extension** that allows customers to select a free gift during checkout. It also displays a thank-you message on the order confirmation page if the gift was selected.

---

## 🚀 Features  
- ✅ **Add Free Gift**: Customers can opt-in for a free gift at checkout.  
- ✅ **Thank You Page Message**: Displays a message if the free gift was selected.  
- ✅ **Shopify Checkout UI Extension**: Uses Shopify’s latest checkout extension framework.  

---

## 📂 Project Structure  
```
/shopify-app  
 ├── extensions/  
 │   ├── learning-checkout-ext/    # Checkout extension (adds free gift)  
 │   │   ├── src/  
 │   │   │   ├── Checkout.jsx  
 │   │   ├── shopify.extension.toml  
 │   │  
 │   ├── thank-you-extension/        # Thank you page extension  
 │   │   ├── src/  
 │   │   │   ├── Checkout.jsx  
 │   │   ├── shopify.extension.toml  
 │  
 ├── .env                            # Environment variables  
 ├── package.json  
 ├── README.md  
```

---

## 🛠️ Installation  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/be-geeky/shopify-checkout-customization.git
cd shopify-checkout-customization
```

### 2️⃣ **Install Dependencies**  
```sh
npm install
```

### 4️⃣ **Run the App Locally**  
```sh
shopify app dev
```
This command will start your app and open Shopify Checkout with your extension loaded.

---

## 🚀 Deploying to Shopify  

### 1️⃣ **Deploy the App**  
```sh
shopify app deploy
```
- This uploads your app to Shopify but does **not** automatically enable it.  

### 2️⃣ **Enable the Extension in Checkout**  
If your store is a **Shopify Plus** store:
- Go to **Shopify Admin → Settings → Checkout**
- Click **Customize Checkout**
- Enable the **Checkout UI Extension** for your store.  

If you are using a **developer account**, you can only test the extension using `shopify app dev`.

---

## 📝 Configuration  

Each extension has a `shopify.extension.toml` file that defines its behavior.  

### Checkout Extension (`checkout-gift-extension/shopify.extension.toml`)  
```toml
api_version = "2025-01"

[[extensions]]
name = "checkout-gift-extension"
handle = "checkout-gift-extension"
type = "ui_extension"
target = "purchase.checkout.block.render"
module = "src/Checkout.jsx"

[extensions.capabilities]
api_access = true
```

### Thank You Page Extension (`thank-you-extension/shopify.extension.toml`)  
```toml
api_version = "2025-01"

[[extensions]]
name = "thank-you-extension"
handle = "thank-you-extension"
type = "ui_extension"
target = "purchase.thank-you.block.render"
module = "src/ThankYou.jsx"

[extensions.capabilities]
api_access = true
```

---

## 💡 Notes  
- The Gift product should have zero price set 
- This project works **only on Shopify Plus or Developer Accounts**.  
- Stores on **Basic, Shopify, or Advanced** plans **cannot** use Checkout UI Extensions.  
- To test the extension locally, always use `shopify app dev`.  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## 🤝 Contributing  
Feel free to fork the repository and submit a pull request!  
