import { IonContent, IonPage, IonText, IonInfiniteScroll, IonButton, IonImg, IonFooter, IonToolbar, IonTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import ItemBox from '../components/ItemBox';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonInfiniteScroll className="scrollable">
          <IonImg className = "profile-picture" src="https://media-exp1.licdn.com/dms/image/C4D03AQEYPex2ultCDg/profile-displayphoto-shrink_800_800/0?e=1593043200&v=beta&t=g6YMn37B_AD3_zZKOfCcn_rBqKjHjs6tXaGhdorZLC0" />
          <div className="welcome-message">
            <IonText>
              <h1> Salut Michel </h1>
            </IonText>
            <IonText> 
              <h4> Tu as donné 39 produits et collecté 45 autres ! </h4>
            </IonText>
          </div>
          <div className="button-container">
            <IonButton size="small">Particuliers</IonButton>
            <IonButton size="small">Garde-mangers</IonButton>
            <IonButton size="small">Commerçants</IonButton>
          </div>
          <ItemBox/>
          <ItemBox/>
          <ItemBox/>
          <ItemBox/>
          {/* <ExploreContainer /> */}
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
