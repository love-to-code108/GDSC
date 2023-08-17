import "./index.css"
import "../../indexOutput.css"

// IMPORTING ALL THE LOGOS AND STUFF
import instagram from "../assets/png/instagram.png"
import linkedin from "../assets/svg/linkedinDarkGrey.svg"
import github from "../assets/svg/githubDarkGrey.svg"




export const ContactUsSection = () => {



    return(
        <div id="contactUsSection" className="relative">


            <div className="font-poppins">
                <p className="letsConnect">LETS CONNECT</p>
            </div>

            <div className="flex socialsContainer">
                {/* THE LOGOS WILL GO HERE */}
                <img className="instagram socials" src={instagram} alt="" />
                <img className="linkedin socials" src={linkedin} alt="" />
                <img className="github socials" src={github} alt="" />
                

            </div>

            <p className=" absolute gdscMainConnect font-poppins">GDSC</p>


        </div>
    );
}