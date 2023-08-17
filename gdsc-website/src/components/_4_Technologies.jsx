import "./index.css"
import "../../indexOutput.css"


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
        </div>
    );
}