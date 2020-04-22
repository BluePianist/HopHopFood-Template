import React from 'react';
import {IonImg} from '@ionic/react'
import './ItemBox.css';

interface ContainerProps { }

const ItemBox: React.FC<ContainerProps> = () => {
  return (
    <div className="item-container">
      <div className="circle">
        <IonImg className="depose-par-image" src ="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/38912503_2585135504845955_8951608165883969536_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQnuHgRj-IEBfvKq5WwagKBA2Rp21On2sB96JrNdfPKl9VH8B1dGOAaCzVunGkUWjN0&_nc_ht=scontent-cdt1-1.xx&oh=9f4c3fec03e96734da6c28ae49d4306f&oe=5EC14D1F"/>
      </div>
      <div className="item">
        <IonImg className= "item-image" src="https://farmaciaweb.net/wp-content/uploads/2016/10/0924-600x600.png"/>
        <div className="text-item-container">
          <h2>Jus d'orange</h2>
          <p className = "disponible">Disponible à 534m</p>
          <p className="avant-le">Avant le 20 Juillet 2020</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
