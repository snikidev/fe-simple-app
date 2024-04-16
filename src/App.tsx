import styled from "styled-components";
import { EpisodeList } from "./components/EpisodeList";
import { EpisodeDetail } from "./components/EpisodeDetail";
import { Episode } from "./types";
import episodes from "./utils/episodes.json";

import "./styles.css";
import { useState } from "react";

const EpisodeListContainer = styled.div`
  display: flex;
  max-height: 500px;

  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  flex: auto;
`;

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const handleOpenEpisode = (episode: Episode) => {
    console.log("Open episode: ", episode);
    setSelectedEpisode(episode);
  };

  return (
    <div className="App">
      <h1>Episode List: </h1>
      <EpisodeListContainer>
        <EpisodeList
          episodes={episodes as Episode[]}
          onClick={handleOpenEpisode}
        />
        <EpisodeDetail episode={selectedEpisode} />
      </EpisodeListContainer>
    </div>
  );
}
