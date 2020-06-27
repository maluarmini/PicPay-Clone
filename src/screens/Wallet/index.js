import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, Value, Bold, EyeButton, Info, Actions, Action, ActionLabel, UseBalance, UseBalanceTitle,PaymentMethods,PaymentMethodsTitle, Card, CardDetails, CardTitle, CardInfo, Img, Container, CardBody, AddButton, AddLabel, UseTicketButton, UseTicketLabel} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility(){
        if(isVisible === true){
            setIsVisible(false);
        }else{
            setIsVisible(true);
        }
    }
    function handleToggleUseBalance(){
        if(useBalance === true){
            setUseBalance(false);
        }else{
            setUseBalance(true);
        }
    }

    return (
        <Wrapper>
            <Container>
            <Header 
            colors={
                useBalance ? ['#52e78c', '#1ab563'] : ['#D3D3D3','#868686']
                
            }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} color="#fff" size={28} />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo esta rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <MaterialCommunityIcons name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch value={useBalance} onValueChange={handleToggleUseBalance}/>
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>
                <Card>
                    <CardBody>
                    <CardDetails>
                        <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                        <CardInfo>Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
                    </CardDetails>
                    <Img source={creditCard} resizeMode="contain" />
                    </CardBody>
                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>

                <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-outline" size={30} color="#0Db060" />
                    <UseTicketLabel>Usar código promocional</UseTicketLabel>
                </UseTicketButton>
            </PaymentMethods>
            </Container>
        </Wrapper>
    );
}
