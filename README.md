# Webscribe

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

A Javascript text editor progressive web application. 

## Table of Contents
- [Screenshots](#screenshots)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Questions](#questions)
- [License](#license)

## Screenshots 

![App Manifest](./Assets/AppManifest.png)
![Service Worker](./Assets/ServiceWorker.png)
![indexedDB](./Assets/IndexedDb.png)

## Description

WebScribe is a Just Another Text Editor that serves as a powerful, reliable, and fully-featured text editor that runs directly in your browser. The application is a single-page application (SPA) that fully adheres to PWA guidelines, providing a native app-like experience.

WebScribe takes advantage of Webpack for bundling JavaScript files and generating the HTML file, service worker, and a manifest file. It supports next-gen JavaScript as well as older versions through the use of Babel, and comes with a service worker registered through Workbox, allowing for precaching of static assets for faster load times and offline accessibility.

The goal of this application is to provide users a seamless interaction experience between the browser-based and installed states, renderring it a reliable tool for the creation and retrieval of code snippets and notes, whether users are online or offline.

The application has been delpoyed via Heroku and can be visited [here](https://salty-spire-15700.herokuapp.com/).

## Installation

This application is deployed through Heroku. Consequently, the application is accessible on the browser through [this]() link, with no installation required to access the application. As a Progressive Web Application (PWA), however, this application is also installable on users' devices allowing them to use it as if it were a native app. To install the application like a native app, follow these steps:

1. Access the App: Navigate to the URL of the deployed application in a web browser.
2. Installing the App: Depending on the browser used, there may be an immediate prompt asking if the users want to install the app. Alternatively, users can manually install the app. Here is how you might do so in some popular browsers:
    * Look to the top-right corner of the page, 

Please note that this is a general installation overview the required steps may be slightly different based on the user's browser and operating system.

Once installed, the application will behave similarly to a native app. It can be launched from the user's desktop or app drawer and will open in its own window, separate from the browser. 

## Usage

WebScribe empowers you to create notes or code snippets with or without an internet connection, allowing you to retrieve them reliably for later use and providing a robust, user-friendly solution for your text-editing needs.

Users start the application by opening it in their preferred web browser. Upon doing so, they will be greeted with a clean, intuitive interface that's easy to navigate. When users want are ready to begin creating notes or code snippets, they can simply begin typing into the text editor area. As users work, the application automatically saves their work. They don't need to worry about losing their progress because when they click off the DOM window, the application automatically saves the content in the IndexedDB database. This means they can navigate away or close their browser, and their content will still be there when they return. Further, if users lose their internet connection while they're working, they won't lose their progress. The application will continue to function offline, saving their work to the IndexedDB database.

When users reopen the application, it retrieves their saved content from the IndexedDB database. This means they can pick up right where they left off! If users want to have easier access to the application, they can click the `install` button to download it to their desktop, where it will appear as an icon allowing them to open it just like a native application.

## Contributing
Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Questions
If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com. You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.

