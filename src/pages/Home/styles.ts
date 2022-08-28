import { MdPause, MdPlayArrow } from "react-icons/md";
import styled from "styled-components";

export const HomePageContainer = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const MusicSection = styled.section`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th,
    td {
      padding: 0.4rem 1rem;
    }

    th {
      color: var(--gray-200);
      text-align: left;
    }

    td {
      font-size: 0.875rem;

      div {
        display: flex;
        align-items: center;
      }

      img {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: 0.1rem;
        margin-right: 1rem;
      }

      span {
        color: var(--gray-800);
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;
      }
    }

    tbody {
      tr {
        transition: background-color 0.2s;

        :hover {
          background-color: var(--gray-100);
          cursor: pointer;
        }
      }
    }
  }
`;

export const PlayButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border: 1px solid var(--gray-100);

  transition: filter 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(0.95);
  }
`;

export const PlayIcon = styled(MdPlayArrow)`
  color: var(--red-button);
`;

export const PauseIcon = styled(MdPause)`
  color: var(--red-button);
`;