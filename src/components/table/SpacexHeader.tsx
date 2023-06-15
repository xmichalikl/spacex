import styled from 'styled-components';
import { TableContext } from '../../context/TableContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const HeaderRow = styled.tr`
  font-family: 'Akwe Pro', sans-serif;
  font-size: 12px;
  color: #909191;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid #424345;
`;

const HeaderCol = styled.th`
  font-weight: 500;

  padding-bottom: 10px;
  &:first-child {
    width: 40%;
  }
`;

function SpacexHeader() {
  const tableContext = useContext(TableContext);
  const { t } = useTranslation('translation');

  return (
    <HeaderRow>
      {tableContext.showMission ? <HeaderCol>{t('tableHeaders.mission')}</HeaderCol> : null}
      {tableContext.showRocket ? <HeaderCol>{t('tableHeaders.rocket')}</HeaderCol> : null}
      {tableContext.showLaunch ? <HeaderCol>{t('tableHeaders.launch')}</HeaderCol> : null}
      {tableContext.showStatus ? <HeaderCol>{t('tableHeaders.status')}</HeaderCol> : null}
    </HeaderRow>
  );
}

export default SpacexHeader;
