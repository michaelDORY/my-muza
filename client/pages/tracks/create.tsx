import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import StepWrapper from "../../components/Stepper/StepWrapper";
import TrackImageForm from "../../components/Stepper/TrackImageForm";
import TrackInfoForm from "../../components/Stepper/TrackInfoForm";

export type CreateTrackPageInputs = {
  trackName: string;
  singer: string;
  trackText: string;
  trackImage: File;
  trackAudio: File;
};

const CreateTrackPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateTrackPageInputs>();
  const onSubmit: SubmitHandler<CreateTrackPageInputs> = (data) =>
    console.log(data);
  return (
    <div className="container">
      <form
        className="h-4/5 md:max-w-2xl sm:w-5/6 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <StepWrapper>
          <TrackInfoForm register={register} errors={errors} />
          <TrackImageForm register={register} errors={errors} />
        </StepWrapper>
      </form>
    </div>
  );
};

export default CreateTrackPage;
