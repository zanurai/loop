//import Index from './Index';
import './index.css';
import users from './users.js'



const App = () => {
  const user = ['skyblue', 'skyblue', 'skyblue', 'skyblue']
  //const users = props.users
  return (
    <>
      <div className="App">
        <h1>Loop React</h1>

      </div>

      <div className='user'>

        {users.map((user, index) => {
          return (
            <div key={index} style={{ backgroundColor: user, borderRadius: "10px", width: "500px" }}>
              {index}
              <p>{user.name}</p>
              <p>{user.location}</p>
              <p>{user.bus}</p>

            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
