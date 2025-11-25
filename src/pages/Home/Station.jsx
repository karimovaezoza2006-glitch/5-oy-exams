import React from 'react'
import bgImg from "../../img/bacraund1.png"
import station1 from "../../img/station1.png"
import station2 from "../../img/station2.png"
import station3 from "../../img/station3.png"
import banner from "../../img/banner.png"

const Station = () => {
  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-4 sm:px-10 py-10">
       <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>

{/* ----- CARD 1 ----- */}
<div
  className="w-full lg:w-[756px] h-[420px] rounded-lg"
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  data-aos="fade-right"
>
  <div className='flex flex-col md:flex-row items-center justify-between'>
    <div className='p-7'>
      <h3 className='font-medium text-2xl text-center text-[#0c0c0c]'>
        Iphone <span className='text-white'>15 Series</span>
      </h3>
      <img src={station1} className='w-[300px] md:w-[378px] h-[282px]' />
    </div>

    <div className='px-6'>
      <img src={station2} />
      <h4 className='font-medium text-xl text-center text-[#0c0c0c] py-5'>
        It feels good to be the first
      </h4>
      <p className='font-light text-base leading-normal text-[#2d2d2d] py-3'>
        Get ready for the future of smartphones. Experience innovation like 
        never before. Stay tuned for the big iPhone 15 pre-sale.
      </p>
      <button className='w-[134px] h-12 font-normal text-base text-center text-white px-4 py-2 rounded-lg bg-[#0c68f4]'>
        Register Now
      </button>
    </div>
  </div>
</div>

{/* ----- CARD 2 ----- */}
<div
  className="w-full lg:w-[480px] h-[420px] rounded-lg"
  style={{
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  data-aos="fade-left"
>
  <div className='flex items-center justify-between'>
    <div className='p-7'>
      <h3 className='font-medium text-2xl text-[#fcc870] text-center px-[50px] md:px-[200px] py-7'>
        Play Station 5
      </h3>

      <div className='flex items-center justify-center gap-5'>
        <div>
          <h5 className='font-medium text-xl text-[#005690] '>
            Digital Edition + 2TB
          </h5>
        </div>
        <div>
          <img src={station3} />
        </div>
      </div>

      <button className='w-[134px] h-12 font-normal text-base text-center text-white px-4 py-2 rounded-lg bg-[#0c68f4]'>
        Buy Now
      </button>
    </div>
  </div>
</div>

       </div>
      </section>
    </div>
  )
}

export default Station
