import Buttons from "./button";

const FormPopUp = ({ onClick }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-gray-600 bg-opacity-80 z-50 flex items-center justify-center p-2 ">
      <div className="max-w-md lg:max-w-lg mx-auto p-4 bg-white rounded-md">
        <div className="w-full flex flex-col px-2 gap-y-6  z-50">
          <h1 className="text-2xl ">We respect your privacy</h1>
          <p className="text-sm">
            We use cookies and other technologies on our website. Some of them
            are essential, while others help us to improve this website and your
            experience. Personal data may be processed (e.g. IP addresses), for
            example for personalized ads and content or ad and content
            measurement. You can find more information about the use of your
            data in our privacy policy. Here you will find an overview of all
            cookies used. You can give your consent to whole categories or
            display further information and select certain cookies. If you are
            under 16 and wish to give consent to optional services, you must ask
            your legal guardians for permission.
          </p>
          <div className="flex items-center gap-x-2">
            <Buttons onClick={onClick}>Close</Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPopUp;
