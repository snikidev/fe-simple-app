import styled from "styled-components";
import parse from "html-react-parser";
import { Episode } from "../types";

const EpisodeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledSummary = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

interface Props {
  episode: Episode | null;
}

export const EpisodeDetail = ({ episode }: Props) => {
  return (
    <EpisodeDetailContainer>
      {episode ? (
        <>
          <h1>{episode.name}</h1>
          <StyledSummary>
            <img src={episode.image?.medium} alt={episode.name} />
            <div>
              <p>
                Season: {episode.season}, Episode: {episode.number}
              </p>
              <p>
                Airdate:{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "long",
                }).format(new Date(episode.airdate))}
              </p>
              <p>Runtime: {episode.runtime} minutes</p>
              <p>Rating: {episode.rating.average}/10</p>
            </div>
          </StyledSummary>
          <div>{parse(episode.summary)}</div>
        </>
      ) : (
        "Pick an episode from the left"
      )}
    </EpisodeDetailContainer>
  );
};
