## This is a website that designs to help you improve your English writing skills by praticing paraphrasing
Try out at: Smartbrain (https://ancient-badlands-61242.herokuapp.com/) 

## User Journey
![States](/images/flow.jpg)

### Feactures
1. login/signup: 
- check if input is valid before send to backend: name, email, password can not be null
- use bcrypt to store password at backend
2. texts comparison: 
- two *size-adjustable* input boxs: <br>
allow user to type in two texts (words, sentences, paragrpahs) that they want to compare. 
- 'DETECT!' button: once the user click, <br>
the model will start running if both text inputs are not null  <br>
alert the user to fill in both inputs if one of the text inputs is null  <br>
- warm text reminder: <br>
tell the user (1) how similar these two texts are and (2) that the similarity score has been sucessfully added into database <br>
or tell the user that the model is currently running 
3. plot:
- everytime a new score comes out, the plot will update and display all the scores of this user

## Structures 
1. Frontend development with **React.js**, and use **Redux** for state management and **React Router** for navigation between pages
2. Responsive Web Design with **Material-UI** <br/>
small screen (< 600 px): <br/>
![smallScreen](/images/smallScreen.gif) 
large screen: <br/>
![largeScreen](/images/largeScreen.png)
3. Used **the Universal Sentence Encoder**, a pretrained model for TensorFlow.js, to calculate a similarity score of two input texts
4. Used **Express** as a server and **Knex** to communicate with Postgres database
5. Connected frontend and backend with **restful APIs**
6. Deployed frontend and backend to **Heroku**

## Backend at: [Backend](https://github.com/tingyunchiu/smartbrain_api)