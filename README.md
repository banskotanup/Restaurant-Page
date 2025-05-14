# 🍽️ Restaurant Page

A dynamic, single-page restaurant website built with JavaScript and Webpack. This project, part of The Odin Project curriculum, emphasizes modular design, ES6 features, and bundling tools. Instead of static HTML, it uses JavaScript modules for each section—Home, Menu, and Contact—managing content through DOM manipulation.

## 🚀 Features

- **Modular Design**: Each page section (Home, Menu, Contact) is a separate JavaScript module.
- **Dynamic Content**: Content is generated and manipulated using DOM methods.
- **Webpack Bundling**: Utilizes Webpack to bundle JavaScript modules efficiently.
- **Responsive Layout**: Designed to be responsive across various devices.

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/banskotanup/Restaurant-Page.git
   cd Restaurant-Page
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the project:**

   ```bash
   npm run build
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open the application:**

   Navigate to `http://localhost:8080` in your browser to view the app.

## 🛠️ Technologies Used

- [JavaScript (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Webpack](https://webpack.js.org/)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📁 Project Structure

```plaintext
Restaurant-Page/
├── dist/
│   └── index.html
├── src/
│   ├── modules/
│   │   ├── home.js
│   │   ├── menu.js
│   │   └── contact.js
│   ├── index.js
│   └── style.css
├── package.json
├── webpack.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request**

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
