import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
                    <IonSlides pager={true} options={slideOpts}>
                        <IonSlide>
                            <h1>Slide 1</h1>
                        </IonSlide>
                        <IonSlide>
                            <h1>Slide 2</h1>
                        </IonSlide>
                        <IonSlide>
                            <h1>Slide 3</h1>
                        </IonSlide>
                    </IonSlides>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Tab4;