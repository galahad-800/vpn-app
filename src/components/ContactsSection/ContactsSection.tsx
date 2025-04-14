import LogoCard from '../../assets/Block9/LogoCard.png'
import { AppShell, Card, Container, Flex, Grid, Group, Image, Text } from '@mantine/core'

export function ContactsSection() {
    return (
        <AppShell.Section>
            <Container px={20}>
                <Text
                    style={{
                        color: '#2C4D96',
                        fontSize: 'var(--var-title-size-md)',
                        fontWeight: '700',
                    }}
                >
                    Поддержка и контакты
                </Text>
                <Grid>
                    <Grid.Col offset={{ base: 0, sm: 1 }} span={{ base: 12, xs: 12, sm: 10, md: 9, lg:7 }}>
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
                                            component="a"
                                            href={'#'}
                                        >
                                            {' '}
                                            Telegram{' '}
                                        </Text>
                                    </Text>
                                </Flex>
                            </Group>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>
        </AppShell.Section>
    )
}
