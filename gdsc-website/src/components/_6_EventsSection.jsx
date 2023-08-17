import "./index.css"
import "../../indexOutput.css"

// IMPORTING THE ASSETS
import calander from "../assets/"

import eventPoster from "../assets/jpg/"



export const EventsSection = () => {



    return (
        <div id="EventSection">

            <div>


                <p>EVENTS</p>

                <p>LETS LEARN SHARE KNOWLEDGE AND CONNECT WITH EACH OTHER</p>

            </div>

            {/* THE EVENT CARDS */}

            <div>
                {/* EVENT CARD _1_ */}
                <div>

                    <div>
                        <img src={} alt="" />
                    </div>

                    <p>UPCOMMING EVENT NAME</p>

                    <div>
                        <img src={} alt="" />
                        <p>Event Date:  9th
                            August 1945</p>
                    </div>



                    <div>
                        <img src={} alt="" />
                        <p>Time: 8:15 AM</p>
                    </div>


                    
                </div>
            </div>
        </div>
    );
}