# project-3  AthlecticMia


## Table of Contents

-[Features](#features)

-[Demo](#demo)

-[Installation](#installation)

-[Usage](#usage)

-[PWA Functionality](#pwa-functionality)

-[Technologies Used](#technologies-used)

-[Contributing](#contributing)

-[License](#license)

## Introduction

Welcome to the AthleticMia E-commerce site! This project is a modern, responsive web application built using React and Vite, designed to provide users with an intuitive and seamless shopping experience for home gym and exercise equipment. Our motivation for this project was to provide a more curated online shopping experience for those who are more serious fitness enthusiasts or people building the own home gyms. Building an e-commerce site that sells home gym and exercise equipment, especially with PWA functionality, involves a variety of lessons across different domains of web development and project management. This included Frontend Development with React and Vite, PWA Development, Backend Development, Deployment, Design and UX, as well as Project Management and Collaboration. 


## Features

- Product Listings: Browse a variety of home gym and exercise equipment.
- Product Details: View detailed information about each product.
- User Authentication: Sign up and log in to manage your orders and profile.
- Order Management: Place and view past orders.
- Responsive Design: Accessible on desktop and mobile devices. 
- Progressive Web App (PWA): Installable on supported devices for a native app-like experience.

## Demo

Check out the live demo: https://project-3-3oll.onrender.com


## Installation

1. Clone the repository: https://github.com/GrandNagusZek/project-3.git

2. Navigate to the client directory: cd client

3. Install dependencies: npm install

4. Run the development server: npm run dev

5. Seed the database: npm run seed


## Usage

Once the development server is running, you can access the application at http://localhost:3000. 
The application will automatically reload if you make changes to the source files.

![alt text](assets/images/Screenshot%20AthleticMia.png)
![alt text](assets/images/Screenshot%20AthleticMia%20Signup.png)
![alt text](assets/images/Screenshot%20AthleticMia%20login.png)




## PWA Functionality

To test the PWA functionality, follow these steps:

1. Build the project: npm run build

2. Serve the production build: npx serve -s dist

3. Access the application: Visit 'http://localhost:3000' in your browser

4. On desktop, you should see an install prompt to add to the home screen in the browser menu. (as of June 9th, 2024 this install prompt functionality hasn't been completed)
The application is configured to be a Progressive Web App (PWA). The service worker and manifest configuration are set up to allow users to install the app and use it offline. 
However, the installation functionality is still being worked on. The offline functionality is working though.

The service worker handles the caching of the HTML, CSS, JS, and image assets to ensure a smooth offline experience.

The web manifest provides metadata for the PWA, including the app's name, description, icons, and theme colors.

## Technologies Used

* React: JavaScript library for building user interfaces.
* Vite: Next-generation front-end tooling for fast development.
* React Router: Declarative routing for React applications.
* Vite PWA Plugin: Plugin to integrate PWA features into a Vite project.
* CSS: Styling the application.
* Node.js & Express: Backend API for handling requests and database operations.
* MongoDB: Database for storing product and user data.


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. For the repository
2. Clone the forked repository to your local machine: 'git clone https://github.com/GrandNagusZek/project-3.git
3. Create a new branch: git checkout -b your-feature-name
4. Make your changes and commit them.
5. Push to your forked repository
6. Create a pull request to merge your changes into the main repository


## License 

This project is licensed under the MIT License.