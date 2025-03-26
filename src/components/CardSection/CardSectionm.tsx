import { Card, Container, Flex, Grid, Text } from '@mantine/core'

export function CardSection() {
    return (
        <section
            style={{
                background: '#EA5DA0',
                padding: '36px',
            }}
        >
            <Container size='xl'>
                <Flex justify={'left'}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: '72px',
                            fontWeight: '700',
                        }}
                    >
                        Почему наш VPN?
                    </Text>
                </Flex>
                <Flex>
                    <Grid>
                        <Grid.Col>
                            <Flex justify={'space-between'} gap={'md'}>
                                <Card
                                    w={412}
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
                                    <Text>
                                        Мощные сервера без ограничения трафика
                                    </Text>
                                </Card>

                                <Card
                                    w={412}
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
                                    <Text>
                                        Защита IP-адреса, отсутствие логов
                                    </Text>
                                </Card>

                                <Card
                                    w={412}
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
                                    <Text>
                                        Обход гео-блокировок (Netflix, YouTube,
                                        соцсети)
                                    </Text>
                                </Card>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col>
                            <Flex justify={'space-between'} gap={'md'}>
                                <Card
                                    w={412}
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
                                    <Text>
                                        Работает на Windows, Mac, iOS, Android,
                                        Linux
                                    </Text>
                                </Card>
                                <Card
                                    w={412}
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
                                    <Text>подключение в 1 клик</Text>
                                </Card>
                                <Card
                                    w={412}
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
                                    <Text>одна подписка для всех гаджетов</Text>
                                </Card>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Flex>
            </Container>
        </section>
    )
}
