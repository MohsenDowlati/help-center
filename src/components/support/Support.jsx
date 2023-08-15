import './support.css';
import {FaStarOfLife} from 'react-icons/fa'
import {BiHelpCircle} from 'react-icons/bi'
import {useRef} from "react";
import {useIsVisible} from "./observer";
const Label = ({text}) => (
    <div className={"label"}>
        <FaStarOfLife style={{marginTop:'0.6rem'}}/> <p>{text}</p>
    </div>
)

const Support = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const isVisible1 = useIsVisible(ref1);
    const isVisible2 = useIsVisible(ref2);
    const isVisible3 = useIsVisible(ref3);
    return(
        <div className={"abstract_support .section_padding"}>
            <div className={"abstract_support_left"}>
                <Label text={"Support hours are Monday-Friday 05:00-18:00 Pacific Time. We observe all U.S. holidays."}/>
                <p className={"abstract_support_signIn"}>Unable to sign in? <span>Reach us here.</span></p>
                <div id={'contact-support'} className={"abstract_support_contact"}>
                    <h1 ref={ref1}>Contact support</h1>
                    <p><ol>
                        <li>While signed in to Abstract, select the <BiHelpCircle/> icon. <ul>
                            <li>If you're in the Abstract web app, the <BiHelpCircle/> icon is in the lower left corner.</li>
                            <li>If you're in the Abstract Desktop app, the <BiHelpCircle/> icon  is in the upper right corner.</li>
                        </ul></li>
                        <li>Select <span>Contact Support.</span> </li>
                        <li>On the Contact Support page, choose the <span>Topic</span> you want to contact Support about, write a <span>Subject</span> for your message, and enter a <span>Description</span> of your issue.</li>
                        <li>If you have files you want to give Support, such as bug reports or screenshots, click <span>Browse files...</span> and choose them from your computer.</li>
                        <li>When you're done, click <span>Send to Support</span>.</li>
                    </ol></p>
                </div>
                <div id={'ask-questions-about-subscriptions-and-billing'} className={"abstract_support_ask"}>
                    <h1 ref={ref2}>Ask questions about subscriptions and billing</h1>
                    <Label text={'Admins can manage and update billing information on behalf of their Organization directly from the web app, including adding more contributor seats, managing billing details, and locating invoices.'}/>
                    <p>
                        For security purposes, Support can only assist with billing matters if you are an admin <span>or</span> can provide credit card information to verify your identity. If you want to use card information to verify your identity, you need to provide:
                        <ul>
                            <li>The name on the credit card on file</li>
                            <li>The last four digits of the card number</li>
                            <li>The card expiration date</li>
                            <li>A screenshot of the last charge that Abstract made to the card</li>
                        </ul>
                        f you aren't an admin and can't provide the card information mentioned above, locate your admin within the web or desktop application. Have this person contact Support with your questions.
                    </p>
                </div>
                <div id={'makes-a-sales-inquiry'} className={'abstract_support_inquiry'}>
                    <h1 ref={ref3}>Make a sales inquiry</h1>
                    <p>
                        Are you a software reseller? Please get in touch with our Sales Team.
                        <br/><br/>
                        If you're part of an Enterprise plan and want to discuss an upcoming renewal, please contact your customer success manager directly.
                    </p>
                </div>
            </div>
            <div className={'abstract_support_right'}>
                <div className={'abstract_support_float'}>
                    <p className={isVisible1?'isActive':''}><a href={'#contact-support'}>Contact support</a></p>
                    <p className={isVisible2?'isActive':''}><a href={'#ask-questions-about-subscriptions-and-billing'}>Ask questions about subscriptions and billing</a></p>
                    <p className={isVisible3?'isActive':''}><a href={'#makes-a-sales-inquiry'}>Make a sales inquiry</a></p>
                </div>
            </div>
        </div>
    );
}

export default Support;