import React from 'react';
import { AntDesign} from '@expo/vector-icons';
import {Container, Header, Title, Img, UserName,Name, Perfil, SeePerfil, SeePerfilText, ViewAll, Account,BlockView, TextAccount, Infos, TextInfo,ScrollViewAccount, BlockIcon} from './styles';
import avatar from '../../images/gal.jpg';

export default function Profile(){
    return (
        <ViewAll>
            <ScrollViewAccount>
        <Container>
            <Header>
                <Title>Ajustes</Title>
                <Img source={avatar}/>
                <UserName>@galgadot</UserName>
                <Name>Gal Gadot Varsano</Name>
                <Perfil>
                    <SeePerfil>
                    <SeePerfilText>Ver meu perfil</SeePerfilText>
                    <AntDesign name="right" size={20} color="#10c86e"/>
                    </SeePerfil> 
                </Perfil>
            </Header>
        </Container>
        
        <Account>MINHA CONTA</Account>
        <BlockView>
            <Infos>
            <TextAccount>Meu PicPay</TextAccount>
            <BlockIcon>
            <TextInfo>@galgadot</TextInfo>
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Meu Número</TextAccount>
            <BlockIcon>
            <TextInfo>(27)99999-9999</TextInfo>
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Meu e-mail</TextAccount>
            <BlockIcon>   
            <TextInfo>galgadot@gmail.com</TextInfo>
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Dados Pessoais</TextAccount>
            <BlockIcon>   
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Conta Bancária</TextAccount>
            <BlockIcon>   
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Taxas e limites</TextAccount>
            <BlockIcon>   
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Meus endereços</TextAccount>
            <BlockIcon>   
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Meus favoritos</TextAccount>
            <BlockIcon>   
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
            <Infos>
            <TextAccount>Validar identidade</TextAccount>
            <BlockIcon>   
            <AntDesign name="right" size={16} color="gray"/>
            </BlockIcon>
            </Infos>
        </BlockView>
        </ScrollViewAccount>
        </ViewAll>
        
        

    );
}