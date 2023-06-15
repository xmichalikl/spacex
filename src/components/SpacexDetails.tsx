import styled from 'styled-components';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useTranslation } from 'react-i18next';
import { Mission } from '../types';

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  background-color: #303030;
  text-align: center;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  height: 50%;
`;

const ModalControls = styled.div`
  padding-top: 15px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #f7665e;
  &:active {
    background-color: #ff4c43;
  }
`;

type SpacexDetailsProps = {
  mission: Mission;
  showModal: boolean;
  closeModal: () => void;
};

function SpacexDetails({ mission, showModal, closeModal }: SpacexDetailsProps) {
  const { t } = useTranslation('translation');
  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   event.target.pauseVideo();
  // };
  const opts: YouTubeProps['opts'] = {
    width: '100%',
  };

  return (
    <Modal style={{ display: showModal ? 'block' : 'none' }}>
      <ModalContent>
        <div>
          <h2>
            {t('missionDetails.title', { mission: mission.name })}{' '}
            {mission.detailUrl ? (
              <img src={mission.detailUrl} alt="Img" style={{ height: '1em' }} />
            ) : null}
          </h2>
        </div>

        <YouTube videoId="_krgcofiM6M" opts={opts} />
        <ModalControls>
          <Button onClick={closeModal}>{t('buttons.close')}</Button>
        </ModalControls>
      </ModalContent>
    </Modal>
  );
}

export default SpacexDetails;
