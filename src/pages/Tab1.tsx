import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { networkStatusChange } from '../hooks/network';

const Tab1: React.FC = () => {
  const [data, logCurrentNetworkStatus] = networkStatusChange();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Network</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText>
          {data}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
