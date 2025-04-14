import { Box, Button, Group, Card, Container, Flex, Text, TextInput } from '@mantine/core'

export function Access() {
    return (
        <section style={{
            padding: '28px',
            background: '#4E5281',
        }}>
            <Container size="xl" p={'xl'}>
                <Flex justify={'center'}>
                    <Text style={{
                        fontFamily: 'Nunito',
                        fontSize: '72px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '88px',
                        color: '#FFF',
                    }}>Твоя подписка в AlexlNos VPN</Text>
                </Flex>
            </Container>
            <Container size="sm">
                <Flex direction={'column'} gap={'48'}>
                    <Card style={{
                        background: '#FFF',
                        borderRadius: '48px',
                    }}>
                        <Flex direction={'column'} gap={'md'}>
                            <Flex justify={'center'} gap={'md'}>
                                <Group>
                                    <Text style={{
                                        fontFamily: 'Nunito',
                                        fontSize: '28px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px',
                                        color: '#000',
                                    }}>Пользователь:</Text>
                                    <Card style={{
                                        background: '#EA5DA0',
                                        borderRadius: '18px',
                                    }}>
                                        <Text style={{
                                            fontFamily: 'Nunito',
                                            fontSize: '28px',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            lineHeight: '35px',
                                            color: '#FFF',
                                        }}>Nickname</Text>
                                    </Card>
                                </Group>
                            </Flex>
                            <Flex justify={'center'} gap={'md'}>
                                <Group>
                                    <Text style={{
                                        fontFamily: 'Nunito',
                                        fontSize: '28px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px',
                                        color: '#000',
                                    }}>Имя:</Text>
                                    <Card style={{
                                        background: '#EA5DA0',
                                        borderRadius: '18px',
                                    }}>
                                        <Text style={{
                                            fontFamily: 'Nunito',
                                            fontSize: '28px',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            lineHeight: '35px',
                                            color: '#FFF',
                                        }}>Nickname</Text>
                                    </Card>
                                </Group>
                            </Flex>

                            <Flex justify={'center'} gap={'md'}>
                                <Group>
                                    <Text style={{
                                        fontFamily: 'Nunito',
                                        fontSize: '28px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px',
                                        color: '#000',
                                    }}>Статус:</Text>
                                    <Card style={{
                                        background: '#18D341',
                                        borderRadius: '18px',
                                    }}>
                                        <Text style={{
                                            fontFamily: 'Nunito',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '25px',
                                            color: '#FFF',
                                        }}>Активен</Text>
                                    </Card>
                                </Group>
                            </Flex>


                            <Flex justify={'center'} gap={'md'}>
                                <Group>
                                    <Text style={{
                                        fontFamily: 'Nunito',
                                        fontSize: '28px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px',
                                        color: '#000',
                                    }}>Лимит Трафика:</Text>
                                    <Card>
                                        <Text style={{
                                            fontFamily: 'Nunito',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '25px',
                                            color: '#000',
                                        }}>Number</Text>
                                    </Card>
                                </Group>
                            </Flex>
                            <Flex justify={'center'} gap={'md'}>
                                <Group>
                                    <Text style={{
                                        fontFamily: 'Nunito',
                                        fontSize: '28px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px',
                                        color: '#000',
                                    }}>Использовано:</Text>
                                    <Card>
                                        <Text style={{
                                            fontFamily: 'Nunito',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '25px',
                                            color: '#000',
                                        }}>Number</Text>
                                    </Card>
                                </Group>
                            </Flex>
                            <Flex justify={'center'} gap={'md'}>
                                <Group>
                                    <Text style={{
                                        fontFamily: 'Nunito',
                                        fontSize: '28px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px',
                                        color: '#000',
                                    }}>Истекает:</Text>
                                    <Card>
                                        <Text style={{
                                            fontFamily: 'Nunito',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '25px',
                                            color: '#000',
                                        }}>Date (Time)</Text>
                                    </Card>
                                </Group>
                            </Flex>
                        </Flex>
                        <Flex justify={'center'}>
                            <Box>
                                <Button radius="16px" bg="#31DFF6" size={'xl'}>Подключить</Button>
                            </Box>
                        </Flex>
                    </Card>
                    <Card style={{
                        background: '#FFF',
                        borderRadius: '48px',
                    }}>

                            <Flex align={'center'} direction='column' gap={'md'}>
                                <Text style={{
                                    color: '#373535',
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    fontFamily: 'Roboto Condensed',
                                }}>Твоя ссылка на подписку. </Text>
                                <Text style={{
                                    color: '#373535',
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    fontFamily: 'Roboto Condensed',
                                }}>Именно ее нужно вставлять в программы!</Text>
                                <Box w={'640px'}>
                                    <TextInput
                                        placeholder="link"
                                        variant="outline"
                                        style={{
                                            border: '2px dashed blue',
                                            padding: '10px',
                                            borderRadius: "24px"
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Button  radius='16px' bg='#FF1441' size={'lg'} p={'8 16 8 16'} fz={'20px'} fw={'600'}> Скопировать</Button>
                                </Box>
                            </Flex>







                    </Card>
                </Flex>


            </Container>
        </section>
    )
}