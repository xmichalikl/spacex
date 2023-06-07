import { useContext } from 'react';
import styled from 'styled-components';
import { TableContext } from '../../context/TableContext';
import { useTranslation } from 'react-i18next';
import { Mission } from '../../types';

type SpacexRowProps = {
  mission: Mission;
  openDetails: (mission: Mission) => void;
};

const BodyRow = styled.tr`
  color: white;
  font-weight: 300;
  border-top: 1px solid #424345;
  &:hover {
    background-color: #303030;
  }
`;

const BodyCol = styled.td`
  padding: 10px 0 10px 0;
`;

const Status = styled.div`
  display: inline-block;
  padding: 5px 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;

function SpacexRow({ mission, openDetails }: SpacexRowProps) {
  const { t } = useTranslation('translation');
  const tableContext = useContext(TableContext);
  const { name, rocket, launch, status } = mission;

  function launchStatus() {
    return status ? `✔ ${t('missionStatus.successful')}` : `✖ ${t('missionStatus.unsuccessful')}`;
  }

  return (
    <BodyRow onClick={() => openDetails(mission)}>
      {tableContext.showMission ? <BodyCol>{name}</BodyCol> : null}
      {tableContext.showRocket ? <BodyCol>{rocket}</BodyCol> : null}
      {tableContext.showLaunch ? <BodyCol>{launch.toLocaleDateString()}</BodyCol> : null}
      {tableContext.showStatus ? (
        <BodyCol>
          <Status style={{ backgroundColor: status ? '#14850c' : '#f7665e' }}>
            {launchStatus()}
          </Status>
        </BodyCol>
      ) : null}
    </BodyRow>
  );
}

export default SpacexRow;
