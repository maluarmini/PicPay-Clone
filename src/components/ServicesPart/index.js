import React from 'react';

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img7 from '../../images/07.png';
import img6 from '../../images/06.png';

import { Container, ServiceTitle, Option, Img, Infos, Strong, Label } from './styles';

const items = [
    {
        key: String(Math.random()),
        img: img1,
        strong: 'Recarga de celular',
        label: 'Vivo,Claro, TIM, Oi, Nextel e mais',
    },
    {
        key: String(Math.random()),
        img: img6,
        strong: 'Pagar Conta',
        label: 'Pague sua conta de luz, água, boletos bancários e etc',
    },
    {
        key: String(Math.random()),
        img: img7,
        strong: 'Cobrar',
        label: 'Cobre um amigo',
    },
    {
        key: String(Math.random()),
        img: img2,
        strong: 'Uber',
        label: 'Pague seu uber com PicPay',
    },
]


export default function Services(){
    return (
    <Container>
        <ServiceTitle>SERVIÇOS</ServiceTitle>
        {items.map((item) => (
            <Option key={item.key}>
            <Img source={item.img}/>
            <Infos>
                <Strong>{item.strong}</Strong>
                <Label>{item.label}</Label>
            </Infos>
            </Option>
        ))}
    </Container>);
}