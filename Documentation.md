# ToDo Archetecture Documentation

## Tech Stack

Firebase
React Quill
Material UI

## Setup Guide
Install Create React App:
```npx create-react-app my-app
```
Install material-ui core and icons
Install react-quill
Install firebase

Add firebase config object to index.js

In App.js
Add react constructor
Import firebase
Use componentDidMount function to update

Create seperate folders for page elements' (Cardview, carditem, editor) js files
Import page elements to App.js and add them to the render return function

Add functionality (update, new note button button, submit button) to editor and cardview
Implement card view (list of todo cards)
Add select and delete note functions to carditem (the individual card components)

Add prototype functions for selecting and deleting notes in App.js
Implement displaying selected note in editor

Implement updating, adding, and deleting notes in firebase

Add ability to edit note titles

-----------------------------------------Converting note app to ToDo app:-----------------------------------------

Change sidebar to Mui (Material UI) cards

Add listItems array to cards
Convert carditem to a function instead of a class
Implement Mui checklist display of list items in carditem

## Startup Guide
npm start