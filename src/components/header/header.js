import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


const AppHeader = () => {
    const style={
        Container:{
            marginTop:10
        },
    }
    return (
        <Container style={style.Container}>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        </Container>
    )
}
export default AppHeader;