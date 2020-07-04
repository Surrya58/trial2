import React, { Component } from 'react';
import './beauty.css'

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
                    
            <div className="candDet newTuple"> 
            <div className="oh p1">    
            <input name="profileIds[]" type="checkbox" value="3085718" className="srpListChk f_check mr8 "/>    
            <strong className="fl candName">  
            <a target="_blank" href="#" title="candidateName" data-highlight="name">candidateName</a>  
            </strong>
            </div> 
            </div>

            <div className="expDetails ">
            <div className="cle">
            <div className="expLeft">
            <p>   </p> 
            <p><em>Current Designation: </em> <span data-highlight="currentExperience_designation">  Not Mentioned  </span> </p>
            <p><em>Current Company: </em> <span data-highlight="currentExperience_employer"> Not Mentioned  </span> </p>      
            </div>
            
            <div className="expRight">
            <p><em>Current Location:</em> <span>Not Mentioned</span> </p>       
            <div id="candid_3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>    
            <div className="cle pb10"> 
            <small className="sPhoneIcGrey fl mt3"></small> 
            <span className="fl pl5 pb3"> <span id="phoneNoForDisplay" data-highlight="phone"> 1593723277 </span> 
            </span>  
            <div className="interDrop selectm pRel fl">  
            <ul className="subNav subNavMenu" name="callStatus" pid="4462438_1373420_9556098" profileid="3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>   
                <li><a href="#" cid="1">Called</a><small className="topArowIc"></small></li>   
                <li><a href="#:void(0)" cid="2">Messaged</a></li>   
                <li><a href="#" cid="3">Call not picked</a></li>   
                <li><a href="#" cid="4">Not Reachable</a></li>   
                <li><a href="#" cid="5" title="This option allows you to directly chat with this candidate over Whatsapp Web." id="action_5_3085718" onclick="callPhoneTag(this)">Send Whatsapp Message</a></li>   
            </ul> 
            <a href="#" className=" " rel="ver">Select<small className="dropArrow mt5 ml5"></small></a> 
            </div>  
            </div>  
           
            <p> 
            <small className="msg_gIc fl mt3"></small>  
            <span className="fl pl5 pb3 " id="emailIdForDisplay" title="email1593717605480@yopmail.com" data-highlight="email"> email1593717605480@yo ...   </span> 
            </p> 
            </div> 
            </div> 
            </div> 
            <p><em>Key Skills:</em>  <span>Not Mentioned</span>  </p>  
            <p>   </p>    
           
            <div className="inboxVerify pr4Imp">  
            <span><small className="viewIc mr3"></small> <strong> 0 </strong>Requirements</span>       
            <span><small className="eyeIc mt3"></small>  <strong>  1  </strong> </span>        
            <span>Applied On:<small> 3 Jul 20</small></span>
            <span>Active:<small> 3 Jul 20</small></span>
            <span>Modified:<small> 3 Jul 20</small></span>   
            </div>  
            </div> 
            
             <div><div></div></div>

             <div className="candDet newTuple"> 
            <div className="oh p1">    
            <input name="profileIds[]" type="checkbox" value="3085718" className="srpListChk f_check mr8 "/>    
            <strong className="fl candName">  
            <a target="_blank" href="#" title="candidateName" data-highlight="name">candidateName</a>  
            </strong>
            </div> 
            </div>

            <div className="expDetails ">
            <div className="cle">
            <div className="expLeft">
            <p>   </p> 
            <p><em>Current Designation: </em> <span data-highlight="currentExperience_designation">  Not Mentioned  </span> </p>
            <p><em>Current Company: </em> <span data-highlight="currentExperience_employer"> Not Mentioned  </span> </p>      
            </div>
            
            <div className="expRight">
            <p><em>Current Location:</em> <span>Not Mentioned</span> </p>       
            <div id="candid_3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>    
            <div className="cle pb10"> 
            <small className="sPhoneIcGrey fl mt3"></small> 
            <span className="fl pl5 pb3"> <span id="phoneNoForDisplay" data-highlight="phone"> 1593723277 </span> 
            </span>  
            <div className="interDrop selectm pRel fl">  
            <ul className="subNav subNavMenu" name="callStatus" pid="4462438_1373420_9556098" profileid="3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>   
                <li><a href="#" cid="1">Called</a><small className="topArowIc"></small></li>   
                <li><a href="#:void(0)" cid="2">Messaged</a></li>   
                <li><a href="#" cid="3">Call not picked</a></li>   
                <li><a href="#" cid="4">Not Reachable</a></li>   
                <li><a href="#" cid="5" title="This option allows you to directly chat with this candidate over Whatsapp Web." id="action_5_3085718" onclick="callPhoneTag(this)">Send Whatsapp Message</a></li>   
            </ul> 
            <a href="#" className=" " rel="ver">Select<small className="dropArrow mt5 ml5"></small></a> 
            </div>  
            </div>  
           
            <p> 
            <small className="msg_gIc fl mt3"></small>  
            <span className="fl pl5 pb3 " id="emailIdForDisplay" title="email1593717605480@yopmail.com" data-highlight="email"> email1593717605480@yo ...   </span> 
            </p> 
            </div> 
            </div> 
            </div> 
            <p><em>Key Skills:</em>  <span>Not Mentioned</span>  </p>  
            <p>   </p>    
           
            <div className="inboxVerify pr4Imp">  
            <span><small className="viewIc mr3"></small> <strong> 0 </strong>Requirements</span>       
            <span><small className="eyeIc mt3"></small>  <strong>  1  </strong> </span>        
            <span>Applied On:<small> 3 Jul 20</small></span>
            <span>Active:<small> 3 Jul 20</small></span>
            <span>Modified:<small> 3 Jul 20</small></span>   
            </div>  
            </div> 
            

            <div><div></div></div>

            <div className="candDet newTuple"> 
            <div className="oh p1">    
            <input name="profileIds[]" type="checkbox" value="3085718" className="srpListChk f_check mr8 "/>    
            <strong className="fl candName">  
            <a target="_blank" href="#" title="candidateName" data-highlight="name">candidateName</a>  
            </strong>
            </div> 
            </div>

            <div className="expDetails ">
            <div className="cle">
            <div className="expLeft">
            <p>   </p> 
            <p><em>Current Designation: </em> <span data-highlight="currentExperience_designation">  Not Mentioned  </span> </p>
            <p><em>Current Company: </em> <span data-highlight="currentExperience_employer"> Not Mentioned  </span> </p>      
            </div>
            
            <div className="expRight">
            <p><em>Current Location:</em> <span>Not Mentioned</span> </p>       
            <div id="candid_3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>    
            <div className="cle pb10"> 
            <small className="sPhoneIcGrey fl mt3"></small> 
            <span className="fl pl5 pb3"> <span id="phoneNoForDisplay" data-highlight="phone"> 1593723277 </span> 
            </span>  
            <div className="interDrop selectm pRel fl">  
            <ul className="subNav subNavMenu" name="callStatus" pid="4462438_1373420_9556098" profileid="3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>   
                <li><a href="#" cid="1">Called</a><small className="topArowIc"></small></li>   
                <li><a href="#:void(0)" cid="2">Messaged</a></li>   
                <li><a href="#" cid="3">Call not picked</a></li>   
                <li><a href="#" cid="4">Not Reachable</a></li>   
                <li><a href="#" cid="5" title="This option allows you to directly chat with this candidate over Whatsapp Web." id="action_5_3085718" onclick="callPhoneTag(this)">Send Whatsapp Message</a></li>   
            </ul> 
            <a href="#" className=" " rel="ver">Select<small className="dropArrow mt5 ml5"></small></a> 
            </div>  
            </div>  
           
            <p> 
            <small className="msg_gIc fl mt3"></small>  
            <span className="fl pl5 pb3 " id="emailIdForDisplay" title="email1593717605480@yopmail.com" data-highlight="email"> email1593717605480@yo ...   </span> 
            </p> 
            </div> 
            </div> 
            </div> 
            <p><em>Key Skills:</em>  <span>Not Mentioned</span>  </p>  
            <p>   </p>    
           
            <div className="inboxVerify pr4Imp">  
            <span><small className="viewIc mr3"></small> <strong> 0 </strong>Requirements</span>       
            <span><small className="eyeIc mt3"></small>  <strong>  1  </strong> </span>        
            <span>Applied On:<small> 3 Jul 20</small></span>
            <span>Active:<small> 3 Jul 20</small></span>
            <span>Modified:<small> 3 Jul 20</small></span>   
            </div>  
            </div> 
            

            <div><div></div></div>

            <div className="candDet newTuple"> 
            <div className="oh p1">    
            <input name="profileIds[]" type="checkbox" value="3085718" className="srpListChk f_check mr8 "/>    
            <strong className="fl candName">  
            <a target="_blank" href="#" title="candidateName" data-highlight="name">candidateName</a>  
            </strong>
            </div> 
            </div>

            <div className="expDetails ">
            <div className="cle">
            <div className="expLeft">
            <p>   </p> 
            <p><em>Current Designation: </em> <span data-highlight="currentExperience_designation">  Not Mentioned  </span> </p>
            <p><em>Current Company: </em> <span data-highlight="currentExperience_employer"> Not Mentioned  </span> </p>      
            </div>
            
            <div className="expRight">
            <p><em>Current Location:</em> <span>Not Mentioned</span> </p>       
            <div id="candid_3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>    
            <div className="cle pb10"> 
            <small className="sPhoneIcGrey fl mt3"></small> 
            <span className="fl pl5 pb3"> <span id="phoneNoForDisplay" data-highlight="phone"> 1593723277 </span> 
            </span>  
            <div className="interDrop selectm pRel fl">  
            <ul className="subNav subNavMenu" name="callStatus" pid="4462438_1373420_9556098" profileid="3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>   
                <li><a href="#" cid="1">Called</a><small className="topArowIc"></small></li>   
                <li><a href="#:void(0)" cid="2">Messaged</a></li>   
                <li><a href="#" cid="3">Call not picked</a></li>   
                <li><a href="#" cid="4">Not Reachable</a></li>   
                <li><a href="#" cid="5" title="This option allows you to directly chat with this candidate over Whatsapp Web." id="action_5_3085718" onclick="callPhoneTag(this)">Send Whatsapp Message</a></li>   
            </ul> 
            <a href="#" className=" " rel="ver">Select<small className="dropArrow mt5 ml5"></small></a> 
            </div>  
            </div>  
           
            <p> 
            <small className="msg_gIc fl mt3"></small>  
            <span className="fl pl5 pb3 " id="emailIdForDisplay" title="email1593717605480@yopmail.com" data-highlight="email"> email1593717605480@yo ...   </span> 
            </p> 
            </div> 
            </div> 
            </div> 
            <p><em>Key Skills:</em>  <span>Not Mentioned</span>  </p>  
            <p>   </p>    
           
            <div className="inboxVerify pr4Imp">  
            <span><small className="viewIc mr3"></small> <strong> 0 </strong>Requirements</span>       
            <span><small className="eyeIc mt3"></small>  <strong>  1  </strong> </span>        
            <span>Applied On:<small> 3 Jul 20</small></span>
            <span>Active:<small> 3 Jul 20</small></span>
            <span>Modified:<small> 3 Jul 20</small></span>   
            </div>  
            </div> 
            
            <div><div></div></div>

            <div className="candDet newTuple"> 
            <div className="oh p1">    
            <input name="profileIds[]" type="checkbox" value="3085718" className="srpListChk f_check mr8 "/>    
            <strong className="fl candName">  
            <a target="_blank" href="#" title="candidateName" data-highlight="name">candidateName</a>  
            </strong>
            </div> 
            </div>

            <div className="expDetails ">
            <div className="cle">
            <div className="expLeft">
            <p>   </p> 
            <p><em>Current Designation: </em> <span data-highlight="currentExperience_designation">  Not Mentioned  </span> </p>
            <p><em>Current Company: </em> <span data-highlight="currentExperience_employer"> Not Mentioned  </span> </p>      
            </div>
            
            <div className="expRight">
            <p><em>Current Location:</em> <span>Not Mentioned</span> </p>       
            <div id="candid_3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>    
            <div className="cle pb10"> 
            <small className="sPhoneIcGrey fl mt3"></small> 
            <span className="fl pl5 pb3"> <span id="phoneNoForDisplay" data-highlight="phone"> 1593723277 </span> 
            </span>  
            <div className="interDrop selectm pRel fl">  
            <ul className="subNav subNavMenu" name="callStatus" pid="4462438_1373420_9556098" profileid="3085718" style={{flexDirection:'row', flexWrap:'wrap'}}>   
                <li><a href="#" cid="1">Called</a><small className="topArowIc"></small></li>   
                <li><a href="#:void(0)" cid="2">Messaged</a></li>   
                <li><a href="#" cid="3">Call not picked</a></li>   
                <li><a href="#" cid="4">Not Reachable</a></li>   
                <li><a href="#" cid="5" title="This option allows you to directly chat with this candidate over Whatsapp Web." id="action_5_3085718" onclick="callPhoneTag(this)">Send Whatsapp Message</a></li>   
            </ul> 
            <a href="#" className=" " rel="ver">Select<small className="dropArrow mt5 ml5"></small></a> 
            </div>  
            </div>  
           
            <p> 
            <small className="msg_gIc fl mt3"></small>  
            <span className="fl pl5 pb3 " id="emailIdForDisplay" title="email1593717605480@yopmail.com" data-highlight="email"> email1593717605480@yo ...   </span> 
            </p> 
            </div> 
            </div> 
            </div> 
            <p><em>Key Skills:</em>  <span>Not Mentioned</span>  </p>  
            <p>   </p>    
           
            <div className="inboxVerify pr4Imp">  
            <span><small className="viewIc mr3"></small> <strong> 0 </strong>Requirements</span>       
            <span><small className="eyeIc mt3"></small>  <strong>  1  </strong> </span>        
            <span>Applied On:<small> 3 Jul 20</small></span>
            <span>Active:<small> 3 Jul 20</small></span>
            <span>Modified:<small> 3 Jul 20</small></span>   
            </div>  
            </div> 
            
            </div>
        );
    }
}

export default Intro;