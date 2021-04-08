import React from 'react';
import Login from './Login';


const userInfo = {
  name: "Chuck Norris",
  mail: "gmail@chucknorris.com",
  imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
  phone: "+918 372 574",
  password:"123456"
}

class App extends React.Component {
  render() {
    return (
      <Login user={userInfo} />
    );
  }
}

export default App;
