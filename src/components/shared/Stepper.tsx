import { useState, type JSX } from "react";

interface SelectorProps {
  isSelected: boolean;
  onClick?: () => void;
  title: string;
}

const Selector = ({ isSelected, onClick, title }: SelectorProps) => {
  return (
    <div className="flex gap-8 items-center cursor-pointer" onClick={onClick}>
      <div
        className={`${
          isSelected ? "bg-primary" : "bg-gray-700 hover:bg-gray-500"
        } min-w-1 min-h-12 cursor-pointer`}
      />
      <h4
        className={`${isSelected ? "text-primary" : ""} font-semibold text-lg`}
      >
        {title}
      </h4>
    </div>
  );
};

interface StepperProps {
  steps: { title: string; content: JSX.Element }[];
}

const Stepper = ({ steps }: StepperProps) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  return (
    <div className="flex">
      <div className="w-2/5 flex flex-col">
        {steps.map(({ title }, index) => {
          return (
            <Selector
              isSelected={index === selectedStepIndex}
              onClick={() => {
                setSelectedStepIndex(index);
              }}
              title={title}
            />
          );
        })}
      </div>
      <div className="w-3/5">
        {steps[selectedStepIndex] ? steps[selectedStepIndex].content : <></>}
      </div>
    </div>
  );
};

export default Stepper;
