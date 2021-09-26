
import React, { useState } from "react";
import logo from '../../assets/localiza_restaurante_logo.png'
import restaurante from '../../assets/restaurante-fake.png'
import TextField, { Input } from "@material/react-text-field/dist/index";
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from "./styles";
import {Card, RestaurantCard, Modal} from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

return(
    <Wrapper>
<Container>
    
    <Search>
        <Logo src={logo} alt="Logo do restaurante" />
        <TextField
        label="Pesquisar"
        outlined
        //onTrailingIconSelect={() => this.setState({ value: '' })}
        trailingIcon={<MaterialIcon role="button" icon="search" />}>

        <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        </TextField>
        <CarouselTitle>Na sua Área</CarouselTitle>
        <Carousel {...settings}>
            <Card photo={restaurante} title="Nome do Restaurante 01"/>
            <Card photo={restaurante} title="Nome do Restaurante 02"/>
            <Card photo={restaurante} title="Nome do Restaurante 03"/>
            <Card photo={restaurante} title="Nome do Restaurante 04"/>
            <Card photo={restaurante} title="Nome do Restaurante 05"/>
            <Card photo={restaurante} title="Nome do Restaurante 06"/>
            <Card photo={restaurante} title="Nome do Restaurante 07"/>
            
        </Carousel>
        <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
    </Search>
    <RestaurantCard/>
    </Container>
    <Map/>
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
    
);
}

export default Home;