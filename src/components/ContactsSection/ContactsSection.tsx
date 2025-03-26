import LogoCard from '../../assets/Block9/LogoCard.png'
import { Card, Container, Flex, Group, Image, Text } from '@mantine/core'

export function ContactsSection() {
    return (
        <section
            style={{
                padding: '36px',
            }}
        >
            <Container size='xl'>
                <Flex>
                    <Text
                        style={{
                            color: '#2C4D96',
                            fontSize: '72px',
                            fontWeight: '700',
                        }}
                    >
                        Поддержка и контакты
                    </Text>
                </Flex>
                <Flex justify={'center'}>
                    <Card
                        radius={'196px'}
                        style={{
                            background: '#31DFF6',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Group>
                            <Image src={LogoCard} />
                            <Flex direction={'column'}>
                                <Text
                                    style={{
                                        color: '#FFF',
                                        fontSize: '56px',
                                        fontWeight: '700',
                                    }}
                                >
                                    AlexlNos VPN
                                </Text>
                                <Text
                                    style={{
                                        color: '#FFF',
                                        fontSize: '20px',
                                        fontWeight: '600',
                                    }}
                                >
                                    {' '}
                                    Свяжитесь с нами в{' '}
                                    <Text
                                        style={{
                                            color: '#FFF',
                                            fontSize: '20px',
                                            fontWeight: '600',
                                        }}
                                        component='a'
                                        href={'#'}
                                    >
                                        {' '}
                                        Telegram{' '}
                                    </Text>
                                </Text>
                            </Flex>
                        </Group>
                    </Card>
                </Flex>
            </Container>
        </section>
    )
}
