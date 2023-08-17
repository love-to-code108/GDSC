import "./index.css"
import "../../indexOutput.css"

// IMPORTING TEAM MEMBERS IMAGES AND LOGOS
import githubLogo from "../assets/svg/githubDarkGrey.svg"
import linkedinLogo from "../assets/svg/linkedinDarkGrey.svg"
import teamMember from "../assets/jpg/linusTorvalds.jpg"

export const TeamSection = () => {



    return (
        <div id="TeamSection">


            <div>
                <p>TEAM</p>

                <p>PASSIONATE STUDENTS INSPIRING THE UPCOMING GENERATIONS</p>
            </div>


            {/* THE FIRST TEAM MEMBER CARD */}
            <div className="teamCard font-sora drop-shadow-lg">

                <div className="teamMemberPic drop-shadow-md">
                    <img className="teamMemberPicEdit" src={teamMember} alt="" />
                </div>

                <p className="membersName">LINUS TORVALDS</p>

                <p className="membersDesignamtion">Tech Lead</p>

                <p className="aboutMember">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  </p>


                {/* THE SOCIAL LINKS SECTION */}
                <div className="flex justify-end items-center socialsLogos">

                    {/* GITHUB ICON */}
                    <div className=" ml-4">
                        <img src={githubLogo} alt="" />
                    </div>

                    {/* LINKEDIN ICON */}
                    <div className=" ml-4">
                        <img src={linkedinLogo} alt="" />
                    </div>
                </div>




            </div>

        </div>
    );
}