import type { NextPage } from "next";
import TrackCard from "../components/TrackCard";
const Home: NextPage = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl flex flex-col gap-4">
        {[1, 2, 3].map((item) => (
          <TrackCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
