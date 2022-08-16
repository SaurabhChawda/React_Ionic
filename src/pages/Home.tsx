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
  IonImg,
  IonText,
  IonCardSubtitle,
  IonCardContent,
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
        <IonGrid class="ion-no-padding" fixed>
          <IonRow>
            <IonCol>
              <IonToolbar>
                <IonTitle>React_Ionic</IonTitle>
              </IonToolbar>
              <IonButton expand="block" onClick={() => dispatch(userProduct())}>
                Show Product
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      {Object.keys(data).length !== 0 && (
        <IonContent>
          <IonGrid fixed class="ion-no-padding">
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonImg src={data.image} />
                  <IonCardHeader>
                    <IonCardSubtitle>Destination</IonCardSubtitle>
                    <IonCardTitle>{data.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{data.description}</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      )}
    </IonPage>
  )
}
