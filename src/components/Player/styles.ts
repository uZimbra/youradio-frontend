import { FiMusic } from "react-icons/fi";
import {
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { TbRepeat } from "react-icons/tb";
import { TiArrowShuffle } from "react-icons/ti";
import styled, { css } from "styled-components";

export const PlayerContainer = styled.div`
  user-select: none;
  padding: 3rem 4rem;
  width: 26.5rem;
  height: 100vh;

  background-color: var(--player-background);
  color: var(--gray-100);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 600;
  }
`;

export const PlayerHeader = styled.header`
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type PlayerCoverProps = {
  filled?: boolean;
};

export const PlayerCover = styled.div<PlayerCoverProps>`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed var(--gray-800);
  border-radius: 0.1rem;
  background: linear-gradient();

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    props.filled &&
    css`
      padding: 0rem;
      border: none;

      strong {
        display: block;
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1.75rem;
      }
    `}
`;

type PlayerFooterProps = {
  empty?: boolean;
};

export const PlayerFooter = styled.footer<PlayerFooterProps>`
  align-self: stretch;

  ${(props) =>
    !props.empty &&
    css`
      opacity: 0.5;

      button {
        cursor: default;
      }
    `}

  .player-time-line {
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    span {
      display: inline-block;
      width: 4rem;
      text-align: center;
    }

    .slider {
      flex: 1;
      display: flex;
      justify-content: center;

      .empty-slider {
        width: 100%;
        height: 4px;
        background-color: var(--red-track);
        border-radius: 2px;
      }
    }
  }

  .player-controllers {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;
  }
`;

type ButtonProps = {
  disabled?: boolean;
  playButton?: boolean;
};

const Button = styled.button<ButtonProps>`
  transition: filter 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(0.7);
  }

  :disabled {
    opacity: 0.5;

    cursor: default;
  }
`;

export const PlayerFooterControllerButton = styled(Button).attrs({
  type: "button",
})`
  background: transparent;
  border: 0;
  font-size: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.playButton &&
    css`
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background-color: var(--red-button);

      &:hover:not(:disabled) {
        filter: brightness(0.85);
      }
    `}
`;

type ActiveIconProps = {
  isActive?: boolean;
};

export const MusicIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  object-fit: contain;
`;

export const PlayIcon = styled(MdPlayArrow)`
  color: var(--white);
`;

export const PauseIcon = styled(MdPause)`
  color: var(--white);
`;

export const ShuffleIcon = styled(TiArrowShuffle)<ActiveIconProps>`
  color: var(--white);
  ${(props) =>
    props.isActive &&
    css`
      color: var(--red-button);
    `}
`;

export const PreviousIcon = styled(MdSkipPrevious)`
  color: var(--white);
`;

export const NextIcon = styled(MdSkipNext)`
  color: var(--white);
`;

export const RepeatIcon = styled(TbRepeat)<ActiveIconProps>`
  color: var(--white);
  ${(props) =>
    props.isActive &&
    css`
      color: var(--red-button);
    `}
`;
