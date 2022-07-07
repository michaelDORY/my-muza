import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  activeStep: number;
  stepsQuantity: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

const StepsNavigation: FC<Props> = (props) => {
  const { stepsQuantity, activeStep, setActiveStep, children } = props;
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex justify-between items-center w-full">
        {Array(stepsQuantity)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`${
                activeStep === ++index
                  ? "text-orange-300 scale-125"
                  : "text-white"
              }`}
            >
              {"Step" + " " + index}
            </div>
          ))}
      </div>
      {children}
      <div className="flex justify-between items-center w-full">
        <button
          className="navigate-button outlined-button"
          disabled={activeStep === 1}
          onClick={
            activeStep !== 1 ? () => setActiveStep((prev) => --prev) : undefined
          }
        >
          <IoIosArrowBack className="dark:fill-white fill-black" size={50} />
        </button>
        <button
          className="navigate-button outlined-button"
          disabled={activeStep === stepsQuantity}
          onClick={
            activeStep !== stepsQuantity
              ? () => setActiveStep((prev) => ++prev)
              : undefined
          }
        >
          <IoIosArrowForward className="dark:fill-white fill-black" size={50} />
        </button>
      </div>
    </div>
  );
};

export default StepsNavigation;
