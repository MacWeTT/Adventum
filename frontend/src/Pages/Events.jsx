import React from 'react'
import { Link } from 'react-router-dom'
import eventsdummy from '../Assets/eventdummy.png'

const Events = () => {
  const events = [
    {"id": 1,
     "name": "EventName1",
     "image": "..\\Assets\\eventdummy.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur",
    },
    {"id": 2,
      "name": "EventName2",
      "image": "..\\Assets\\eventdummy.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur",
    },
    {"id": 3,
      "name": "EventName3",
      "image": "..\\public\\eventdummy.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur",
    },
    {"id": 4,
      "name": "EventName4",
      "image": "..\\public\\eventdummy.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur",
    },
    {"id": 5,
      "name": "EventName5",
      "image": "..\\public\\eventdummy.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur",
    },
  ]
  return (
    <section className="events bg-primary">
        <div className="eventsHeader flex items-center justify-center w-full border-y-2 border-secondary">
          <h1 className='font-bold text-3xl text-secondary py-2 md:py-6'>Events</h1>
        </div>
        
     
        <div>
        {events.map((event) => {
          if (event.id % 2 === 0) {
            return (
              <div>
              <div key={event.id} className="eventsBody flex justify-center items-center">
                <div className="eventsName font-bold md:text-2xl text-secondary rotate-[-90deg]">
                  {event.name}
                </div>
                <div className="eventsLayout md:flex">
                  <div className="eventsImage border-l-2  border-secondary border-b-2 md:border-b-0">
                    <img src={eventsdummy} alt="Event Image" />
                  </div>
                  <div className="eventsDescription border-l-2 border-secondary flex gap-2 p-4 md:gap-10 md:p-12 flex-col justify-center items-center">
                    <h1 className="font-bold text-2xl text-secondary">Event Description</h1>
                    <p className="font-normal text-base text-secondary">{event.description}</p>
                    <div className="eventsButton">
                      <Link to="/events" className="font-bold text-base text-secondary">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="eventsDivider border-y-2 h-12 border-secondary"></div>
              </div>
            );
          }
          
          
           else {
            return (
              <div>
              <div key={event.id} className="eventsBody flex justify-center items-center">
                
                <div className="eventsLayout md:flex">
                  
                  <div className="eventsDescription border-r-2 border-secondary flex gap-2 p-4 md:gap-10 md:p-12 flex-col justify-center items-center">
                    <h1 className="font-bold text-2xl text-secondary">Event Description</h1>
                    <p className="font-normal text-base text-secondary">{event.description}</p>
                    <div className="eventsButton">
                      <Link to="/events" className="font-bold text-base text-secondary">
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="eventsImage border-r-2  border-secondary border-b-2 md:border-b-0">
                    <img src={eventsdummy} alt="Event Image" />
                  </div>
                </div>
                <div className="eventsName font-bold md:text-2xl text-secondary rotate-[-90deg]">
                  {event.name}
                </div>
              </div>
              <div className="eventsDivider border-y-2 h-12 border-secondary"></div>
              </div>
            ) 
          }
        })}
      </div>

    </section>
  )
}

export default Events