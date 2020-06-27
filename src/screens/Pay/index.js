import React from 'react';
import { Container, Wrapper, Header, HeaderSearch, HeaderFooter, SuggestionsBar, SuggestionsTitle} from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import NavigationPayment from '../../NavigationPayment';
import Suggestions from '../../components/Suggestions';
import ServicesPart from '../../components/ServicesPart';
import Contacts from '../../components/Contacts';


export default function Pay(){
    return (
        <Wrapper>
            <Container>
                <Header>
                    <HeaderSearch>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" /> 
                        <SearchBar placeholder="Quem você quer pagar?" containerStyle={{
                            backgroundColor: '#000',
                            width: 300,
                            marginLeft:15,
                            borderRadius: 32,
                        }}/>
                    </HeaderSearch>
                    <HeaderFooter>
                            <NavigationPayment></NavigationPayment>
                    </HeaderFooter>
                </Header>

                
                <SuggestionsBar>
                    <SuggestionsTitle>SUGESTÔES PARA VOCÊ</SuggestionsTitle>
                    <Suggestions/>
                </SuggestionsBar>
                <ServicesPart />
                <Contacts />
            </Container>
        </Wrapper>
        
    );
}