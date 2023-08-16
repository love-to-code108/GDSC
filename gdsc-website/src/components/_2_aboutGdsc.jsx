import "./index.css"
import "../../indexOutput.css"

// IMPORTING THE LINES AND GIT HEADS
import gitHead from "../assets/svg/Ellipse 1.svg"
import gitSmallLine from "../assets/svg/Line 23.svg"
import gitMediumLine from "../assets/svg/Line 24.svg"



export const AboutSection = () => {


    return (
        <div id="AboutSection" className="relative">

            {/* THE GIT LINES JOINING ALL THE CARDS */}
            <div>


                <img className="lineMedium1" src={gitMediumLine} alt="" />
                <img className="lineHead1" src={gitHead} alt="" />
                <img className="lineSmall1" src={gitSmallLine} alt="" />
                <img className="lineSmall1 lineSmall1-1" src={gitSmallLine} alt="" />
                <img className="lineSmall1 lineSmall1-2" src={gitSmallLine} alt="" />




                <img className="lineHead2" src={gitHead} alt="" />
                <img className="lineHead2" src={gitHead} alt="" />
                <img className="lineHead2" src={gitHead} alt="" />

                <img className="lineMedium2" src={gitMediumLine} alt="" />

                <img className="lineSmall2" src={gitSmallLine} alt="" />
                <img className="lineSmall2 lineSmall2-1" src={gitSmallLine} alt="" />
            </div>



            {/*THE CARD  1 */}
            <div className="card1 card flex flex-col absolute">
                <p className="conceptOfGdsc font-sora text-white">Concept Of GDSC</p>


                <p className="card1Para font-sora text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eius itaque eum repellat dolores, qui eaque sequi doloremque sapiente! Itaque vero aspernatur soluta quisquam odit eveniet accusantium rem voluptatem voluptatum, ex asperiores voluptatibus et. Tenetur officia quae nam. Dolore, error! Distinctio nihil rem velit ad sit facere aliquam! Nulla, perferendis?</p>

                <p className=" absolute gdscMain font-poppins">GDSC</p>
            </div>


            {/* THE CARD 2 */}
            <div className="card2 card flex flex-col absolute">
                <p className="conceptOfGdsc font-sora text-white">Why GDSC?</p>


                <p className="card1Para font-sora text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eius itaque eum repellat dolores, qui eaque sequi doloremque sapiente! Itaque vero aspernatur soluta quisquam odit eveniet accusantium rem voluptatem voluptatum, ex asperiores voluptatibus et. Tenetur officia quae nam. Dolore, error! Distinctio nihil rem velit ad sit facere aliquam! Nulla, perferendis?</p>

                <p className=" absolute gdscMain font-poppins">GDSC</p>
            </div>



            {/* THE CARD 3 */}
            <div className="card3 card flex flex-col absolute">
                <p className="conceptOfGdsc font-sora text-white">Target Audience</p>


                <p className="card1Para font-sora text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eius itaque eum repellat dolores, qui eaque sequi doloremque sapiente! Itaque vero aspernatur soluta quisquam odit eveniet accusantium rem voluptatem voluptatum, ex asperiores voluptatibus et. Tenetur officia quae nam. Dolore, error! Distinctio nihil rem velit ad sit facere aliquam! Nulla, perferendis?</p>

                <p className=" absolute gdscMain font-poppins">GDSC</p>
            </div>


        </div>
    );
}