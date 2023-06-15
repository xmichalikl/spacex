import styled from 'styled-components';
import TableRow from './SpacexRow';
import TableHeader from './SpacexHeader';
import SpacexDetails from '../SpacexDetails';
import { useEffect, useRef, useState } from 'react';
import { Mission } from '../../types';
import { useTranslation } from 'react-i18next';

import { AllCharactersQueryQuery } from '../../gql/graphql';
import { graphql } from '../../gql';
import { useQuery } from 'urql';

const allCharactersQueryDocument = graphql(`
  query allCharactersQuery($page: Int!) {
    characters(page: $page) {
      results {
        name
        status
        created
        image
        location {
          name
        }
      }
    }
  }
`);

function getCharacterStatus(status: string) {
  if (status === 'Alive') return true;
  if (status === 'Dead') return false;
  else return null;
}

function createMissions(results: AllCharactersQueryQuery): Mission[] {
  if (results.characters?.results) {
    return results.characters.results.map((character) => ({
      name: character?.name ?? null,
      rocket: character?.location?.name ?? null,
      launch: character?.created ? new Date(character.created) : null,
      status: character?.status ? getCharacterStatus(character.status) : null,
      detailUrl: character?.image ?? null,
    }));
  } else {
    return [];
  }
}

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

function SpacexTable() {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const [details, setDetails] = useState<Mission | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
  const loadedPage = useRef<number>(1);
  const { t } = useTranslation('translation');

  const [{ data }, reexecuteQuery] = useQuery({
    query: allCharactersQueryDocument,
    variables: { page: loadedPage.current },
  });

  useEffect(() => {
    if (data) {
      setMissions([...missions, ...createMissions(data)]);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        loadedPage.current++;
        reexecuteQuery();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openDetails(mission: Mission) {
    setShowDetails(true);
    setDetails(mission);
  }

  function closeDetails() {
    setShowDetails(false);
    setDetails(null);
  }

  return (
    <>
      <h2>{t('titles.table')}</h2>
      <Table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <TableRow key={index} mission={mission} openDetails={openDetails} />
          ))}
        </tbody>
      </Table>

      {details ? (
        <SpacexDetails mission={details} showModal={showDetails} closeModal={closeDetails} />
      ) : null}
    </>
  );
}

export default SpacexTable;
