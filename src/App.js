
import './App.css';

import React, { useState, useEffect } from 'react';
import Event1 from './img/event1.png';
import Event2 from './img/event2.png';

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  // Event date (25th October 2024)
  const eventDate = new Date('October 25, 2024 10:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Calculate remaining days, hours, minutes, seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with new time
      setTimeLeft({ days, hours, minutes, seconds });

      // Stop countdown when the event date is reached
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [eventDate]);


  return (
   <>
   <div  className=' '>
   <div className='p-12 bg-image  '>
      <div className="bg-black opacity-75 shadow-lg shadow-cyan-500 p-5 text-white">

        <h1 className="text-5x2 font-extrabold">
          <span className="text-xl text-cyan-400">
            Upcoming Events
          </span>
        </h1>

        <p className="leading-9 mt-2">
          <div className="text-base text-orange-400">
          Stay informed about our important events. Mark your calendars and don't miss out!          </div>
        </p>
         {/* Event Date and Time */}
         <div className="mt-3">
          <h2 className="text-lg text-yellow-400">
            Event Date: 25th October 2024 | Time: 10:00 AM - 5:00 PM
          </h2>
        </div>
         {/* Countdown Timer */}
         <div className="mt-4 text-lg text-red-500">
          <h3>Countdown to the event:</h3>
          {timeLeft.days !== undefined ? (
            <p>{timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>


        {/* <hr className="w-full my-4 border-gray-600"> */}
        <p className="leading-7   mt-3 border border-b-gray-900 border-t-gray-600">
          <div className="font-sans px-4 mt-2">
          Join us for an exciting day filled with informative sessions, interactive activities, and 
          networking opportunities. Get insights from industry experts,
           enjoy great food, and connect with fellow enthusiasts.
     
          </div>
        </p>

        <img src={Event1} alt='image2' className="my-4 mx-auto" />
        <h1 className="text-lg">
          <span className="text-5x2 font-bold text-gray-500">
            Photo Gallery
          </span>
        </h1>
        <h2 className="text-lg mt-1 text-yellow-400">
          Free Entry | Free Food | Pets Are Not Allowed
        </h2>
        <p className="px-4 mt-3 border border-b-gray-900 border-t-gray-600 ">
        <div className="font-sans px-4 mt-2">
        Discover more about the upcoming event and see highlights from past events in our gallery.
         Our aim is to create memorable experiences for everyone attending.
      
        </div>
        </p>

        <img src={Event2} alt='image1' className="my-4 mx-auto"/>

          <h1 className="justify-center">
            <a className="text-lg" href="https://www.myntra.com/"><span
              className="font-bold text-pink-600 hover:text-pink-500 underline   ">Fashion Store</span>
            </a>
          </h1>
          <h2 className="text-lg mt-2 text-yellow-400">
            Free Entry | Free Food | Pets Are Not Allowed
          </h2>

          <p className="px-4 mt-3 border border-b-gray-900 border-t-gray-600 ">
          <div className="font-sans px-4 mt-2">
          Don’t forget to check out our exclusive fashion store partnership. Shop your favorite styles and 
          enjoy special discounts during the event.
  
 
            </div>
              </p>


            <h1 className="text-lg mt-5 font-bold text-5x7 text-green-400">
              Content
            </h1>
            <h2 className="mt-2">
              +91 6790543478 <span className="text-extrabold text-gray-500">|</span>  chan123@gmail.com
            </h2>
            <p className="mt-1">
              9th street Avenue park, Chennai, 620023
            </p>
          </div>
          </div>
          </div>
        

        </>
        );
}

        export default App;
