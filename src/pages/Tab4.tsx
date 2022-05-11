import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonItem, IonTextarea, IonLabel, IonCard,
    IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import './Tab4.css';

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 4</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonContent>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>UI Component</IonCardSubtitle>
                            <IonCardTitle>Toast component</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonItem>
                                {/*<IonLabel position="floating">Text here!</IonLabel>*/}
                                <IonTextarea disabled value="This text will be copied to the clipboard"></IonTextarea>
                            </IonItem>
                            <IonButton expand="block">Copy to clipboard</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Tab4;