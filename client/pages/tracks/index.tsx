import type { NextPage } from "next";
import { useRouter } from "next/router";
import TrackCard from "../../components/Track/TrackCard";
import TrackPlayer from "../../components/Track/TrackPlayer";
const TracksPage: NextPage = () => {
  const router = useRouter();
  return (
    <div className="container">
      <button
        className="button rainbow-button block ml-auto"
        onClick={() => router.push(router.pathname + "/create")}
      >
        Add track
      </button>
      <div className="mx-auto max-w-2xl flex flex-col gap-4">
        <h2>Track List</h2>
        {[1, 2, 3].map((item) => (
          <TrackCard key={item} />
        ))}
      </div>
      <TrackPlayer />
    </div>
  );
};

export default TracksPage;
