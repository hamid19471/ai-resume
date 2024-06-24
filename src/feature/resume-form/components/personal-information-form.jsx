import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/app-context/app-context";
import { EditResumeById } from "@/core/HttpService";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { validate } from "uuid";

const PersonalInformationForm = ({ activeStep }) => {
  const { resumeInfo } = useAppContext();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    values: {
      firstName: resumeInfo?.firstName,
      lastName: resumeInfo?.lastName,
      jobTitle: resumeInfo?.jobTitle,
      phone: resumeInfo?.phone,
      email: resumeInfo?.email,
      location: resumeInfo?.location,
    },
    mode: "onChange",
  });

  const formValidation = {
    firstName: {
      required: {
        value: true,
        message: "First name is required",
      },
      minLength: {
        value: 3,
        message: "First name must be at least 3 characters",
      },
    },
    lastName: {
      required: {
        value: true,
        message: "Last name is required",
      },
      minLength: {
        value: 3,
        message: "Last name must be at least 3 characters",
      },
    },
    jobTitle: {
      required: {
        value: true,
        message: "Job title is required",
      },
    },
    phone: {
      required: {
        value: true,
        message: "Phone number is required",
      },
      minLength: {
        value: 11,
        message: "must be at least 12 characters",
      },
      maxLength: {
        value: 15,
        message: "must be at most 15 characters",
      },
    },
    email: {
      required: {
        valuer: true,
        message: "Email is required",
      },
    },
    location: {
      required: {
        value: true,
        message: "Location is required",
      },
    },
  };
  const formValues = watch();
  const allFormFieldValues = Object.values(formValues).every((value) => value);
  if (allFormFieldValues) {
    activeStep(true);
  } else {
    activeStep(false);
  }
  const handlePersonalInformation = async (data) => {
    setLoading(true);
    const res = await EditResumeById(params.documentId, { data });
    if (res) {
      setLoading(false);
      return toast.success("Resume updated successfully");
    }
    setLoading(false);
  };
  return (
    <div>
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <h3 className="font-light text-sm">
        Get start with basic personal infomations
      </h3>
      <form onSubmit={handleSubmit(handlePersonalInformation)}>
        <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
          <div>
            <label className={errors.firstName ? "text-red-500 font-bold" : ""}>
              {errors.firstName ? errors.firstName.message : "First Name"}
            </label>
            <Input
              type="text"
              placeholder="First Name"
              {...register("firstName", formValidation.firstName)}
            />
          </div>
          <div>
            <label className={errors.lastName ? "text-red-500 font-bold" : ""}>
              {errors.lastName ? errors.lastName.message : "Last Name"}
            </label>
            <Input
              type="text"
              placeholder="Last Name"
              {...register("lastName", formValidation.lastName)}
            />
          </div>
          <div className="col-span-2">
            <label className={errors.jobTitle ? "text-red-500 font-bold" : ""}>
              {errors.jobTitle ? errors.jobTitle.message : "Job Title"}
            </label>
            <Input
              type="text"
              placeholder="Job Title"
              {...register("jobTitle", formValidation.jobTitle)}
            />
          </div>
          <div>
            <label className={errors.phone ? "text-red-500 font-bold" : ""}>
              {errors.phone ? errors.phone.message : "Phone Number"}
            </label>
            <Input
              type="text"
              placeholder="use +98 in your phone number"
              {...register("phone", formValidation.phone)}
            />
          </div>
          <div>
            <label className={errors.email ? "text-red-500 font-bold" : ""}>
              {errors.email ? errors.email.message : "Eamil Address"}
            </label>
            <Input
              type="text"
              placeholder="Enter valid Email"
              {...register("email", formValidation.email)}
            />
          </div>
          <div className="col-span-2">
            <label className={errors.location ? "text-red-500 font-bold" : ""}>
              {errors.location ? errors.location.message : "Location"}
            </label>
            <Input
              type="text"
              placeholder="Ex.Tehran, Iran"
              {...register("location", formValidation.location)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Button
            disabled={!isValid || !isDirty}
            type="reset"
            variant="error"
            size="sm"
          >
            Reset Form
          </Button>
          <Button
            disabled={!isValid || !isDirty || loading}
            type="submit"
            variant="primary"
            size="sm"
            className="px-8"
          >
            {loading ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default PersonalInformationForm;
