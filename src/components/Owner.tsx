import { useState, useEffect, useRef } from "react";
import Error from "./Error"


function Owner() {

    const Emailref = useRef<HTMLDivElement>(null);
    const Numberref = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState(() => {
        const savedFormData = localStorage.getItem("formData");
        return savedFormData ? JSON.parse(savedFormData) : {
          name: "",
          state: "",
          city: "",
          country: "",
          address: "",
          email: "",
          number: ""
        };
      });

      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevFormData:any) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
      }, [formData]);

      

  return (
    <div className='absolute right-10 top-[23rem]  w-[1000px] flex flex-col gap-6 justify-center items-start '>
        <p className='text-3xl text-[#90212C] font-semibold'>Owner & Manager Details</p>
        <button className="text-white font-bold p-2 translate-y-4 w-44 bg-[#90212C] rounded-3xl">Owner Details</button>
        <div className="flex flex-col">
        <div className='flex gap-40'>

            <div className='flex flex-col gap-3  justify-center items-start'>
                <div className="flex justify-between items-center w-full">
              <label htmlFor="name" className='text-[#DA3545] font-medium pl-1'>Full Name *</label>
                </div>
              <input type="text" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12' name='name' id='name' value={formData.name} onChange={handleChange} placeholder="Eg. Prabhat Kumar, Sushma Singh"/>
            </div>

            <div className='flex flex-col gap-3 justify-center items-start relative'>
              <div className="flex justify-between items-center w-full">
              <label htmlFor="number" className='text-[#DA3545] font-medium pl-1 w-[370px]'>Profile pic *</label>
                </div>
                <div className="box-fileupload cursor-pointer">
                  <label htmlFor="fileId" className="box-fileupload__label my-3 text-[#121212c5] flex flex-col justify-center items-center">
                    <span className="scale-150 material-symbols-outlined text-[#121212c5]">cloud_upload</span>
                    <p>Click to upload</p>
                  </label>
                  <input type="file" id="fileId" className="file-upload-input" name="files" accept="png"  />
                </div>
            </div>

        </div>
        <div className='flex flex-col gap-3 justify-center items-start w-96 relative'>
                <div className="flex justify-between items-center">
              <label htmlFor="state" className='text-[#DA3545] font-medium pl-1'>State *</label>
                </div>
              <input type="text" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12' name='state' id='state' value={formData.state} onChange={handleChange} placeholder='Eg. Delhi, UP, Rajasthan'/>
              <span className="material-symbols-outlined scale-125 absolute right-5 bottom-3">
                keyboard_arrow_down
              </span>
            </div>
        </div>


        <div className='flex gap-40'>


            <div className='flex flex-col gap-3 justify-center items-start'>
              <div className="flex justify-between items-center w-full">
              <label htmlFor="city" className='text-[#DA3545] font-medium pl-1'>City *</label>
              <Error/>
                </div>
              <input type="text" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12' name='city' value={formData.city} onChange={handleChange} id='city' placeholder='Delhi'/>
            </div>

            <div className='flex flex-col gap-3 justify-center items-start'>
              <div className="flex justify-between items-center w-full">
              <label htmlFor="country" className='text-[#DA3545] font-medium pl-1'>Country</label>
              <Error/>
                </div>
              <input type="text" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12' name='country' value={formData.country} onChange={handleChange} id='country' placeholder='India'/>
            </div>

        </div>

        <div className='flex flex-col gap-3 justify-center items-start relative'>
                <div className="flex justify-between items-center w-full">
              <label htmlFor="open" className='text-[#DA3545] font-medium pl-1'>Address *</label>  
              <Error/>
                </div>
              <input type="text" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-[58rem] h-12' name='address'  value={formData.address} onChange={handleChange} id='address' placeholder="Domino's Pizza, SHOP NO- 85, 87, The Mall Rd, Kingsway Camp, GTB Nagar, New Delhi, Delhi 110009"/>
              <span className="material-symbols-outlined scale-110 absolute right-5 bottom-4 text-[#1212125f]">
                location_on
              </span>
            </div>


        <div className='flex gap-40'>

            <div ref={Emailref} className='flex flex-col gap-3 justify-center items-start relative'>
                <div className="flex justify-between items-center w-full">
              <label htmlFor="email" className='text-[#DA3545] font-medium pl-1'>E-mail *</label>
              <Error/>
                </div>
              <input type="email" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12' name='email' id='email' value={formData.email} onChange={handleChange} placeholder='kingsway.delhi@domino.com'/>
              <button className="bg-[#DA3545] hover:bg-[#b13c3c] p-3 w-28 rounded-lg text-white absolute right-1 bottom-1">
                Send OTP
              </button>
              <div className="absolute right-1 top-24 flex justify-center items-center gap-2"><label htmlFor="Bemail" className="font-semibold pb-1 pr-9 text-[#DA3545] container">Same as business e-mail<input type="radio" id="Bemail" className="scale-150" onChange={()=>{if (Emailref.current) {
          Emailref?.current?.classList.add("opacity-60");
          Emailref?.current?.classList.add("pointer-events-none");
        }}}/><span className="checkmark"></span></label></div>
           </div>

            <div ref={Numberref} className='flex flex-col gap-3 justify-center items-start relative'>
              <div className="flex justify-between items-center w-full">
              <label htmlFor="number" className='text-[#DA3545] font-medium pl-1'>Mobile Number *</label>
              <Error/>
                </div>
              <input type="number" style={{border:"2px solid #12121237"}} className=' outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12' name='number' value={formData.number} onChange={handleChange} id='number' placeholder='9876543219'/>
              <button className="bg-[#DA3545] hover:bg-[#b13c3c] p-3 w-28 rounded-lg text-white absolute right-1 bottom-1">
                Send OTP
              </button>
              <div className=" absolute right-1 top-24 flex justify-center items-center gap-2"><label htmlFor="Bnumber" className="font-semibold pb-1 pr-9 text-[#DA3545] container">Same as business mobile number<input type="radio" id="Bnumber" className="scale-150 " onChange={()=>{if (Emailref.current) {
              Numberref?.current?.classList.add("opacity-60");
              Numberref?.current?.classList.add("pointer-events-none");
        }}}/><span className="checkmark"></span></label></div>
           
            </div>

        </div>

        <div className="flex justify-center items-center gap-5 pt-10">
            <p className="font-semibold">Do you want to fill manager details?</p>
            <div className="flex justify-center items-center gap-4">
                <button className="text-[#DA3545] hover:bg-[#DA3545] hover:text-white p-2 rounded-lg font-semibold w-24" style={{border:"2px solid #DA3545"}}>Yes</button>
                <button className="text-[#DA3545] hover:bg-[#DA3545] hover:text-white p-2 rounded-lg font-semibold w-24" style={{border:"2px solid #DA3545"}}>No</button>
            </div>
        </div>

    </div>
  )
}

export default Owner