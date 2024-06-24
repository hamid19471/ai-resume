import { useState } from "react";
import PersonalInformationForm from "./personal-information-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Button className="flex items-center gap-2" variant="outline">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {step > 1 && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => setStep(step - 1)}
            >
              <ArrowLeft size={17} />
            </Button>
          )}
          <Button
            className="felx gap-2"
            variant="primary"
            size="sm"
            onClick={() => setStep(step + 1)}
            disabled={!activeStep}
          >
            Next
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
      <div className="p-8 shadow-xl rounded-xl border-t-4 border-violet-500 bg-white">
        {step === 1 ? (
          <PersonalInformationForm
            activeStep={(value) => setActiveStep(value)}
          />
        ) : null}
      </div>
    </div>
  );
};
export default FormSection;
