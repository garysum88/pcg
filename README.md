# Product Care Group - Mailing List Subscription Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



In the project directory, you can run this program by:
1. Clone the [Repo](https://github.com/garysum88/pcg.git) in your command line interface

```
git clone https://github.com/garysum88/pcg.git
```

2. Change the current directory to the 'pcg' folder

```
cd pcg
```

3. Install the dependencies to the app
```
npm install
```

4. Run the app in the development mode
```
npm start
```

5. Your web browser should now open. If not, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

6. To stop the app from running in local environment, press Ctrl + C in your command line terminal.




## List of concerns
1. The API will respond status 200 when entering a non-email value.
```
Issue : 
The current API does not validate the email input.

Applied <input type="email"> in HTML email input to validate the email input when a user click "submit" button.
It is good to perform another validation in React using Regex but the best way to perform a validation is from the Back-end

```

2. The API will respond status 200 when entering any value on "name", "phone" and "postcode". For example, "ABC" for phone number or any random postcode that is not a valid UK postcode.

```
Issue : 
The current API does not validate the name, phone and postcode input.

Validation is neither done on the front-end nor back-end, given time constraint allowed in this task. If I have more time to work on this, I will use regex to check and validate the input (if the input is not empty):

UK phone number regex : https://www.regextester.com/104299
UK postcode regex : https://andrewwburns.com/2018/04/10/uk-postcode-validation-regex/

```

3. Unsubscrible option is not available
```
Issue : This functionality must be enabled in the back-end API
```

4. In the current version of app, a user must enter his/her additional information immediately after he/she has successfully subscribed the mailing list. He/she could not come back to the site to provide additional information.

```
If I am allowed to have more time working on this program, I will perform the following tasks to enable users to provide us with more details:

a) If an error code is displayed because the email had been previously entered, I will show the following to the user:
    i) A message that tells the user he/she has already subscribled to the mailng list
    ii) To display the component for extra detail (Optional.jsx) so that the user can input more details

b) Add a page of subscription status check so that user can check the status. If the user has been previously subscribled, he/she will be able to see  component for extra detail (Optional.jsx)

```

5. The "sourceRef" is likely to be an API key.
```
It can be hidden using environment variables (dotenv).
```


6. Given time constraint, a thorough testing is not possible in this project

7. Given time constraint, semantic HTML and Accessible Rich Internet Applications (ARIA) is not possible in this project

8. Given time constraint, a proper CSS styling and dynamic CSS styling is not possible in this project
