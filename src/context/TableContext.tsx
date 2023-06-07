import { ContextProps, TableContextType } from '../types';
import { createContext, useState } from 'react';

const TableContext = createContext<TableContextType>({} as TableContextType);
const TableProvider: React.FC<ContextProps> = ({ children }) => {
  const [showMission, setShowMission] = useState<boolean>(true);
  const [showRocket, setShowRocket] = useState<boolean>(true);
  const [showLaunch, setShowLaunch] = useState<boolean>(true);
  const [showStatus, setShowStatus] = useState<boolean>(true);

  function switchShowMission() {
    setShowMission(!showMission);
  }
  function switchShowRocket() {
    setShowRocket(!showRocket);
  }
  function switchShowLaunch() {
    setShowLaunch(!showLaunch);
  }
  function switchShowStatus() {
    setShowStatus(!showStatus);
  }

  return (
    <TableContext.Provider
      value={{
        showMission,
        switchShowMission,
        showRocket,
        switchShowRocket,
        showLaunch,
        switchShowLaunch,
        showStatus,
        switchShowStatus,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
