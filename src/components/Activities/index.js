import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {Container, Header, Title, Card, CardHeader, CardBody, Avatar, Description, Bold, UserName, CardFooter, Details, Value, Divider, Date, DateLabel, Actions, Option, OptionLabel} from './styles';
import avatar from '../../images/avatar.png'

export default function Activitis(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar}/>
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@maluarmini</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>
                        Maria Luiza Armini
                    </UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>

                        <Divider />

                        <Date>
                            <Feather name="lock" color="#fff" size={14}/>
                            <DateLabel>há 2 anos</DateLabel>
                        </Date>

                    </Details>
                    
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                    </Actions>
                    
                </CardFooter>
            </Card>
        </Container>
    );
};