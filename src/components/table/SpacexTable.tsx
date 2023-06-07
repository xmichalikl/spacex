import styled from 'styled-components';
import TableRow from './SpacexRow';
import TableHeader from './SpacexHeader';
import SpacexDetails from '../SpacexDetails';
import missions from '../../missions';
import { useState } from 'react';
import { Mission } from '../../types';
import { useTranslation } from 'react-i18next';

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

function SpacexTable() {
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const [details, setDetails] = useState<Mission | null>(null);
  const { t } = useTranslation('translation');

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
