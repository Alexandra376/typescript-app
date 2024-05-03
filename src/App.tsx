// import Lesson_06 from "lessons/Lesson_06/Lessons_06";
// import Lesson_07 from "lessons/Lesson_07/Lesson_07";
// import Homework07 from "./homeworks/Homework_07/Homework07";
// import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
import GlobalStyles from "styles/GlobalStyles";
import React from "react";
import Layout from "./components/Layout/Layout";
// import Lesson_12 from "./lessons/Lesson_12/Lesson_12";
import Homework_11 from "./homeworks/Homework_11/Homework_11";
// import Lesson_11 from "./lessons/Lesson_11/Lesson_11";
// import Homework_09 from "./homeworks/Homework_09/Homework_09";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Lesson_10 from "./lessons/Lesson_10/Lesson_10";

function App() {
  return (
      <>
          <GlobalStyles/>
          <Layout/>
          {/*<Lesson_06/>*/}
          {/*<Lesson_07/>*/}
          {/*<Homework07/>*/}
          {/*<Lesson_08/>*/}
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          {/*<Lesson_09/>*/}
          {/*<Homework_09/>*/}
          {/*<Lesson_10/>*/}
          {/*<Lesson_11/>*/}
          <Homework_11/>
          {/*<Lesson_12/>*/}
      </>
  )
}

export default App;
