import "./index.css"
import "../../indexOutput.css"

// THE GITHUB RELATED ASSETS
import githubLogo from "../assets/svg/github.svg"
import gitHead from "../assets/svg/Ellipse 1.svg"
import gitSmallLine from "../assets/svg/Line 23.svg"
// import gitMediumLine from "../assets/svg/Line 24.svg"


export const TechnologiesWeAreExitedAbout = () => {



    return (

        <div id="TechnologiesWeAreExitedAbout" className="
        flex flex-col items-end">



            {/* THE HEADING SECTION */}
            <div className="relative mr-12">
                <p className="TechnologiesHeading font-poppins">TECHNOLOGIES</p>

                <p className="TechnologiesSubHeading font-poppins">WE ARE <span className=" bg-[#363636] text-white px-2">EXITED</span> ABOUT</p>
            </div>







            {/* THE TECHNOLOGIES SECTION */}


            {/* ANDROID DEVELOPMENT   _1_ */}
            <div className="_technologiesCardDiv font-poppins">
                <p className=" text-5xl mb-6">Android Development</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent tristique. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
            </div>



            {/* WEB DEVELOPMENT _2_ */}
            <div className="_technologiesCardDiv font-poppins">
                <p className=" text-5xl mb-6">Web Development</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent tristique. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
            </div>


            {/* CLOUD COMPUTING _3_ */}
            <div className="_technologiesCardDiv font-poppins">
                <p className=" text-5xl mb-6">Cloud Computing</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent tristique. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
            </div>


            {/* MACHINE INTELLEGIENCE _4_ */}
            <div className="_technologiesCardDiv font-poppins">
                <p className=" text-5xl mb-6">Machine Intelligence</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent tristique. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.
                </p>
            </div>



            {/* THE GIT ADD . TAG */}
            <div id="gitTag" className=" absolute flex justify-evenly items-center font-jetbrain rounded-lg
        lg:px-8 lg:py-3 bg-white drop-shadow-lg lg:top-[17rem] lg:right-[5rem]"
            >

                <img className="
            lg:w-[2.4rem]" src={githubLogo} alt="" />
                <p className=" text-xl lg:ml-4">git add .</p>

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




            {/* THE GIT COMMIT  TAG */}
            <div id="gitTag" className=" absolute flex justify-evenly items-center font-jetbrain rounded-lg
        lg:px-8 lg:py-3 bg-white drop-shadow-lg lg:top-[17rem] lg:right-[5rem]"
            >

                <img className="
            lg:w-[2.4rem]" src={githubLogo} alt="" />
                <p className=" text-xl lg:ml-4">git commit -m " Trying To Be Great At Something "</p>

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


            {/* THE GIT PUSH  TAG */}
            <div id="gitTag" className=" absolute flex justify-evenly items-center font-jetbrain rounded-lg
        lg:px-8 lg:py-3 bg-white drop-shadow-lg lg:top-[17rem] lg:right-[5rem]"
            >

                <img className="
            lg:w-[2.4rem]" src={githubLogo} alt="" />
                <p className=" text-xl lg:ml-4">git push origin GDSC</p>

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
        </div>
    );
}