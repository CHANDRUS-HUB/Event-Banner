
import './App.css';
import React from 'react';
import Event1 from './img/event1.png';
import Event2 from './img/event2.png';


function App() {

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
            Don't Miss Any Of Important Events Stay Updated
          </div>
        </p>

        {/* <hr className="w-full my-4 border-gray-600"> */}
        <p className="leading-7   mt-3 border border-b-gray-900 border-t-gray-600">
          <div className="font-sans px-4 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, sed ex vero eaque necessitatibus
            error suscipit veritatis ducimus. Suscipit sint consequatur sit nemo eum! Aut debitis labore fuga
            quisquam facilis in nihil doloremque unde similique, laudantium ab? Saepe dicta veritatis quia, a
            obcaecati accusantium amet nobis temporibus quas commodi harum ipsa, accusamus corrupti! Voluptas eum id
            quibusdam voluptatum odio ad ut, assumenda hic reiciendis incidunt cumque corporis autem quis vero quod
            velit maxime optio. Maiores, illum! In, fugiat quasi reiciendis illum, voluptates repudiandae animi
            consequuntur et fugit atque id? Doloribus consectetur blanditiis mollitia quis officiis optio eaque,
            incidunt veniam a.
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere laborum mollitia sequi ex quis accusantium
          officiis repellendus neque? Quia cupiditate placeat corrupti laboriosam aperiam totam nulla, illo,
          asperiores ea, officiis vitae iste magnam voluptatibus nisi? Impedit provident nisi suscipit voluptatibus
          deleniti perspiciatis, esse architecto dolores inventore doloremque quam atque neque.
        </div>
        </p>

        <img src={Event2} alt='image1' className="my-4 mx-auto"/>

          <h1>
            <a className="text-lg" href="https://www.myntra.com/"><span
              className="font-bold text-pink-600 hover:text-pink-500 underline ">Fashion Store</span>
            </a>
          </h1>
          <h2 className="text-lg mt-2 text-yellow-400">
            Free Entry | Free Food | Pets Are Not Allowed
          </h2>

          <p className="px-4 mt-3 border border-b-gray-900 border-t-gray-600 ">
          <div className="font-sans px-4 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere laborum mollitia sequi ex quis accusantium
            officiis repellendus neque? Quia cupiditate placeat corrupti laboriosam aperiam totam nulla, illo,
            asperiores ea, officiis vitae iste magnam voluptatibus nisi? Impedit provident nisi suscipit voluptatibus
            deleniti perspiciatis, esse architecto dolores inventore doloremque quam atque neque.
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
