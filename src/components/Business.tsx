import axios from "axios";
import Error from "./Error";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import { bindActionCreators } from "redux";
import { RootState } from "../store/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep } from '../store/action-creators/index';

function Business() {

  const dispatch = useDispatch();
  const {setCurrentStep} = bindActionCreators(actionCreators,dispatch);
  const currentStep = useSelector((state: RootState) => state.currentStepIncrease);

  const handleClick = () => {
      setCurrentStep(1)
  };

  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    city: "",
    country: "",
    address: "",
    email: "",
    number: "",
    openTime: "",
    closeTime: "",
  });

  const [emailOTP, setEmailOTP] = useState(false);
  const [numberOTP, setNumberOTP] = useState(false);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleOTPEmail = async () => {
    try {
      let data = await axios.post("https://timeline-form-backend.onrender.com/api/auth/sendmail", {
        email: formData.email,
      });
      if (data.status==200) {
        setEmailOTP(true);
      }
    } catch (error) {
      ref?.current?.classList.add("shake")
      setTimeout(() => {
        ref?.current?.classList.remove("shake")
      }, 2000);
    }
  };

  const handleOTPNumber = async () => {
    try {
      let data = await axios.post("http://localhost:5000/api/auth/sendsms", {
        number: formData.number,
      });
      console.log(data);
      
      if (data.status==200) {
        setNumberOTP(true);
      }
    } catch (error) {
      ref?.current?.classList.add("shake")
      setTimeout(() => {
        ref?.current?.classList.remove("shake")
      }, 2000);
    }
  };

  return (
    <div className="absolute right-10 top-[23rem]  w-[1000px] flex flex-col gap-7 justify-center items-start ">
      <p className="text-3xl text-[#90212C] font-semibold">
        Business Information
      </p>

      <div className="flex gap-40">
        <div className="flex flex-col gap-3 justify-center items-start">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="name" className="text-[#DA3545] font-medium pl-1">
              Business Name *
            </label>
            <Error />
          </div>
          <input
            type="text"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Domino's Pizza"
          />
        </div>

        <div className="flex flex-col gap-3 justify-center items-start">
          <div className="flex justify-between items-center w-full">
            <label
              htmlFor="country"
              className="text-[#DA3545] font-medium pl-1"
            >
              Country
            </label>
            <Error />
          </div>
          <input
            type="text"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="India"
          />
        </div>
      </div>

      <div className="flex gap-40">
        <div className="flex flex-col gap-3 justify-center items-start relative">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="state" className="text-[#DA3545] font-medium pl-1">
              State *
            </label>
            <Error />
          </div>
          <input
            type="text"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="state"
            value={formData.state}
            onChange={handleChange}
            id="state"
            placeholder="Delhi"
          />
          <span className="material-symbols-outlined scale-125 absolute right-5 bottom-3">
            keyboard_arrow_down
          </span>
        </div>

        <div className="flex flex-col gap-3 justify-center items-start">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="city" className="text-[#DA3545] font-medium pl-1">
              City *
            </label>
            <Error />
          </div>
          <input
            type="text"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Delhi"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-start relative">
        <div className="flex justify-between items-center w-full">
          <label htmlFor="open" className="text-[#DA3545] font-medium pl-1">
            Address *
          </label>
          <Error />
        </div>
        <input
          type="text"
          style={{ border: "2px solid #12121237" }}
          className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-[58rem] h-12"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Domino's Pizza, SHOP NO- 85, 87, The Mall Rd, Kingsway Camp, GTB Nagar, New Delhi, Delhi 110009"
        />
        <span className="material-symbols-outlined scale-110 absolute right-5 bottom-4 text-[#1212125f]">
          location_on
        </span>
      </div>

      <div className="flex gap-40">
        <div className="flex flex-col gap-3 justify-center items-start relative">
          <div className="flex justify-between items-center w-full">
            <label
              htmlFor="openTime"
              className="text-[#DA3545] font-medium pl-1"
            >
              Opening Time *
            </label>
          </div>
          <input
            type="text"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="openTime"
            value={formData.openTime}
            onChange={handleChange}
            id="openTime"
            placeholder="12:00"
          />
          <select
            name="time"
            className="bg-transparent absolute right-14 outline-none border-none text-[#121212b8] bottom-4"
            id="time"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <span className="material-symbols-outlined scale-110 absolute right-5 bottom-4 text-[#DA3545]">
            schedule
          </span>
        </div>

        <div className="flex flex-col gap-3 justify-center items-start relative">
          <div className="flex justify-between items-center w-full">
            <label
              htmlFor="closeTime"
              className="text-[#DA3545] font-medium pl-1"
            >
              Closing Time *
            </label>
          </div>
          <input
            type="text"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="closeTime"
            id="closeTime"
            value={formData.closeTime}
            onChange={handleChange}
            placeholder="12:00"
          />
          <select
            name="time"
            className="bg-transparent absolute right-14 outline-none border-none text-[#121212b8] bottom-4"
            id="time"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <span className="material-symbols-outlined scale-110 absolute right-5 bottom-4 text-[#DA3545]">
            schedule
          </span>
        </div>
      </div>

      <div className="flex gap-40">
        <div ref={ref} className="flex flex-col gap-3 justify-center items-start relative">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="email" className="text-[#DA3545] font-medium pl-1">
              E-mail *
            </label>
            {emailOTP ? (
              <div className="flex absolute right-0 text-green-700 gap-1">
                <p className=" font-semibold">OTP sent!</p>
                <span className="material-symbols-outlined">task_alt</span>
              </div>
            ) : (
              <Error />
            )}
          </div>
          <input
            type="email"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="kingsway.delhi@domino.com"
          />
          <button
            onClick={handleOTPEmail}
            className="bg-[#DA3545] hover:bg-[#b13c3c] p-3 w-28 rounded-lg text-white absolute right-1 bottom-1"
          >
            Send OTP
          </button>
        </div>

        <div className="flex flex-col gap-3 justify-center items-start relative">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="number" className="text-[#DA3545] font-medium pl-1">
              Mobile Number *
            </label>
            {numberOTP ? (
              <div className="flex absolute right-0 text-green-700 gap-1">
                <p className=" font-semibold">OTP sent!</p>
                <span className="material-symbols-outlined">task_alt</span>
              </div>
            ) : (
              <Error />
            )}
          </div>
          <input
            type="number"
            style={{ border: "2px solid #12121237" }}
            className=" outline-[#12121237] bg-[#e5e5e56b] rounded-lg p-6 pb-7 w-96 h-12"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="9876543219"
          />
          <button
            onClick={handleOTPNumber}
            className="bg-[#DA3545] hover:bg-[#b13c3c] p-3 w-28 rounded-lg text-white absolute right-1 bottom-1"
          >
            Send OTP
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-start relative">
        <div className="flex justify-between items-center w-full">
          <label
            htmlFor="number"
            className="text-[#DA3545] font-medium pl-1 w-[370px]"
          >
            Upload image of your Restaurant{" "}
          </label>
          <Error />
        </div>
        <div className="box-fileupload cursor-pointer">
          <label
            htmlFor="fileId"
            className="box-fileupload__label my-3 text-[#121212c5] flex flex-col justify-center items-center"
          >
            <span className="scale-150 material-symbols-outlined text-[#121212c5]">
              cloud_upload
            </span>
            <p>Click to upload</p>
          </label>
          <input
            type="file"
            id="fileId"
            className="file-upload-input"
            name="files"
            accept="png"
          />
        </div>
      </div>

      <Link to="/owner">
        <button onClick={handleClick} className="bg-[#DA3545] hover:bg-[#b13c3c] p-3 w-96 rounded-lg text-white absolute right-1 bottom-5">
          Proceed to Owner & Manager Details &rarr;
        </button>
      </Link>
    </div>
  );
}

export default Business;
