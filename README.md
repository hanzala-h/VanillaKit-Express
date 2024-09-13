# VanillaKit Express

## Overview
**VanillaKit Express** is a modern boilerplate project designed for dynamic website development. It leverages **Express.js** for server-side routing and **Pug** as the template engine. Webpack is used to bundle JavaScript, SCSS, and other assets. The project focuses on simplicity while offering powerful features for developing dynamic web applications.

## Features
- **SCSS Support**: Write your styles in SCSS, and have them automatically compiled to CSS.
- **JS Bundling**: Efficient bundling of JavaScript modules for development and production.
- **Optimized Assets**: Webpack handles asset optimizations, such as minimizing JS/CSS and managing file hashes.
- **Live Development Server**: A development server for live-reloading and quick iteration.
- **Express.js Integration**: Dynamic routing for server-side logic.
- **Pug Templating**: Utilizes Pug as a fast, flexible template engine.
- **Cross-browser Compatibility**: Uses PostCSS for CSS autoprefixing and future-proof features.

## Project Structure
```
VanillaKit-Express/
├── src/
│   ├── app/            # JavaScript entry files
│   │   └── index.js
│   ├── styles/         # SCSS entry files
│   │   └── index.scss
│   ├── shared/         # Shared assets like images, fonts
│   └── views/          # Pug template files
│       └── index.pug
├── public/             # Output directory for static files and assets
│   └── index.html      # The file served to the browser after build
├── routes/             # Express.js route files
│   └── index.js
├── .gitignore          # Specifies files and directories to ignore in git
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── webpack.common.js   # Common Webpack configuration
├── webpack.dev.js      # Development Webpack configuration
├── webpack.prod.js     # Production Webpack configuration
├── app.js              # Entry point for Express server
└── README.md           # Readme file
```

## Installation
To install VanillaKit-Express, clone the repository and install the dependencies:
```sh
git clone https://github.com/hanzala-h/VanillaKit-Express.git
cd VanillaKit-Express
npm install
```

## Usage
### Generating the Static Site
To build and generate your static site, use the following command:
```sh
npm run fe:build
```
This command will compile and optimize your source files, outputting the final static site to the `public` directory.

### Development Server
To start a local development server with live reloading, use:

```sh
npm start
```
This will launch the development server, allowing you to preview changes in real-time as you work on your site. The server will automatically refresh the browser when source files are updated.

## Contributing
We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact us at [sayhi.hanzla@gmail.com](mailto:sayhi.hanzla@gmail.com).

## Acknowledgements
We would like to thank all the contributors and open-source projects that made this project possible.
