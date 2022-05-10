import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonToast, IonCard, IonCardHeader, IonCardContent,
    IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Tab5.css';

const Tab5: React.FC = () => {

    const [showToast1, setShowToast1] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 5</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>UI Component</IonCardSubtitle>
                        <IonCardTitle>Toast component</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        
                        <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast</IonButton>
                        <IonToast
                            isOpen={showToast1}
                            onDidDismiss={() => setShowToast1(false)}
                            message="Your settings have been saved."
                            duration={1500}
                        />
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Tab5;