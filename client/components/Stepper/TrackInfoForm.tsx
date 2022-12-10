import React, { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CreateTrackPageInputs } from "../../pages/tracks/create";

interface Props {
  register: UseFormRegister<CreateTrackPageInputs>;
  errors: FieldErrors<CreateTrackPageInputs>;
}

const TrackInfoForm: FC<Props> = (props) => {
  const { register, errors } = props;
  return (
    <div className="flex flex-col gap-2">
      <label>
        Track Name
        <input placeholder="Chandelier" {...register("trackName")} />
      </label>
      <label>
        Singer
        <input placeholder="Sia" {...register("singer")} />
      </label>
      <label>
        Lyrics
        <textarea placeholder="..." {...register("trackText")} />
      </label>
    </div>
  );
};

export default TrackInfoForm;
