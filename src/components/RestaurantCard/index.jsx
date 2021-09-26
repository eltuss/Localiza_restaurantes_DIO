import React from "react";
import ReactStars from "react-rating-stars-component";

import restaurante from "../../assets/restaurante-fake.png";


import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = () => (
<Restaurant>
    <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>Endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante}/>
</Restaurant>
);

export default RestaurantCard;

