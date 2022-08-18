import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


export default function Progbar({first,second,third,fourth}) {
    //console.log("props in progbar",first,second,third,fourth)
    return (
        <>
           <ProgressBar
            completed={parseInt(first) }
            bgColor={"#EF5E33"}
            baseBgColor={"#314546"}
            height={"8px"}
            width={"50px"}
            isLabelVisible={false}
            ariaValuemin={0}
            className="progress-inner"
            transitionDuration="0s"
          />
          <ProgressBar
            completed={second}
            bgColor={"#ef5e33"}
            baseBgColor={"#314546"}
            height={"8px"}
            width={"50px"}
            isLabelVisible={false}
            ariaValuemin={0}
            className="progress-inner"
          />
          <ProgressBar
            completed={third}
            bgColor={"#ef5e33"}
            baseBgColor={"#314546"}
            height={"8px"}
            width={"50px"}
            isLabelVisible={false}
            ariaValuemin={0}
            className="progress-inner"
          />
          <ProgressBar
            completed={fourth}
            bgColor={"#ef5e33"}
            baseBgColor={"#314546"}
            height={"8px"}
            width={"50px"}
            isLabelVisible={false}
            ariaValuemin={0}
            className="progress-inner"
          />  
        </>
    )
}
