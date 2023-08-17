import "./index.css"
import "../../indexOutput.css"

// IMPORTING IMAGES
// import gitStraightHeroBigLine from "../assets/svg/Line 1.svg"
import gdscLogoAnimation from "../assets/svg/google-developers-seeklogo.com.svg"
import githubLogo from "../assets/svg/github.svg"
import gitHead from "../assets/svg/Ellipse 1.svg"
import gitSmallLine from "../assets/svg/Line 23.svg"
import gitMediumLine from "../assets/svg/Line 24.svg"


// import { GitTag } from "./childComponents/gitTag"


// IMPORTING GSAP ANIMATION SOFTWARE    
// import { gsap } from "gsap";


// import { useEffect } from "react";






export const HeroSection = () => {



    // useEffect(() => {

    // })

    return (
        <div id="HeroSection_1_" className="flex flex-col items-center">

            <div className="font-poppins absolute GDSCbig">
                <p>GDSC</p>
            </div>


            <div className="relative 
            UEM flex justify-center items-center
            lg:right-[12rem] lg:top-[69%]" >


                <p className="font-sora text-[#C3C3C3] lg_UEM
                lg:text-[20rem] lg:font-black lg:absolute drop-shadow-lg">
                    UEM</p>


                <div className="absolute Jaipur
            flex justify-center items-center
            lg:right-[-11rem] bottom-[1.2rem]">

                    <p className="font-sora text-[#515151]
                lg:text-8xl lg:font-black lg:absolute drop-shadow-lg">
                        JAIPUR</p>
                </div>

                {/* THE GDSC LOGO GOES BELOW */}
                <div className="gdscLogoContainer">


                    <img className="" src={gdscLogoAnimation} alt="" />
                </div>



                <div>

                    <div className=" absolute 
                    lg:top-[-9.6rem] lg:right-[2rem] androidGif">


                        <iframe className="" src="https://giphy.com/embed/llarwdtFqG63IlqUR1">

                        </iframe>
                    </div>


                    <p className="font-poppins GoogleStudentDeveloperStudentClubs
                absolute
                lg:text-4xl lg:font-black lg:top-[-3rem] lg:left-[14rem]"
                    >Google Developer Student Clubs</p>

                </div>


                {/* THE JOIN BUTTON */}
                <div className="absolute bg-[#4385f3] text-white flex justify-center items-center  
                font-sora lg:font-black lg:text-5xl lg:w-[4em] lg:h-[1.4em] lg:pt-1 
                lg:top-[-15rem] lg:left-[4rem] drop-shadow-lg">
                    JOIN
                </div>




            </div>


            {/* THE VERY LONG SVG LINE */}

            <img id="LongSvgLine" className="absolute top-[64%] right-[6.9rem]" src={gitMediumLine} alt="" />







            {/* THE ECHO TAG */}
            <div id="gitTag" className=" absolute flex justify-evenly items-center font-jetbrain rounded-lg
        lg:px-8 lg:py-3 bg-white drop-shadow-lg lg:top-[4rem] lg:right-[5rem]"
            >

                <img className="
            lg:w-[2.4rem]" src={githubLogo} alt="" />
                <p className=" text-xl lg:ml-4">echo " LETS BUILD SOMETHING  "</p>

                {/* GIT HEAD */}
                <img className=" absolute
            lg:w-[2.5rem] lg:bottom-[-2.6rem] lg:right-[1rem]" src={gitHead} alt="" />

                {/* GIT LINE */}
                <img className=" absolute
            lg:top-[6.5rem] lg:right-[1.95rem] lg:w-[0.56rem]" src={gitSmallLine} alt="" />

                {/* GIT HEAD */}
                <img className=" absolute
            lg:w-[2.4rem] lg:bottom-[-9rem] lg:right-[1rem]" src={gitHead} alt="" />
            </div>






            {/* THE GIT BRANCH TAG */}
            <div id="gitTag" className=" absolute flex justify-evenly items-center font-jetbrain rounded-lg
        lg:px-8 lg:py-3 bg-white drop-shadow-lg lg:top-[17rem] lg:right-[5rem]"
            >

                <img className="
            lg:w-[2.4rem]" src={githubLogo} alt="" />
                <p className=" text-xl lg:ml-4">git branch GDSC</p>

                {/* GIT HEAD */}
                <img className=" absolute
            lg:w-[2.5rem] lg:bottom-[-2.6rem] lg:right-[1rem]" src={gitHead} alt="" />

                {/* GIT LINE */}
                <img className=" absolute
            lg:top-[6.5rem] lg:right-[1.9rem]" src={gitSmallLine} alt="" />

                {/* GIT HEAD */}
                <img className=" absolute
            lg:w-[2.4rem] lg:bottom-[-9.2rem] lg:right-[1rem]" src={gitHead} alt="" />

            </div>



            {/* THE GIT CHECKOUT TAG */}
            <div id="gitTag" className=" absolute flex justify-evenly items-center font-jetbrain rounded-lg
        lg:px-8 lg:py-3 bg-white drop-shadow-lg lg:top-[30.5rem] lg:right-[5rem]"
            >

                <img className="
            lg:w-[2.4rem]" src={githubLogo} alt="" />
                <p className=" text-xl lg:ml-4">git checkout GDSC</p>

                {/* GIT HEAD */}
                <img className=" absolute
            lg:w-[2.5rem] lg:bottom-[-2.6rem] lg:right-[1rem]" src={gitHead} alt="" />

                {/* GIT LINE */}
                <img className=" absolute
            lg:top-[6.5rem] lg:right-[1.9rem]" src={gitSmallLine} alt="" />

                

            </div>


        </div>
    );
}