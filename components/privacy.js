import React, { Component } from 'react'
import Navbar from '../components/headbar'
import Credit from '../components/credit'
import '../style/home.scss';

class Privacy extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div>
            <Navbar/>
              <div className="privacypolicy" >
                <h1>Privacy Policy for SharePro</h1>

                <p>At SharePro, accessible from superder.me, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SharePro and how we use it.</p>
 
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            
                <h2>Log Files</h2>
            
                <p>SharePro follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            
                <h2>Privacy Policies</h2>
            
           
                <p>Note that SharePro has no access to or control over these cookies that are used by third-party advertisers.</p>
            
                <h2>Third Party Privacy Policies</h2>
            
                <p>SharePro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
            
                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
            
                <h2>Children's Information</h2>
            
                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            
                <p>SharePro does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
            
                <h2>Online Privacy Policy Only</h2>
            
                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in SharePro. This policy is not applicable to any information collected offline or via channels other than this website.</p>
            
                <h2>Consent</h2>
            
               
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </div>
                <Credit/>
            </div>
        )

    }
}
export default Privacy
