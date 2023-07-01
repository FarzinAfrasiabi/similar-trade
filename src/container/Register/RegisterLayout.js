const RegisterLayout = ({ children }) => {
  return (
    <div className="w-full  h-screen flex flex-col bg-[#FAFAFB] overflow-hidden">
      <div className="grid grid-cols-12 flex-1 ">
        <div className="md:col-span-4 lg:col-span-3  hidden md:flex flex-col justify-between p-10  bg-blue-600 relative">
          <div className="flex flex-col mt-10  gap-y-8">
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
              <span className="text-white md:text-xl lg:text-3xl font-semibold">
                Similar Trade
              </span>
            </div>
            <div className="">
              <h1 className="md:text-xl lg:text-4xl tracking-wide text-white">
                The new generation of signal channel
              </h1>
            </div>
          </div>
          <div className="absolute hidden lg:block lg:flex-1 w-[100vw] -bottom-[22vw] -left-[12vw] z-0 ">
            <div className="bg-[url(/images/logo/login_signup.svg)] bg-center w-[60vw] h-[70vw] bg-contain bg-no-repeat  "></div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 z-10 ">
          <div className="w-full h-screen flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
