import React from 'react'
import "./HomePage.css";
import Girl from "../static/girl.jpg";
import GreenOne from "../static/greenone.jpg";
import WhiteOne from "../static/whiteone.jpg" 
import BlueOne from "../static/blueone.jpg";

const HomePage = () => {
  return (
    <div>
        <div className='flex w-[1440px] h-[864px]'>

            <div className='w-[720px] h-[864px]'>
                <img className='w-[720px] h-[864px]' src={Girl} alt='not found'/>
            </div>

            <div className='right-section w-[720px] h-[864px] border-box'>
                <div className='ml-[120px] mt-[96px] mb-[92px]'>

                    <div className='textone w-[494px] h-[123px] mb-[12px] font-bold text-[31.25px] leading-[130%] items-end'>
                        Everyday items, we have something to suit every occasion.
                    </div>

                    <div className='texttwo w-[432px] h-[52px] mb-[32px] font-normal text-[16px] leading-[160%]'>
                        At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
                    </div>

                    <div className='textthree w-[146px h-[17px] mb-[5px] font-black text-[12.8px] leading-[17px] items-center capitalize'>
                        Shop all everyday items
                    </div>

                    <div className='line w-[146px] h-[1px] mb-[68px]'>
                        
                    </div>

                    <div>
                        
                        <div>
                            <div>
                                <img src={GreenOne} alt='not found'/>
                            </div>
                            <div>365 Signature Hoodie</div>
                            <div>
                                <div>€33.95</div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default HomePage