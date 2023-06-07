import { Client } from 'urql';

export type ContextProps = {
  children: React.ReactNode;
};

export type ApiContextType = {
  client: Client;
};

export type TableContextType = {
  showMission: boolean;
  switchShowMission: () => void;
  showRocket: boolean;
  switchShowRocket: () => void;
  showLaunch: boolean;
  switchShowLaunch: () => void;
  showStatus: boolean;
  switchShowStatus: () => void;
};
