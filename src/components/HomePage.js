import React from 'react'
import "./HomePage.css";
import Girl from "../static/girl.jpg";
import GreenOne from "../static/greenone.jpg";
import WhiteOne from "../static/whiteone.jpg" 
import BlueOne from "../static/blueone.jpg";

const HomePage = () => {
  return (
    <div>
        <div className='flex w-[1440px] h-[864px] overflow-x-scrool'>

            <div>
                <img className='w-[720px] h-[864px]' src={Girl} alt='not found'/>
            </div>

            <div className='right-section w-[720px] h-[864px]'>
                <div className='ml-[120px] mt-[96px] mb-[92px]'>

                    <div className='textone w-[494px] h-[123px] mb-[12px] mr-[106px] font-[700px] text-[31.25px] leading-[130%] items-end'>
                        Everyday items, we have something to suit every occasion.
                    </div>

                    <div className='texttwo w-[432px] h-[52px] mb-[32px] mr-[168px] font-normal text-[16px] leading-[160%]'>
                        At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
                    </div>

                    <button className='textthree w-[146px h-[17px] mb-[5px] mr-[454px] font-black text-[12.8px] leading-[17px] items-center capitalize'>
                        Shop all everyday items
                    </button>

                    <button className='line w-[146px] h-[1px] mb-[68px] mr-[454px] block'>
                        
                    </button>

                    <div className='w-[906px] h-[363px] flex gap-x-[32px]'>
                        
                        <div className='w-[230px] h-[363px] mb-[92px]'>

                            <div className='w-[230px] h-[310px] mb-[12px]'>
                                <img className='w-[230px] h-[310px]' src={GreenOne} alt='not found'/>
                            </div>
                            <div className='productdescription w-[230px] h-[20px] mb-[4px] font-normal text-[12.8px] leading-[160%]'>365 Signature Hoodie</div>
                            <div className='flex gap-x-[118px]'>
                                <div className='price w-[40px] h-[20px] font-medium text-[12.8px] leading-[160%]'>€33.95</div>
                                <div className='flex gap-x-[8px]'>
                                    <div className='roundone w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundtwo w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundthree w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundfour w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                        <div className='w-[230px] h-[363px] mb-[92px]'>

                            <div className='w-[230px] h-[310px] mb-[12px]'>
                                <img className='w-[230px] h-[310px]' src={WhiteOne} alt='not found'/>
                            </div>
                            <div className='productdescription w-[230px] h-[20px] mb-[4px] font-normal text-[12.8px] leading-[160%]'>Organic Skinny High Waist Jeans</div>
                            <div className='flex gap-x-[118px]'>
                                <div className='price w-[40px] h-[20px] font-medium text-[12.8px] leading-[160%]'>€33.95</div>
                                <div className='flex gap-x-[8px]'>
                                    <div className='roundone w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundtwo w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundthree w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundfour w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                        <div className='w-[230px] h-[363px] mb-[92px]'>

                            <div className='w-[230px] h-[310px] mb-[12px]'>
                                <img className='w-[230px] h-[310px]' src={BlueOne} alt='not found'/>
                            </div>
                            <div className='productdescription w-[230px] h-[20px] mb-[4px] font-normal text-[12.8px] leading-[160%]'>Organic Skinny High Waist Jeans</div>
                            <div className='flex gap-x-[118px]'>
                                <div className='price w-[40px] h-[20px] font-medium text-[12.8px] leading-[160%]'>€33.95</div>
                                <div className='flex gap-x-[8px]'>
                                    <div className='roundone w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundtwo w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundthree w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
                                    <div className='roundfour w-[12px] h-[12px] mt-[4px] rounded-lg'></div>
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