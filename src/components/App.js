
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";


const App = () => {

  let data = "This is the content of my website."
"

  return (
    <div>
       <PageLayout  name={data}/>
    </div>
  )
}

export default App
