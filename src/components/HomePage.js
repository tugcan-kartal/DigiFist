import React from 'react'
import "./HomePage.css";
import Girl from "../static/girl.jpg";
import GreenOne from "../static/greenone.jpg";
import WhiteOne from "../static/whiteone.jpg" 
import BlueOne from "../static/blueone.jpg";

const HomePage = () => {
  return (
    <div>
        <div className='flex sm:flex-row flex-col sm:w-[1440px] w-[360px] sm:h-[864px] h-[754px] overflow-x-hidden'>

            <div>
                <img className='sm:w-[720px] w-[360px] sm:h-[864px] h-[437px]' src={Girl} alt='not found'/>
            </div>

            <div className='right-section sm:w-[720px] sm:h-[864px]'>

                <div className='sm:ml-[120px] sm:mt-[96px] sm:mb-[92px]'>

                    <div className='textone sm:w-[494px] sm:h-[123px] sm:mb-[12px] sm:mr-[106px] sm:font-[700px] sm:text-[31.25px] sm:leading-[130%] sm:items-end'>
                        Everyday items, we have something to suit every occasion.
                    </div>

                    <div className='texttwo sm:w-[432px] sm:h-[52px] sm:mb-[32px] sm:mr-[168px] sm:font-normal sm:text-[16px] sm:leading-[160%]'>
                        At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
                    </div>

                    <button className='textthree sm:w-[146px] sm:h-[17px] sm:mb-[5px] sm:mr-[454px] sm:font-black sm:text-[12.8px] sm:leading-[17px] sm:items-center sm:capitalize'>
                        Shop all everyday items
                    </button>

                    <button className='line sm:w-[146px] sm:h-[1px] sm:mb-[68px] sm:mr-[454px] block'>
                        
                    </button>

                    <div className='sm:w-[906px] sm:h-[363px] flex sm:gap-x-[32px]'>
                        
                        <div className='sm:w-[230px] sm:h-[363px] sm:mb-[92px]'>

                            <div className='sm:w-[230px] sm:h-[310px] sm:mb-[12px]'>
                                <img className='sm:w-[230px] sm:h-[310px]' src={GreenOne} alt='not found'/>
                            </div>
                            <div className='productdescription sm:w-[230px] sm:h-[20px] sm:mb-[4px] sm:font-normal sm:text-[12.8px] sm:leading-[160%]'>365 Signature Hoodie</div>
                            <div className='flex sm:gap-x-[118px]'>
                                <div className='price sm:w-[40px] sm:h-[20px] sm:font-medium sm:text-[12.8px] sm:leading-[160%]'>€33.95</div>
                                <div className='flex sm:gap-x-[8px]'>
                                    <div className='roundone sm:w-[12px] sm:h-[12px] sm:mt-[4px] sm:rounded-lg'></div>
                                    <div className='roundtwo sm:w-[12px] sm:h-[12px] sm:mt-[4px] sm:rounded-lg'></div>
                                    <div className='roundthree sm:w-[12px] sm:h-[12px] sm:mt-[4px] sm:rounded-lg'></div>
                                    <div className='roundfour sm:w-[12px] sm:h-[12px] sm:mt-[4px] sm:rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                        <div className='sm:w-[230px] sm:h-[363px] sm:mb-[92px]'>

                            <div className='sm:w-[230px] sm:h-[310px] sm:mb-[12px]'>
                                <img className='sm:w-[230px] sm:h-[310px]' src={WhiteOne} alt='not found'/>
                            </div>
                            <div className='productdescription sm:w-[230px] sm:h-[20px] sm:mb-[4px] sm:font-normal sm:text-[12.8px] sm:leading-[160%]'>Organic Skinny High Waist Jeans</div>
                            <div className='flex sm:gap-x-[118px]'>
                                <div className='price sm:w-[40px] sm:h-[20px] sm:font-medium sm:text-[12.8px] sm:leading-[160%]'>€33.95</div>
                                <div className='flex sm:gap-x-[8px]'>
                                    <div className='roundone sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                    <div className='roundtwo sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                    <div className='roundthree sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                    <div className='roundfour sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                        <div className='sm:w-[230px] sm:h-[363px] sm:mb-[92px]'>

                            <div className='sm:w-[230px] sm:h-[310px] sm:mb-[12px]'>
                                <img className='sm:w-[230px] sm:h-[310px]' src={BlueOne} alt='not found'/>
                            </div>
                            <div className='productdescription sm:w-[230px] sm:h-[20px] sm:mb-[4px] sm:font-normal sm:text-[12.8px] sm:leading-[160%]'>Organic Skinny High Waist Jeans</div>
                            <div className='flex sm:gap-x-[118px]'>
                                <div className='price sm:w-[40px] sm:h-[20px] sm:font-medium sm:text-[12.8px] sm:leading-[160%]'>€33.95</div>
                                <div className='flex sm:gap-x-[8px]'>
                                    <div className='roundone sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                    <div className='roundtwo sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                    <div className='roundthree sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
                                    <div className='roundfour sm:w-[12px] sm:h-[12px] sm:mt-[4px] rounded-lg'></div>
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