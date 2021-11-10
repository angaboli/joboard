# Job Board App
This application is created to connect candidates and recruiters.

Technical environment
---------------------
Language used for this application are and Javascript in general but in order to go fast, we used web frameworks, which are :
- Symfony is web application framework and a set of reusable PHP components/libraries.
- React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.

There are also technologies used like, docker, ...

How to get started with the project?
---------------------------------
After cloning the project on local, make sure you have installed **PHP**, **Node.js**, **Composer**, **Symfony** and go in the main directory.
To install symfony dependencies you can tap in command line `composer install`, after installing all symfony dependencies, start the database with docker by taping `docker-compose up -d` then now you can start tne server `symfony serve -d`.
To install react and the webpack encore dependencies, you tap `yarn install`, after that you can start the JS server by taping `yarn encore dev-server`.

Now all things are ready to you can navigate through your navigator on [http://localhost:8000](http://localhost:8000/).

