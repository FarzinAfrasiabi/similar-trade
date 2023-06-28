import Image from "next/image";

const Login = () => {
    return (
        <div className="w-full  h-screen flex flex-col bg-[#FAFAFB]">
            <div className="grid grid-cols-12 flex-1 ">
                <div className="col-span-4  flex flex-col justify-between p-10 relative bg-blue-600">
                    <div className="flex flex-col  gap-y-4">
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.641" height="37.937"><defs><linearGradient id="a" x1="1" x2=".172" y2=".89" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#32c5ff" /><stop offset=".534" stop-color="#b620e0" /><stop offset="1" stop-color="#ffaa12" /></linearGradient></defs><path d="M17.2 2.131a6.667 6.667 0 0 1 6.667 0l10.656 6.151a6.667 6.667 0 0 1 3.333 5.774v12.3a6.667 6.667 0 0 1-3.333 5.774l-10.654 6.152a6.667 6.667 0 0 1-6.667 0L6.549 32.131a6.667 6.667 0 0 1-3.333-5.774v-12.3a6.667 6.667 0 0 1 3.333-5.775Z" transform="translate(-3.215 -1.238)" fill="url(#a)" /></svg>
                            <span className="text-white font-semibold">Similar Trade</span>
                        </div>
                        <div className="text-2xl text-white font-bold">
                            <h1 className="text-4xl" >The new generation of signal channel</h1>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        {/* <Image src={"/images/logo/login_signup.svg"} width={"1500px"} height={"1600px"}  alt="logo_signup brand" className="absolute bottom-0 w-full object-cover "/> */}
                    </div>
                </div>
                <div className="col-span-8  ">
                    <div className="w-full h-screen flex items-center justify-center">
                        <div className="bg-white shadow-lg rounded-lg p-2 max-w-md w-full">
                            <form className="w-full p-4 flex flex-col gap-y-6 ">
                                <div className="flex flex-col gap-y-6 w-full">
                                    <input type="text" className="p-2 w-full ring-2 ring-gray-500 rounded-md border-none outline-none" placeholder="email" />
                                </div>
                                <div className="flex flex-col gap-y-6 w-full">
                                    <input type="text" className="p-2 w-full ring-2 ring-gray-500 rounded-md border-none outline-none" placeholder="email" />
                                </div>
                                <button className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;