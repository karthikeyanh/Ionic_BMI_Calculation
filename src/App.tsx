import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonRouterOutlet, IonRow, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useRef, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBMI,setcalculatedBMI]=useState<number>();
  const weightref =useRef<HTMLIonInputElement>(null);
  const heightref =useRef<HTMLIonInputElement>(null);
    const calculateBMI=()=>
  {
const enteredweight=weightref.current!.value;
const enteredheight=heightref.current!.value;
if(!enteredheight||!enteredweight)
{
  return;
}
const bmi=+enteredweight/(+enteredheight*+enteredheight);
console.log(bmi);
  }
  const reset=()=>
{
  weightref.current!.value='100';
  
  heightref.current!.value='';

}
return(

  <IonApp>
    <IonHeader>
      <IonToolbar>
        <h2>
          Welcome
        </h2>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    
      <IonGrid>
      <IonRow>
        <IonCol>
          <IonLabel position='floating'>Your Height</IonLabel>
          <IonInput placeholder='Enter Height' type='number' ref={heightref}></IonInput>
       </IonCol></IonRow>
      <IonRow>
        <IonCol>
          <IonLabel position='floating'>Weight</IonLabel>
          <IonInput ref={weightref}></IonInput>
       </IonCol></IonRow>
      <IonRow>
        <IonCol className='ion-text-right'>
        <IonButton onClick={calculateBMI}>
        Calaulate BMI
       
      </IonButton>
      
      </IonCol>
      <IonCol className='ion-text-left'>
        <IonButton onClick={reset}>
        Reset
       
      </IonButton>
      
      </IonCol>
      </IonRow>
       </IonGrid>
    </IonContent>
  </IonApp>)
};

export default App;


