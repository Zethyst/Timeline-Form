import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep } from '../store/action-creators/index';
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import { bindActionCreators } from "redux";
import { RootState } from "../store/reducers";


function Sidebar() {
    
    const dispatch = useDispatch();
    const {setCurrentStep} = bindActionCreators(actionCreators,dispatch);
    const currentStep = useSelector((state: RootState) => state.currentStepIncrease);

    const handleClick = () => {
        setCurrentStep(currentStep+1)
    };

  return (
    <div className=' bg-[#FFD098] w-72 mt-28 p-5 py-10 m-10 rounded-2xl flex flex-col justify-center items-start'>
        <h1 className='text-[#121212] text-2xl font-semibold text-start mb-2'>Partner with us</h1>
        <p className='text-[#12121291] w-64 text-sm mb-6'>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>
        <Link to='/Timeline-Form' className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=1?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>1</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>Business Information</p>
        </Link>
        <div  className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=2?"border-[#dc35467d]":"border-[#12121222]"}`}></div>
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=2?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>2</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1 w-48 -translate-x-2'>Owner / Manager Details</p>
        </div>
        <div className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=3?"border-[#dc35467d]":"border-[#12121222]"}`}></div>
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=3?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>3</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>PAN/Aadhaar Details</p>
        </div>
        <div className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=4?"border-[#dc35467d]":"border-[#12121222]"}`}></div>
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=4?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>4</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>Legal Documents</p>
        </div>
        <div className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=5?"border-[#dc35467d]":"border-[#12121222]"}`}></div>
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=5?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>5</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>Bank Details</p>
        </div>
        <div className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=6?"border-[#dc35467d]":"border-[#12121222]"}`}></div>
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=6?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>6</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>Service Info</p>
        </div>
        <div className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=7?"border-[#dc35467d]":"border-[#12121222]"}`}></div>
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=7?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>7</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>Preview Document</p>
        </div>
        <div className={`h-9 border-l-2 border-dashed p-1 translate-x-6 ${currentStep>=8?"border-[#dc35467d]":"border-[#12121222]"}`}></div>  
        <div className='flex gap-5 cursor-pointer'>
            <div className={`rounded-full p-5 w-12 h-12 flex justify-center items-center font-semibold ${currentStep>=8?"text-white bg-[#DC3545]":"text-[#121212b5] bg-[#FFFFFF]"}`}>8</div>
            <p className='font-semibold text-center flex justify-center items-center mb-1'>Reach Increased</p>
        </div>
    </div>
  )
}

export default Sidebar