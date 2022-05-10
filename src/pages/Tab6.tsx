import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
    IonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Tab6.css';

const [showAlert1, setShowAlert1] = useState(false);

const Tab6: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 6</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={'Alert'}
                    subHeader={'Subtitle'}
                    message={'This is an alert message.'}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default Tab6;