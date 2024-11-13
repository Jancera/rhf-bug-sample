import { useEffect, useState } from "react";
import FormInput from "./components/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const StepOne = () => {
  return (
    <div>
      <FormInput name="name" label="Name" />
      <FormInput name="age" label="Age" />
    </div>
  );
};

const StepTwo = () => {
  return (
    <div>
      <FormInput name="city" label="City" />
    </div>
  );
};

function App() {
  const [step, setStep] = useState(0);

  const form = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    form.setValue("name", "nameDefault");
    form.setValue("age", "10");
    form.setValue("city", "cityDefault");
  }, [form]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <form onSubmit={(d) => console.log(d)}>
        <FormProvider {...form}>
          {step === 0 ? <StepOne /> : <StepTwo />}
        </FormProvider>

        <div>
          <button onClick={handleBack} disabled={step === 0}>
            Back
          </button>
          <button onClick={handleNext} disabled={step === 1}>
            Next
          </button>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <DevTool control={form.control} />
    </div>
  );
}

export default App;
