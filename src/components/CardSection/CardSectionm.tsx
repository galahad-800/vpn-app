import { AppShell, Box, Card, Container, Flex, Grid, Text } from '@mantine/core'

export function CardSection() {

    return (
        <AppShell.Section
            style={{
                background: '#EA5DA0',
            }}
        >
            <Container px={20} pb={36}>
                <Box>
                    <Flex justify={'left'}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 'var(--var-title-size-md)',
                                fontWeight: '700',
                            }}
                        >
                            Почему наш VPN?
                        </Text>
                    </Flex>
                    <Grid align={'stretch'}>
                        <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
                            <Card
                                w={'100%'}
                                h={'100%'}
                                radius={'16'}
                                style={{
                                    gap: '12px',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FF1441',
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        lineHeight: '35px',
                                    }}
                                >
                                    Быстрая скорость
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: '300',
                                    fontFamily: 'Roboto Condensed',
                                }}>
                                    Мощные сервера без ограничения трафика
                                </Text>
                            </Card>

                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
                            <Card
                                w={'100%'}
                                h={'100%'}
                                radius={'16'}
                                style={{
                                    gap: '12px',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FF1441',
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        lineHeight: '35px',
                                    }}
                                >
                                    Конфиденциальность
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: '300',
                                    fontFamily: 'Roboto Condensed',
                                }}>
                                    Защита IP-адреса, отсутствие логов
                                </Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
                            <Card
                                w={'100%'}
                                h={'100%'}
                                radius={'16'}
                                style={{
                                    gap: '12px',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FF1441',
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        lineHeight: '35px',
                                    }}
                                >
                                    Доступ к контенту
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: '300',
                                    fontFamily: 'Roboto Condensed',
                                }}>
                                    Обход гео-блокировок (Netflix, YouTube,
                                    соцсети)
                                </Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
                            <Card
                                w={'100%'}
                                h={'100%'}
                                radius={'16'}
                                style={{
                                    gap: '12px',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FF1441',
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        lineHeight: '35px',
                                    }}
                                >
                                    Совместимость
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: '300',
                                    fontFamily: 'Roboto Condensed',
                                }}>
                                    Работает на Windows, Mac, iOS, Android,
                                    Linux
                                </Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
                            <Card
                                w={'100%'}
                                h={'100%'}
                                radius={'16'}
                                style={{
                                    gap: '12px',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FF1441',
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        lineHeight: '35px',
                                    }}
                                >
                                    Простота использования
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: '300',
                                    fontFamily: 'Roboto Condensed',
                                }}>подключение в 1 клик</Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
                            <Card
                                w={'100%'}
                                h={'100%'}
                                radius={'16'}
                                style={{
                                    gap: '12px',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#FF1441',
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        lineHeight: '35px',
                                    }}
                                >
                                    Подключение нескольких устройств
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: '300',
                                    fontFamily: 'Roboto Condensed',
                                }}>одна подписка для всех гаджетов</Text>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Container>
        </AppShell.Section>
    )
}
