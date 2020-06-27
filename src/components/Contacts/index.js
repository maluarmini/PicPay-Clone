import React from 'react';

import {  Container, Title, Option, Img, Infos, UserName,Name } from './styles';
import avatar from '../../images/avatar.png';

const items = [
    {
        key: String(Math.random()),
        img: avatar,
        username: '@maluarmini',
        name: 'Maria Luiza Armini Correa',
    },
    {
        key: String(Math.random()),
        img: avatar,
        username: '@usuario1',
        name: 'Usuario 1',
    },
    {
        key: String(Math.random()),
        img: avatar,
        username: '@usuario2',
        name: 'Usuario 2',
    },
    {
        key: String(Math.random()),
        img: avatar,
        username: '@usuario3',
        name: 'Usuario 3',
    },
]


export default function Contacts(){
    return(
        <Container>
            <Title>CONTATOS</Title>
            {items.map((item) => (
                <Option>
                <Img source={item.img} resizeMode="contain"/>
                <Infos>
                    <UserName>{item.username}</UserName>
                    <Name>{item.name}</Name>
                </Infos>
            </Option>
            ))}
        </Container>
    );
}