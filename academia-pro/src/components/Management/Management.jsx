import BasicTable from './Authority';
import './manage.css';

const Management =()=>{
    return(
        <>
            <div className="w-[100%] h-[100vh] pt-[90px] overflow-hidden]">
                <div className="w-[100%] flex justify-center">
                    <p className="text-[30px] tracking-wider font-bold">Edit Management</p>
                </div>
                <div className="mt-[20px] w-[100%] flex justify-center">
                    <div className="w-[100%] sm:w-[80%] md:w-[60%] p-5 overflow-auto custom-scroll">
                        <div className="w-[100%] color-black">
                            <BasicTable/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Management;