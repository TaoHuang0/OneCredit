# API Documentations
## Dependencies
To begin, download the repository and run ```npm install``` in the command-line. This will install each dependency needed for running the application.
```
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.2.1",
    "@fortawesome/free-brands-svg-icons": "^6.2.1",
    "@fortawesome/free-regular-svg-icons": "^6.2.1",
    "@fortawesome/free-solid-svg-icons": "^6.2.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "jason-server": "^3.0.0",
    "json-server": "^0.17.1",
    "react": "^18.2.0",
    "react-credit-cards": "^0.8.3",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-router-dom": "^6.6.0",
    "react-scripts": "^2.1.3",
    "web-vitals": "^2.1.4"
  }
```


## Command Line Arguments
To begin, executing `npm start` will run the application in the default port 3000 and open up the web application automatically. To run the server, executing `npm run server` will run the server in port 5000. Anytime you want to go the fefalult page, go to `http://localhost:3000` in your browser will present the default page for the app.



## Endpoints
### /
This is the root page or main page of our website. This endpoint redirects the user to the Credit Card main page. Users can navigate credit cards they already added to the database at this page and manage their approval date, annual fee and access credit card informations.

### /task
This endpoint is used by the "Reminder" tab on the menu bar. It will brings users to the reminder page. Users can add reminders related to credit cards on this page. e.g. Set reminder for payment due date, get notified when an annual fee is due.

### /cardinput
This endpoint is used by the "Plus" button on the navigation page (`http://localhost:3000`). It will brings users to the Add Card page. Users can add new credit cards in this page.

### /shopping
This endpoint is used by the "Category Shopping" tab on the menu bar. It will brings users to the Category Shopping page. Users can specify a category they want to make purchase in, then the applicaction will automatically selects the credit card that earns you the most cash back for users.

### /cardinfo
Users can click the credit card image on the main page  (`http://localhost:3000`) to get into this endpoint. It will brings users to the cardinfo page. Users can store their credit card information in this page.

# Backend implementation
We store all our data in local `json server`.

# Front end implementation
We build our front end using `React JS Environment`, `JavaSceipt`, `HTML` and `CSS`. There are three different views in our web application, including the `manage card` page, the `card information` page, the `reminder` page, the `add card` page, and the `category shopping` page.
