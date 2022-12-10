import React, { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CreateTrackPageInputs } from "../../pages/tracks/create";

interface Props {
  register: UseFormRegister<CreateTrackPageInputs>;
  errors: FieldErrors<CreateTrackPageInputs>;
}

const TrackImageForm: FC<Props> = (props) => {
  const { register, errors } = props;
  return (
    <div className="flex flex-col gap-2">
      <label className="block rainbow-button">
        Track Image
        <input hidden {...register("trackImage")} />
      </label>
    </div>
  );
};

export default TrackImageForm;
