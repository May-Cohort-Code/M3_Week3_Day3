import logo from './logo.svg';
import './App.css';
import {Routes,Route, Link} from 'react-router-dom'
import Books from './components/Books'
import BooksData from './books.json'
import { useState } from 'react';
import BookDetails from './components/BookDetails';
import Error from './components/Error';
import Login from './components/Login';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';

function App() {
  const [books, setBooks] = useState(BooksData)
  return (
    <div className="App">
      {/* <Routes>
      <Route path='/books/:bookId' element={<BookDetails books={books}></BookDetails>}></Route>
      <Route path='/books' element={<Books books={books}></Books>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
        

      </Routes> */}

      <Routes>
        <Route path="/characters" element={<Characters></Characters>}></Route>
        <Route path='/characters/:id' element={<CharacterDetails></CharacterDetails>}></Route>
      </Routes>
    </div>
  );
}

// exercise:

//in our Characters.jsx component

// 1. get the data for all the characters from our api

// 2. store the result in a state

// 3. map through all the characters and display the name, occupation, and weapon

export default App;

//Steps for Routing

// 1. npm i react-router-dom

// 2. wrap my entire application with the <BrowserRouter>

// 3. in the App.js import Routes and Route

// 4. write your <Route> tags inside of the <Routes>




//exercise 2:

//1. in your characters.jsx add a <Link> tag that takes the user to /characters/:id

//2. Create the dynamic route for /characters/:id that renders the CharacterDetails.jsx

//3. in the CharacterDetails.jsx get the id from the parameter and find the character with the same id

//4. display the characters information in the return