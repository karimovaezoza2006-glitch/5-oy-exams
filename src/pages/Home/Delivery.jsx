import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import delivery1 from "../../img/delivery1.svg";
import delivery2 from "../../img/delivery2.svg";
import delivery3 from "../../img/delivery3.svg";
import delivery4 from "../../img/delivery4.svg";

const Delivery = () => {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-4 sm:px-10 py-10">
        
        {/* responsive + aos qo‘shildi */}
        <div 
          className='flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-between gap-6'
          data-aos="fade-up"
        >
          <div className='flex items-center justify-between gap-3' data-aos="fade-up" data-aos-delay="100">
            <img src={delivery1} alt="" className='w-12 h-12' />
            <p className='font-light text-xl leading-[1.4] text-[#0c0c0c]'>Latest and Greatest Tech</p>
          </div>

          <div className='flex items-center justify-between gap-3' data-aos="fade-up" data-aos-delay="200">
            <img src={delivery2} alt="" className='w-12 h-12' />
            <p className='font-light text-xl leading-[1.4] text-[#0c0c0c]'>Guarantee</p>
          </div>

          <div className='flex items-center justify-between gap-3' data-aos="fade-up" data-aos-delay="300">
            <img src={delivery3} alt="" className='w-12 h-12' />
            <p className='font-light text-xl leading-[1.4] text-[#0c0c0c]'>Free Shipping over 1000$</p>
          </div>

          <div className='flex items-center justify-between gap-3' data-aos="fade-up" data-aos-delay="400">
            <img src={delivery4} alt="" className='w-12 h-12' />
            <p className='font-light text-xl leading-[1.4] text-[#0c0c0c]'>24/7 Support</p>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Delivery;
