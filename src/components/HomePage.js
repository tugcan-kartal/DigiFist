import React from 'react'
import "./HomePage.css";
import Girl from "../static/girl.jpg";
import GreenOne from "../static/greenone.jpg";
import WhiteOne from "../static/whiteone.jpg" 
import BlueOne from "../static/blueone.jpg";
import {AiOutlineRight} from "react-icons/ai"

const HomePage = () => {
  return (
    <div>
        <div className='flex sm:flex-row flex-col sm:w-[1440px] w-[360px] sm:h-[864px] h-[754px] overflow-x-hidden'>

            <div>
                <img className='sm:w-[720px] w-[360px] sm:h-[864px] h-[437px]' src={Girl} alt='not found'/>
            </div>

            <div className='right-section sm:w-[720px] w-[360px] sm:h-[864px] h-[441px] sm:static absolute top-[248px] left-[24px]'>

                <div className='sm:ml-[120px] sm:mt-[96px] sm:mb-[92px]'>

                    <div className='textone sm:w-[494px] w-[312px] sm:h-[123px] h-[78px] sm:mb-[12px] mb-[16px] sm:mr-[106px] sm:font-[700px] font-[700px] sm:text-[31.25px] text-[20px] sm:leading-[130%] leading-[130%] sm:items-end sm:text-boldblack text-lightwhite'>
                        Everyday <span className='sm:inline hidden'>items,</span> <span className='sm:hidden inline'>tops,</span> we have something to suit every occasion.
                    </div>

                    <div className='texttwo sm:block hidden sm:w-[432px] sm:h-[52px] sm:mb-[32px] sm:mr-[168px] sm:font-normal sm:text-[16px] sm:leading-[160%]'>
                        At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
                    </div>

                    <button className='textthree sm:w-[146px] w-[146px] sm:h-[17px] h-[17px] sm:mb-[5px] mb-[5px] sm:mr-[454px] mr-[190px] sm:font-black font-black sm:text-[12.8px] text-[12.8px] sm:leading-[17px] leading-[17px] sm:items-center items-center sm:capitalize capitalize sm:text-boldblack text-lightwhite'>
                        Shop all everyday items
                    </button>

                    <button className='line sm:w-[146px] w-[146px] sm:h-[1px] h-[1px] sm:mb-[68px] mb-[32px] sm:mr-[454px] mr-[190px] block sm:bg-boldblack bg-lightwhite'>
                        
                    </button>

                    <div className='sm:w-[906px] sm:h-[363px] flex sm:gap-x-[32px] gap-x-[12px]'>
                        
                        <div className='sm:w-[230px] sm:h-[363px] sm:mb-[92px]'>

                            <div className='sm:w-[230px] w-[148px] sm:h-[310px] h-[200px] sm:mb-[12px] mb-[8px]'>
                                <img className='sm:w-[230px] w-[148px] sm:h-[310px] h-[200px]' src={GreenOne} alt='not found'/>
                            </div>
                            <div className='productdescription sm:w-[230px] w-[149px] sm:h-[20px] h-[40px] sm:mb-[4px] mb-[4px] sm:font-normal font-normal sm:text-[12.8px] text-[12.8px] sm:leading-[160%] leading-[20.48px]'><span className='sm:inline hidden'>365 Signature Hoodie</span> <span className='sm:hidden inline'>Organic Skinny High Waist Jeans</span></div>
                            <div className='flex sm:flex-row flex-col sm:gap-x-[118px] gap-x-[0px]'>
                                <div className='price sm:w-[40px] w-[40px] sm:h-[20px] h-[20px] sm:font-medium font-medium sm:text-[12.8px] text-[12.8px] sm:leading-[160%] leading-[20.48px]'>€33.95</div>
                                <div className='flex sm:gap-x-[8px] gap-x-[6px]'>
                                    <div className='roundone sm:w-[8px] w-[6.6px] sm:h-[8px] h-[6.6px] sm:mt-[6px] mt-[10px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundtwo sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundthree sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundfour sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                        <div className='sm:w-[230px] sm:h-[363px] sm:mb-[92px]'>

                            <div className='sm:w-[230px] w-[148px] sm:h-[310px] h-[200px] sm:mb-[12px] mb-[8px]'>
                                <img className='sm:w-[230px] w-[148px] sm:h-[310px] h-[200px]' src={WhiteOne} alt='not found'/>
                            </div>
                            <div className='productdescription sm:w-[230px] w-[149px] sm:h-[20px] h-[40px] sm:mb-[4px] mb-[4px] sm:font-normal font-normal sm:text-[12.8px] text-[12.8px] sm:leading-[160%] leading-[20.48px]'>Organic Skinny High Waist Jeans</div>
                            <div className='flex sm:flex-row flex-col sm:gap-x-[118px] gap-x-[0px]'>
                                <div className='price sm:w-[40px] w-[40px] sm:h-[20px] h-[20px] sm:font-medium font-medium sm:text-[12.8px] text-[12.8px] sm:leading-[160%] leading-[20.48px]'>€33.95</div>
                                <div className='flex sm:gap-x-[8px] gap-x-[6px]'>
                                    <div className='roundone sm:w-[8px] w-[6.6px] sm:h-[8px] h-[6.6px] sm:mt-[6px] mt-[10px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundtwo sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundthree sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundfour sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                        <div className='sm:w-[230px] sm:h-[363px] sm:mb-[92px]'>

                            <div className='sm:w-[230px] w-[148px] sm:h-[310px] h-[200px] sm:mb-[12px] mb-[8px]'>
                                <img className='sm:w-[230px] w-[148px] sm:h-[310px] h-[200px]' src={BlueOne} alt='not found'/>
                            </div>
                            <div className='productdescription sm:w-[230px] w-[149px] sm:h-[20px] h-[40px] sm:mb-[4px] mb-[4px] sm:font-normal font-normal sm:text-[12.8px] text-[12.8px] sm:leading-[160%] leading-[20.48px]'>Organic Skinny High Waist Jeans</div>
                            <div className='flex sm:flex-row flex-col sm:gap-x-[118px] gap-x-[0px]'>
                                <div className='price sm:w-[40px] w-[40px] sm:h-[20px] h-[20px] sm:font-medium font-medium sm:text-[12.8px] text-[12.8px] sm:leading-[160%] leading-[20.48px]'>€33.95</div>
                                <div className='flex sm:gap-x-[8px] gap-x-[6px]'>
                                    <div className='roundone sm:w-[8px] w-[6.6px] sm:h-[8px] h-[6.6px] sm:mt-[6px] mt-[10px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundtwo sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundthree sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                    <div className='roundfour sm:w-[12px] w-[12px] sm:h-[12px] h-[12px] sm:mt-[4px] mt-[8px] sm:rounded-lg rounded-lg'></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='w-[40px] h-[40px]'>
                        <AiOutlineRight className='absolute top-[554.5px] left-[1368.5px] px-[13.5px] py-[13.5px] border-gray-400 border-[1px] box-content'/>
                    </div>

                </div>
            </div>

            
        
        </div>
    </div>
  )
}

export default HomePage