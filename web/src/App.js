import React, { Component } from 'react';
import MyApp from './MyApp'
class App extends Component { 

    constructor(props) { 
      super(props);

      this.state = {
        ok : false //control-variable 
      };
      this.onClick = this.onClick.bind(this);
    }

    onClick() { 
      console.log('Hi , I have reached here !!' + this.state.ok)
      this.setState({ ok: true});
      // this.state.ok = true;
      console.log('Hi, I am leaving this part now ' + this.state.ok)
    }

    render() { 
     return (
         // <div> this is going to revolutionize this application ;;;</div>
        // so, the crux is to render MyApp.js component to get the application working ...
        // 1-> objective is to develop a UI in this page and then re-direct it to MyApp component, in which the participant can join the room-meeting;
        // 2-> and then learn about the get and post requests to refactor the code.
          <div>
                  <div>let's start !!</div>
                  <div>Welcome to naukri-rms </div>
                  <div> Online vido conferencing platform</div>
                  <button onClick={ () => {this.onClick()} }> Click here to enter to join the video conference </button>
                  { this.state.ok === true && <MyApp /> } 
                  {/*Calling this function only when it is required */}
          </div>
      );
   }
}

export default App;