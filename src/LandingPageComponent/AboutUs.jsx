import person1 from '../assets/author1.jpg'
import person2 from '../assets/testi2.jpg'
import person3 from '../assets/testi3.jpg'
import heart from '../assets/svg10.svg'
import heart1 from '../assets/svg11.svg'
const AboutUs = () => {
    return (
        <div className="py-6 mb-10">
            <div className="text-center mb-10 ">
                <div className="testi-heading mb-3 flex space-x-3 justify-center mx-auto ">
                  <img src={heart} alt="svg" />
                  <span>Testimonials</span>
                  <img src={heart1} alt="svg" />
                </div>
                <h1 className="text-2xl font-bold ">What Happy Client Say About Us ?</h1>
               
            </div>
            <div className="flex mt-6 justify-center gap-6 ">
                <div className="w-[310px] border-2 border-gray-500 px-4 py-4 text-center h-fit rounded-3xl">
                    <img src={person1} alt="" className='w-20 h-20 rounded-full mx-auto' />
                    <h2 className='font-semibold mb-2 mt-4 capitalize'>john doe</h2>
                    <span>HR, Envato</span>
                    <p className='mt-6'> Operational podcasting change management inside of
                            workflows to establish a framework . Keeping your
                            eye on the ball while performing a deep dive on the
                            start-up mentality. Taking seamless key performance
                            indicators offline to maximize the long tail.</p>
                </div>
                <div className="w-60 border-2 border-gray-500 px-4 py-4 text-center rounded-3xl">
                <img src={person2} alt="" className='w-20 h-20 rounded-full mx-auto' />
                    <h2 className='font-semibold mb-2 mt-4 capitalize'>lisa micheal</h2>
                    <span>banker</span>
                    <p className='mt-6'> Operational podcasting change management inside of
                            workflows to establish a framework . Keeping your
                            eye on the ball while performing a deep dive on the
                            start-up mentality. Taking seamless key performance
                            indicators offline to maximize the long tail.</p>
                </div>
                <div className="w-[310px] border-2 border-gray-500 px-4 py-4 text-center h-fit rounded-3xl">
                <img src={person3} alt="" className='w-20 h-20 rounded-full mx-auto' />
                    <h2 className='font-semibold mb-2 mt-4 capitalize'>ray green</h2>
                    <span>researcher</span>
                    <p className='mt-6'> Operational podcasting change management inside of
                            workflows to establish a framework . Keeping your
                            eye on the ball while performing a deep dive on the
                            start-up mentality. Taking seamless key performance
                            indicators offline to maximize the long tail.</p>
                </div>
            </div>
        </div>
      );
}
 
export default AboutUs;