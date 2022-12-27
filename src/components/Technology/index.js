import { useState } from "react";
// import { Link } from "react-router-dom";






function TechCard1() {
  return (
    <div className=" p-7 flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row   lg:justify-between lg:items-center  ">
        <div className="m-[10px] mr-[20px] order-2 md:order-2   flex flex-col  justify-center items-center lg:order-1">
            <h3 className=" font-[BarlowCondensed] text-[16px] mb-[20px] text-[#D0D6F9] font-[400]  ">
            THE TERMINOLOGY…
            </h3>
            <h1 className=" font-[Bellefair] text-[30px] mb-[20px] md:text-[40px] text-[#FFFFFF] font-[400]">
            LAUNCH VEHICLE
            </h1>
            <h3 className=" w-[444px] font-[Bellefair] mb-[10px] text-[18px] text-[#D0D6F9] font-[400]">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry
             a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most 
            powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
            </h3>

        </div>
        <div className="order-1 md-6 lg:order-2 md:mb-6">
            <img src="/Image/tech1.jpg"  alt="tech" className="object-center  w-[100%] h-[170px]  md:mr-[20px] 
             md:w-[400px] md:h-[450px] md:object-cover"/>


        </div>
        

    </div>
  )
}
function TechCard2() {
  return (
    <div className=" p-7 flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row   lg:justify-between lg:items-center  ">
        <div className="m-[10px] mr-[20px] order-2 md:order-2   flex flex-col  justify-center items-center lg:order-1">
            <h3 className=" font-[BarlowCondensed] text-[16px] mb-[20px] text-[#D0D6F9] font-[400]  ">
            THE TERMINOLOGY…
            </h3>
            <h1 className=" font-[Bellefair] text-[30px] mb-[20px] md:text-[40px] text-[#FFFFFF] font-[400]">
            SPACEPORT
            </h1>
            <h3 className=" w-[444px] font-[Bellefair] mb-[10px] text-[18px] text-[#D0D6F9] font-[400]">
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport 
            for ships or airport for aircraft. Based in the famous Cape Canaveral, 
            our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
            </h3>

        </div>
        <div className="order-1 md-6 lg:order-2 md:mb-6">
            <img src="/Image/tech2.jpg"  alt="tech" className="object-center  w-[100%] h-[170px] md:mr-[20px]
             md:w-[400px] md:h-[450px] md:object-cover"/>


        </div>
        

    </div>
  )
    
  }
  function TechCard3() {
    return (
      <div className=" p-7 flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row   lg:justify-between lg:items-center  ">
          <div className="m-[10px] mr-[20px] order-2 md:order-2   flex flex-col  justify-center items-center lg:order-1">
              <h3 className=" font-[BarlowCondensed] text-[16px] mb-[20px] text-[#D0D6F9] font-[400]  ">
              THE TERMINOLOGY…
              </h3>
              <h1 className=" font-[Bellefair] text-[30px] mb-[20px] md:text-[40px] text-[#FFFFFF] font-[400]">
              SPACE CAPSULE
              </h1>
              <h3 className=" w-[444px] font-[Bellefair] mb-[10px] text-[18px] text-[#D0D6F9] font-[400]">
                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the 
                Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight.
               It includes a space gym, cinema, and plenty of other activities to keep you entertained.

            
              </h3>
  
          </div>
          <div className="order-1 md-6 lg:order-2 md:mb-6">
              <img src="/Image/tech3.jpg"  alt="tech" className="object-center  w-[100%] h-[170px] md:mr-[20px]
               md:w-[400px] md:h-[450px] md:object-cover"/>
  
  
          </div>
          
  
      </div>
    )
    
  }


const Technology=()=>{
    const [cardIndex,setCardIndex]=useState(1)
    // const [toggle,setToggle]=useState(false)
    // if (toggle){
    //   return <Redirect to="/"/>
    // }
    

    return(
        <>
        <div className="h-[100%] w-[100%] bg-cover p-[20px] flex justify-center items-center " 
         style={{
            backgroundImage: 'url("./Image/techbg.png")',
            
          }}>
            <div className=" md:pt-[90px] lg:pt-[90px] md:w-[90%]  flex flex-col justify-center  ">
            <h3 className="text-[#FFFFFF] w-[322px] h-[34px] font-[Barlow Condensed] text-[28px] mx-[165.5px] py-[40px] mb-4">
          <span className="text-[#FFFFFF] mr-4  font-[BarlowCondensed] opacity-[25%] font-bold">03</span>SPACE LAUNCH 101
      </h3>
      
      <div className="border-solid flex flex-col justify-around  text-center mr-[20px] p-3 w-[98%] md:flex md:flex-row md:justify-around md:items-center ">
        <div className="p-3">
        {/* <button className="bg-red-800" ><Link to="/">HOME</Link></button> */}
            <ul className="border-solid box-border flex justify-around items-center w-[95%] md:flex md:flex-col md:justify-center md:items-center md:h-[390px]">
                <li onClick={()=>setCardIndex(1)} className={`text-[32px] font-[Bellefair] font-[400] w-[80px] h-[80px] rounded-full border-solid border-2 m-[5px] md:mb-[15px] text-white border-slate-400 flex justify-center items-center ${cardIndex===1?"bg-white text-black":""} `}>1</li>
                <li onClick={()=>setCardIndex(2)} className={`text-[32px] font-[Bellefair] font-[400] w-[80px] h-[80px] rounded-full border-solid border-2 m-[5px] md:mb-[15px] text-white  border-slate-400 flex justify-center items-center ${cardIndex===2?"bg-white  text-black":""}`}>2</li>
                <li onClick={()=>setCardIndex(3)} className={`text-[32px] font-[Bellefair] font-[400] w-[80px] h-[80px] rounded-full  border-solid border-2 m-[5px] md:mb-[15px] text-white flex border-slate-400 justify-center items-center ${cardIndex===3?"bg-white  text-black":""}`}>3</li>
            </ul>
        </div >
        <div className="m-[10px] p-[10px]">
            <div className="text-white" hidden={cardIndex!==1}>
               <TechCard1/>

            </div>
            <div className="text-white" hidden={cardIndex!==2}>
            <TechCard2/>

            </div>
            <div className="text-white" hidden={cardIndex!==3}>
            <TechCard3/>

            </div>

        </div>

      </div>

            </div>
            


        </div>
        </>
        
    )
}
export default Technology