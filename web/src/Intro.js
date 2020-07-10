import React, { Component } from 'react';
import './beauty.css'
import './trial.css'
import './trial1.css'
import './trial2.css'

class Intro extends Component {

    constructor(props) {
        super(props);
        this._clickButton = this._clickButton.bind(this);
    }

    //can be fired using a an_event;;;
    _clickButton() {
        const { onClick } = this.props;
        onClick();
    }
    render() {
        return (

           <div>
              <div>
              <div class="wrap cle mt5">
              <div id="profileListingDiv" className="w750 fr">
              <div class="srchTup mb-10 " id="9575158 ">
                <div class="candDet newTuple ">  <div class="oh p1 ">   <strong class="fl candName ">  <a target="_blank " 
                      href="#" title="Candidate7MvHppxjT " data-highlight="name ">Candidate7MvHppxjT</a>  </strong> </div>  
                <div class="cle "> <div class="expLeft "> <p>   </p> 
                <p><em>Current Designation: </em> <span data-highlight="currentExperience_designation ">  Not Mentioned  </span> </p> 
                <p><em>Current Company: </em> <span data-highlight="currentExperience_employer "> Not Mentioned  </span> </p> 
                <p><em>Key Skills:</em>  <span>Not Mentioned</span>  </p>       
                </div> 

                <div class="expRight "> 
                <p><em>Current Location:</em> <span>Not Mentioned</span> </p>    
                <p><em>Mobile Number:</em> <span>12344322221</span> </p>  
                <p><em>Email:</em> <span>7MvHppxjT@yopmail.com</span> </p>  
                    
                </div>
               
                <div class="cle ">
                <p>
                 <span> <input type="button " class="blue_btn fl " id="buttonID " value="Generate Interview Link " rel=" " /> </span>
                </p> 
                <p>   </p> 
                </div>
                <div class="inboxVerify pr4Imp ">   <span><small class="viewIc mr3 "></small> <strong> 0 </strong>Requirements</span>        <span><small class="eyeIc mt3 "></small>  <strong>  1  </strong> </span>         <span>Applied On:<small> 9 Jul 20</small></span><span>Active:<small> 9 Jul 20</small></span><span>Modified:<small> 9 Jul 20</small></span>    </div>  
                </div> 
                </div>

                <div class=" hiringStat cle "> 
                <div class=" pb10 ">  </div> 
                <div class=" fl interOuter "> <div>  </div> <div class=" interview " id="
                interview_mod9575158 " data-offerall=" 1 ">         <a href=" javascript:void(0) "> <span class="
                interTxt " data-id=" 1067_2615 " title=" Offer Round - Joining " className=" offer123">Offer Round - Joining</span> <div class=" pRel fl "> <span class="
                outerArow "> <em class=" s_downArrow "></em></span> </div> </a>  <a class=" rjbtn " data-appid="
                9575158 " data-stars=" Array "> Reject </a>  </div>    <div class=" interDrop fl menu1 pRel " id="
                statusChangeMenu_9575158 ">   <a rel=" ver " href=" javascript:void(0); "><small class="
                f9c6 ">by</small>you <small class=" dropArrow mt5 ml3 "></small></a>  <ul class=" subNav
                subNavMenu ">  <li><a href=" javascript:void(0); " rel=" "> <span class=" dIb pr3 "> <small class="
                s_listed fr " className=" offer124 ">  Offer Round-Joining </small></span>  <span class="
                dIb "> <span class=" textS9 " title=" Lokesh
                Agrawal ">by  you on 09 Jul 2020</span></span> </a><small class="
                topArowIc "></small> </li>   <li><a href=" javascript:void(0); " rel=" "> <span class=" dIb
                pr3 "> <small class=" s_listed fr " className="offer125">  Prospect </small></span>  <span class=" dIb "> <span class="
                textS9 " title=" Lokesh Agrawal ">by  you on 09 Jul 2020</span></span> </a> </li>   </ul> <a href="
                javascript:void(0); "> <p><small class=" f9c6 pr3 ">on</small><em id=" date1 " class="
                tipText ">09 Jul 20</em></p> </a>  </div> </div>   </div>    <div id="
                statusDataCaptureDiv_9575158 ">                 <div class=" subStage srpStatus cle " id="
                subStageStatusChange ">  <div class=" fl "> <div> <div>  Joining as  <span class="
                offrDesignation ">yfKzYVfomN</span>  </div> <div class=" mt5 "> <div> <span class="
                salOffer ">Salary Offered: </span>  <span title=" ₹89,470 ">₹89,470</span>  <span class="
                joiningOn ">Offered On: </span> <span>10 Jul 2020 </span> <span class="
                joiningOn ">Joining On: </span> <span>19 Jul 2020</span> </div> </div> </div>  </div>    <div class="
                candOffrStatus "> Mail to Candidate Pending </div>  <img class=" srpOfferStatusImg " src="
                https://img.naukimg.com/s/4/124/i/yellow.png " />    </div>   </div>

                </div>
                </div>
                </div>  
                </div>

            
            </div>
        );
    }
}

export default Intro;
