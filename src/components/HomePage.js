import React from 'react'
import "./HomePage.css";
import Girl from "../static/girl.jpg";
import GreenOne from "../static/greenone.jpg";
import WhiteOne from "../static/whiteone.jpg" 
import BlueOne from "../static/blueone.jpg";

const HomePage = () => {
  return (
    <div>
        <div>
            <div>
                <img src={Girl} alt='not found'/>
            </div>

            <div>

                <div>
                    Everyday items, we have something to suit every occasion.
                </div>

                <div>
                    At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
                </div>

                <div>
                    Shop all everyday items
                </div>

                <div>
                    -------
                </div>

                <div>
                    
                    <div>
                        <div>
                            <img src={GreenOne}/>
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
  )
}

export default HomePage