import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import MyApp from './MyApp'
import Intro from './Intro'
import Dialog from './components/Dialog';
//this dialog component is working fine

class App extends Component { 

    constructor(props) { 
      super(props);

      this.state = {
        ok : false //control-variable 
        , 
        now : ''
        ,
        pp : window.location.pathname.length
        ,
        loc: window.location.href
        ,
        isOpen:false
        ,

      };

      this.onClick = this.onClick.bind(this);
      this.getCurrentDate = this.getCurrentDate.bind(this);
      this.setOpen = this.setOpen.bind(this);
    }

    onClick() { 
      console.log('Hi , I have reached here !!' + this.state.ok)
      this.setState({ ok: true});
      console.log('Hi, I am leaving this part now ' + this.state.ok)
    }

    getCurrentDate() { 
      var tempDate = new Date();
      var date = ' ' + tempDate.getFullYear() 
      + (tempDate.getMonth()+1) 
      + tempDate.getDate() 
      + tempDate.getHours()
      + tempDate.getMinutes()
      + tempDate.getSeconds()
      + tempDate.getMilliseconds() + ' ';

      this.setState({ now : date });

      console.log(date);
    }

    setOpen() { 
      this.setState({ isOpen:true });
    }

    componentDidMount() { 
      this.getCurrentDate();
    }

    render() { 
     return (
        // so, the crux is to render MyApp.js component to get the application working ...
        // 1-> objective is to develop a UI in this page and then re-direct it to MyApp component, in which the participant can join the room-meeting;
        // 2-> and then learn about the get and post requests to refactor the code.
        // I can do it without the help of the server;;;
         <Router>
            <div>
                 {/* <button onClick={this.getCurrentDate}> Click this to set the current date</button>  */}
                 {/* <div> {this.state.now} </div>  */}

                 <div> This is the url of the current page : {this.state.loc} </div>
                 
                 <button    onClick={ () => { 
                            this.setOpen();
                            this.getCurrentDate();
                             } }>      
                  What ? Generate Link for me please ;;;   
                  </button>
                  
                 <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                     {this.state.loc}{this.state.now}  is the current value of the link : 
                     interview is going to be conducted on this date and so on ;;;;
                 </Dialog>

                  {/* { this.state.ok === false && <Intro onClick={this.onClick}/> } */}
                  { this.state.pp === 1 && <Intro onClick = {this.onClick} /> }
                  {/* { this.state.ok === true && <MyApp /> }  */}
                  { this.state.pp != 1 && <MyApp /> }
                  {/*Calling this function only when it is required */}
          </div>
         </Router>
          
      );
   }
}

export default App;
