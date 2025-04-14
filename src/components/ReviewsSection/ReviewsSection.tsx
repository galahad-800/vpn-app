import { AppShell, Card, Container, Grid, Text } from '@mantine/core'


export function ReviewsSection() {
    return (
        <AppShell.Section style={{ background: '#FF7401' }}>
            <Container px={20} pt={50} pb={65}>
                <Text
                    style={{
                        color: '#FFF',
                        fontSize: 'var(--var-title-size-md)',
                        fontWeight: '700',
                    }}
                >
                    Отзывы пользователей
                </Text>

                <Grid className="review-grid-container">
                    <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                Пользуюсь уже несколько месяцев. Скорость отличная, соединение стабильное. Даже в
                                путешествиях всё работает без сбоев.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4, md: 3 }} offset={{ base: 0, sm:2, md: 1 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                До этого пользовался бесплатными VPN, но они постоянно отключались. Здесь всё на высоте
                                — поддержка быстро отвечает, скорость радует.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 5, md: 3 }} offset={{ base: 0, sm: 2,md: 1 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                С этим VPN наконец-то можно наслаждаться YouTube без рекламы! Видео загружаются быстро,
                                а рекламные вставки исчезли. Это настоящая находка для тех, кто не любит прерывания во
                                время просмотра.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4, md: 3 }} offset={{ base: 0, sm: 1,md: 0 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                VPN — 🔥 Telegram, Instagram, YouTube — всё летает. Рад, что нашёл нормальный сервис,
                                который реально работает.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                Подключение моментальное, доступ к нужным сайтам без проблем. Был один момент со сменой
                                сервера, но техподдержка решила за минуту. Спасибо!
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                Очень нравится ваш VPN! Лёгкая установка, никаких сложных настроек. Подключаюсь за
                                секунды и не переживаю за безопасность.
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
                        <Card radius="lg">
                            <Text style={{
                                color: '#373535',
                                fontSize: '18px',
                                fontWeight: '300',
                                fontFamily: 'Roboto Condensed',
                            }}>
                                Крутой сервис! Сначала взял пробный период, а потом сразу оформил годовую подписку.
                                Работает идеально, рекомендую всем!
                            </Text>
                        </Card>
                    </Grid.Col>
                </Grid>


            </Container>
        </AppShell.Section>
    )
}
