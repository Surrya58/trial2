import React, { Component } from 'react';

let dialogStyles = {
    width: '550px',
    height: '250px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#fff',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',

};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

let dialogContent1 = {
    border: '1px solid #e9e9e9',
}

let dialogContent2 = {
    fontSize: '13px',
    lineHeight: '19px',
    wordWrap: 'break-word'
}


class Dialog extends Component {
    render() {
        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>

                <table style={dialogContent1} width="100%" cellspacing="0" cellpadding="15">  <tbody><tr> <td> Microsoft </td> </tr>  <tr> <td id="m_-8693798704384470617mailBodyData" style={dialogContent2}> Dear Ram, <br/><br/>An interview is being scheduled for testing bate1                 <ul>                 <li>Interview On: 11th July 2020</li>                 <li>Location: At your desk
</li>                 <li>Interview Type: Video interview </li>                            <li>Duration: 1 hour(s) and 0 mins</li><br/><br/>                 ------------------------------------------------------------------------------------------------<br/>                 Join interview on - RMS WebRTC App <br/><a href={this.props.children} target="_blank">{this.props.children}</a>             
		<br/>------------------------------------------------------------------------------------------------<br/>                 </ul><br/><br/>                 Please find the candidates details attached with the mail.<br/><br/>                 Thanks and Regards <br/>                
<a href="mailto:surrya@naukri.com" target="_blank">surrya.@naukri.com</a> </td>   </tr>  </tbody></table>
                <div>{this.props.children}</div>
            </div>
        );

        if (! this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Dialog;
