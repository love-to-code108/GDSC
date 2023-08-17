import "./index.css"
import "../../indexOutput.css"

// IMPORTING THE ASSETS
import calander from "../assets/png/calendar (2).png"
import clock from "../assets/svg/icons8-clock.svg"
import eventPoster from "../assets/jpg/Events.jpg"



export const EventsSection = () => {



    return (
        <div id="EventSection">

            <div className="font-poppins TeamsHeadingWrapper EventsHeadingWrapper">
                <p className="headingTeams">EVENTS</p>

                <p className="subheadingTeams">LETS LEARN SHARE KNOWLEDGE AND CONNECT WITH EACH OTHER</p>

            </div>

            {/* THE EVENT CARDS */}

            <div className="teamMemberGrid">



                {/* EVENT CARD _1_ */}
                <div className="eventContainer font-sora text-white drop-shadow-lg">

                    <div>
                        <img className="eventImageEdit" src={eventPoster} alt="" />
                    </div>

                    <p className="eventCardName">UPCOMMING EVENT</p>


                    <div className="eventDetailsWrapper">
                        <div className="flex items-center justify-start dateWrapper">
                            <img className="calanderImgEdit icons" src={calander} alt="" />
                            <p className="eventDetails">Event Date:  9th
                                August 1945</p>
                        </div>



                        <div className="flex items-center justify-start timeWrapper">
                            <img className="clockImgEdit icons" src={clock} alt="" />
                            <p className="eventDetails">Time: 8:15 AM</p>
                        </div>

                    </div>
                </div>



                {/* EVENT CARD _2_ */}
                <div className="eventContainer font-sora text-white drop-shadow-lg">

                    <div>
                        <img className="eventImageEdit" src={eventPoster} alt="" />
                    </div>

                    <p className="eventCardName">UPCOMMING EVENT</p>


                    <div className="eventDetailsWrapper">
                        <div className="flex items-center justify-start dateWrapper">
                            <img className="calanderImgEdit icons" src={calander} alt="" />
                            <p className="eventDetails">Event Date:  9th
                                August 1945</p>
                        </div>



                        <div className="flex items-center justify-start timeWrapper">
                            <img className="clockImgEdit icons" src={clock} alt="" />
                            <p className="eventDetails">Time: 8:15 AM</p>
                        </div>

                    </div>
                </div>







                {/* EVENT CARD _3_ */}
                <div className="eventContainer font-sora text-white drop-shadow-lg">

                    <div>
                        <img className="eventImageEdit" src={eventPoster} alt="" />
                    </div>

                    <p className="eventCardName">UPCOMMING EVENT</p>


                    <div className="eventDetailsWrapper">
                        <div className="flex items-center justify-start dateWrapper">
                            <img className="calanderImgEdit icons" src={calander} alt="" />
                            <p className="eventDetails">Event Date:  9th
                                August 1945</p>
                        </div>



                        <div className="flex items-center justify-start timeWrapper">
                            <img className="clockImgEdit icons" src={clock} alt="" />
                            <p className="eventDetails">Time: 8:15 AM</p>
                        </div>

                    </div>
                </div>






            </div>






        </div>
    );
}