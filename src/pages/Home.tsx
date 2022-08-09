import './Home.css'
import { useAppSelector, useAppDispatch } from '../Redux/app/hooks'
import { userProduct } from '../Redux/features/DataSlice'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react'

type Home = {
  data: any
}
export const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.data.product)
  console.log(data)

  return (
    <IonPage>
      <IonHeader>
        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol offset-xl="1" size-xl="10">
              <IonToolbar>
                <IonTitle>React_Ionic</IonTitle>
              </IonToolbar>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent>
        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol offset-xl="1" size-xl="10">
              <IonButton expand="block" onClick={() => dispatch(userProduct())}>
                Show Product
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      {data && (
        <IonContent>
          <IonGrid class="ion-no-padding">
            <IonRow>
              <IonCol offset-xl="1" size-xl="10">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      {' '}
                      <p></p>
                      {data.title}
                    </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      )}
    </IonPage>
  )
}
