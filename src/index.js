import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import Users from './users.js'
//import ScotchInfoBar from './ScotchInfoBar.js'
//import users from './users.js'


ReactDOM.render(<App />, document.getElementById("root"))
/*const user = {
  name: "zanu",
  location: "Solukhumbu",
  foodType: "Vegetarian",
  age: 25,
  likes: "Dancing,studing",
  instagramName: "zanurai",
  avatar: ""

}*/

function index() {

  return (
    <>
      <div className="App">
        <App />
        {/*<Users color={skyblue} />*/}
      </div>

    </>
  )
}


//ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default index