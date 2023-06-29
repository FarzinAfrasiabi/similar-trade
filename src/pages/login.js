import Inputs from "@/components/Forms/Inputs";
import Links from "@/components/Forms/Links";
import Buttons from "@/components/Forms/button";
import { Checkbox } from "@mui/material";


const Login = () => {
  return (
    <div className="w-full  h-screen flex flex-col bg-[#FAFAFB]">
      <div className="grid grid-cols-12 flex-1 ">
        <div className="col-span-4  flex flex-col justify-between p-10 relative bg-blue-600">
          <div className="flex flex-col  gap-y-4">
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34.641"
                height="37.937"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="1"
                    x2=".172"
                    y2=".89"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#32c5ff" />
                    <stop offset=".534" stopColor="#b620e0" />
                    <stop offset="1" stopColor="#ffaa12" />
                  </linearGradient>
                </defs>
                <path
                  d="M17.2 2.131a6.667 6.667 0 0 1 6.667 0l10.656 6.151a6.667 6.667 0 0 1 3.333 5.774v12.3a6.667 6.667 0 0 1-3.333 5.774l-10.654 6.152a6.667 6.667 0 0 1-6.667 0L6.549 32.131a6.667 6.667 0 0 1-3.333-5.774v-12.3a6.667 6.667 0 0 1 3.333-5.775Z"
                  transform="translate(-3.215 -1.238)"
                  fill="url(#a)"
                />
              </svg>
              <span className="text-white font-semibold">Similar Trade</span>
            </div>
            <div className="text-2xl text-white font-bold">
              <h1 className="text-4xl">The new generation of signal channel</h1>
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
                <Inputs label={"Youre Email / UserName"} />
                <Inputs type="password" label={"Password"} />
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    {/* checkbox */}
                    <Checkbox />
                    <span className="text-sm">Rememeber Me</span>
                  </div>
                  <Links
                    href={"/forgotpass"}
                    text={"Forgot Password"}
                  />
                </div>
                <div className="flex flex-col gap-y-4 pt-10 items-center">
                  <Buttons type="submit">Login</Buttons>
                  <div className="flex items-center text-sm gap-x-1">
                    Not a memebr?
                    <Links
                      href={"/signin"}
                      className="text-blue-600 text-sm hover:underline hover:underline-offset-2"
                      text={"Register now"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
