import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonItem, IonTextarea, IonLabel, IonCard,
    IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import './Tab4.css';

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

const Tab4: React.FC = () => {
    const [text, setText] = useState<string>();

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
                                <IonLabel position="floating">Your own text</IonLabel>
                                <IonTextarea></IonTextarea>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>UI Component</IonCardSubtitle>
                            <IonCardTitle>Toast component</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonItem>
                                <IonLabel position="floating">Your own text</IonLabel>
                                <IonTextarea></IonTextarea>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Tab4;