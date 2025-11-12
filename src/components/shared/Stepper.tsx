import { useState, type JSX } from "react";
import IconButton from "./IconButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface SelectorProps {
  isSelected: boolean;
  onClick?: () => void;
  title: string;
}

const Selector = ({ isSelected, onClick, title }: SelectorProps) => {
  return (
    <div
      className="flex gap-2 md:gap-8 items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`${
          isSelected ? "bg-primary" : "bg-gray-700 hover:bg-gray-500"
        } min-w-1 min-h-12 cursor-pointer h-full`}
      />
      <h4
        className={`${
          isSelected ? "text-primary" : ""
        } font-semibold text-base md:text-lg`}
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

  const onClickPrevious = () => {
    setSelectedStepIndex((prev) => {
      if (prev - 1 < 0) {
        return 0;
      }

      return prev - 1;
    });
  };

  const onClickNext = () => {
    const lastIndex = steps.length - 1;

    const newIndex =
      selectedStepIndex + 1 > lastIndex ? lastIndex : selectedStepIndex + 1;

    setSelectedStepIndex(newIndex);
  };

  return (
    <div className="flex-col flex md:flex-row">
      <div className="hidden md:flex md:flex-col w-2/5">
        {steps.map(({ title }, index) => {
          return (
            <Selector
              key={index}
              isSelected={index === selectedStepIndex}
              onClick={() => {
                setSelectedStepIndex(index);
              }}
              title={title}
            />
          );
        })}
      </div>
      <div className="flex md:hidden w-full justify-between mb-4">
        <IconButton
          onClick={onClickPrevious}
          style={{
            visibility: selectedStepIndex === 0 ? "hidden" : "initial",
          }}
        >
          <FaChevronLeft />
        </IconButton>
        <h4 className={"text-primary font-semibold text-base md:text-lg"}>
          {steps[selectedStepIndex].title}
        </h4>
        <IconButton
          onClick={onClickNext}
          style={{
            visibility:
              selectedStepIndex === steps.length - 1 ? "hidden" : "initial",
          }}
        >
          <FaChevronRight />
        </IconButton>
      </div>
      <div className="w-full md:w-3/5">
        {steps[selectedStepIndex] ? steps[selectedStepIndex].content : <></>}
      </div>
    </div>
  );
};

export default Stepper;
