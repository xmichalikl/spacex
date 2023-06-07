import { useContext } from 'react';
import styled from 'styled-components';
import { TableContext } from '../context/TableContext';
import { useTranslation } from 'react-i18next';

const Settings = styled.div``;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  overflow: hidden;
  margin: 0 0 0 0;
  padding: 0 0 50px 0;
`;

const Item = styled.li`
  float: left;
  padding-right: 20px;
  &:last-child {
    padding-right: 0px;
    margin-left: auto;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;

function SpacexSettings() {
  const tableContext = useContext(TableContext);
  const { t, i18n } = useTranslation('translation');

  function showSymbol(show: boolean) {
    return show ? '✔' : '✖';
  }

  function changeLanguage() {
    if (i18n.language === 'en') {
      i18n.changeLanguage('sk');
    } else {
      i18n.changeLanguage('en');
    }
  }

  return (
    <Settings>
      <h2>{t('titles.settings')}</h2>
      <List>
        <Item>
          <Button
            style={{ backgroundColor: tableContext.showMission ? '#14850c' : '#424345' }}
            onClick={tableContext.switchShowMission}
          >
            {`${showSymbol(tableContext.showMission)} ${t('tableHeaders.mission')}`}
          </Button>
        </Item>
        <Item>
          <Button
            style={{ backgroundColor: tableContext.showRocket ? '#14850c' : '#424345' }}
            onClick={tableContext.switchShowRocket}
          >
            {`${showSymbol(tableContext.showRocket)} ${t('tableHeaders.rocket')}`}
          </Button>
        </Item>
        <Item>
          <Button
            style={{ backgroundColor: tableContext.showLaunch ? '#14850c' : '#424345' }}
            onClick={tableContext.switchShowLaunch}
          >
            {`${showSymbol(tableContext.showLaunch)} ${t('tableHeaders.launch')}`}
          </Button>
        </Item>
        <Item>
          <Button
            style={{ backgroundColor: tableContext.showStatus ? '#14850c' : '#424345' }}
            onClick={tableContext.switchShowStatus}
          >
            {`${showSymbol(tableContext.showStatus)} ${t('tableHeaders.status')}`}
          </Button>
        </Item>
        <Item>
          <Button onClick={changeLanguage} style={{ background: 'none' }}>
            {t('language')}
          </Button>
        </Item>
      </List>
    </Settings>
  );
}

export default SpacexSettings;
