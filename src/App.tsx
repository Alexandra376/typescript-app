// import Lesson_06 from "lessons/Lesson_06/Lessons_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Homework07 from "./homeworks/Homework_07/Homework07";
// import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
import GlobalStyles from "styles/GlobalStyles";
import React from "react";
// import Layout from "./components/Layout/Layout";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Homework_14 from "./homeworks/Homework_14/Homework_14";
// import Lesson_12 from "./lessons/Lesson_12/Lesson_12";
// import Homework_11 from "./homeworks/Homework_11/Homework_11";
// import Lesson_11 from "./lessons/Lesson_11/Lesson_11";
// import Homework_09 from "./homeworks/Homework_09/Homework_09";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Lesson_10 from "./lessons/Lesson_10/Lesson_10";
// import About from "pages/About/About";
// import Home from "pages/Home/Home";
// import Users from "./pages/Users/Users";
// import Clients from "./pages/Clients/Clients";
// import Instagram from "./pages/Clients/Instagram/Instagram";
// import Facebook from "./pages/Clients/Facebook/Facebook";
// import Vkontakte from "./pages/Clients/Vkontakte/Vkontakte";
// import Lesson_11 from "./lessons/Lesson_11/Lesson_11";
// import Lesson_14 from "lessons/Lesson_14/Lesson_14";

function App() {
  return (
      <BrowserRouter>
          <GlobalStyles/>
          {/*<Layout>*/}
          {/*    <Routes>*/}
          {/*      <Route path='/' element={<Home/>}/>*/}
          {/*      <Route path='/about' element={<About/>}/>*/}
          {/*      <Route path='/users' element={<Users/>}/>*/}
          {/*      <Route path='/clients' element={<Clients/>}/>*/}
          {/*      <Route path='/clients/instagram' element={<Instagram/>}/>*/}
          {/*      <Route path='/clients/facebook' element={<Facebook/>}/>*/}
          {/*      <Route path='/clients/vkontakte' element={<Vkontakte/>}/>*/}
          {/*      <Route path='*' element='Page Not Found'/>*/}
          {/*    </Routes>*/}
          {/*</Layout>*/}

          {/*<Lesson_06/>*/}
          {/*<Lesson_07/>*/}
          {/*<Homework07/>*/}
          {/*<Lesson_08/>*/}
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          {/*<Lesson_09/>*/}
          {/*<Homework_09/>*/}
          {/*<Lesson_10/>*/}
          {/*<Lesson_11/>*/}
          {/*<Homework_11/>*/}
          {/*<Lesson_12/>*/}
          {/*<Lesson_14/>*/}
          <Homework_14/>
      </BrowserRouter>
  )
}

export default App;
