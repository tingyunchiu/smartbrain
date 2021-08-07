## This is a website that designs to help you improve your English writing skills by praticing paraphrasing
Try out at: Smartbrain (https://ancient-badlands-61242.herokuapp.com/) 

## User Journey
![States](/images/flow.jpg)

### Features
1. login/signup: 
- check if inputs are valid before sending to the backend: name, email, password can not be null
- use bcrypt to store hashed password at backend
2. texts comparison: 
- two *size-adjustable* input boxes: <br>
allow user to type in two texts (words, sentences, paragraphs) that they want to compare. 
- 'DETECT!' button: once the user click, <br>
the model will start running if both input boxes are not null  <br>
alert the user to fill in both input boxes if one or more of the input boxes is null  <br>
- warm text reminder: <br>
tell the user (1) how similar these two texts are and (2) that the similarity score has been successfully added into database <br>
or tell the user that the model is currently running 
3. plot:
- every time a new score comes out, the plot will update and display all the scores of this user

## Structures 
1. Frontend development with **React.js**, use **Redux** for state management and **React Router** for navigation between pages
2. Responsive Web Design with **Material-UI** <br/>
small screen (< 600 px): <br/>
![smallScreen](/images/smallScreen.gif) 
large screen: <br/>
![largeScreen](/images/largeScreen.png)
3. Used **the Universal Sentence Encoder**, a pretrained model for TensorFlow.js, to calculate a similarity score of two input texts
4. Connected to the backend with **restful APIs**
5. Deployed to **Heroku**

## Backend at: [Backend](https://github.com/tingyunchiu/smartbrain_api)
