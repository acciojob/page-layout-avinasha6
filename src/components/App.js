
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";


const App = () => {

  let data = "This is the content of my website."
  let data2="Welcome to my website"
  let data3 = "2023 My Website. All rights reserved."

  return (
    <div>
       <PageLayout  children ={data}
       header={data2}
       footer={data3}
       />
    </div>
  )
}

export default App
