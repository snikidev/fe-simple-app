import styled from "styled-components";
import { Episode } from "../types";

const StyledEpisodeList = styled.ol`
  margin: 0;
  overflow: scroll;
  flex: 1;
  list-style-type: none;
  padding-inline-start: 0;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const StyledName = styled.span`
  text-decoration: underline;
`;

const EpisodeTitle = styled.li`
  font-size: 18px;
  display: flex;
`;

interface Props {
  episodes: Episode[];
  onClick: (episode: Episode) => void;
}

export const EpisodeList = ({ episodes = [], onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const episodeId = e.currentTarget.id;
    const episode = episodes.find((ep) => `${ep.id}` === episodeId);
    if (episode) {
      onClick(episode);
    }
  };

  return (
    <StyledEpisodeList>
      {episodes.map((ep) => (
        <EpisodeTitle key={ep.id}>
          <StyledButton id={`${ep.id}`} onClick={handleClick}>
            <span>
              S{ep.season}E{ep.number}:
            </span>{" "}
            <StyledName>{ep.name}</StyledName>
          </StyledButton>
        </EpisodeTitle>
      ))}
    </StyledEpisodeList>
  );
};
