import { Children, FC, ReactNode, useState } from "react";
import StepsNavigation from "./StepsNavigation";

interface Props {
  children: ReactNode;
}

const StepWrapper: FC<Props> = (props) => {
  const { children } = props;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <StepsNavigation
        activeStep={currentStep}
        setActiveStep={setCurrentStep}
        stepsQuantity={3}
      >
        {Children.toArray(children)[currentStep - 1]}
      </StepsNavigation>
    </>
  );
};

export default StepWrapper;
