import pc from '../../assets/Block3/PC.png'
import { Container, Text, Image, AppShell, Grid } from '@mantine/core'

export function InstructionsSection() {
    return (
        <AppShell.Section>
            <Container px={20} pt={36} pb={36}>
                <Text
                    style={{
                        color: '#2C4D96',
                        fontSize: 'var(--var-title-size-md)',
                        fontWeight: '700',
                    }}
                >
                    Как это работает?
                </Text>
                <Grid align={'center'}>
                    <Grid.Col span={{ base: 12, sm: 4 }} offset={{ base: 0, sm: 1 }}>
                        <Image src={pc} className="gradient" mah={'100%'} />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }} offset={{ base: 0, sm: 1 }}>
                        <Grid align={'center'}>
                            <Grid.Col>
                                <Text
                                    c={'#0C8DFE'}
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: '700',
                                    }}
                                >
                                    Пошаговое описание подключения:
                                </Text>
                            </Grid.Col>
                            <Grid.Col>
                                <Text style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto Condensed',
                                    fontWeight: '400px',
                                }}>
                                    Скачайте приложение или подключитесь через
                                    Telegram-бота{' '}
                                </Text>
                            </Grid.Col>
                            <Grid.Col>
                                <Text style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto Condensed',
                                    fontWeight: '400px',
                                }}>
                                    Выберите сервер – список стран и регионов{' '}
                                </Text>
                            </Grid.Col>
                            <Grid.Col>
                                <Text style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto Condensed',
                                    fontWeight: '400px',
                                }}>
                                    Нажмите "Подключиться" – зашифрованный канал
                                    активен{' '}
                                </Text>
                            </Grid.Col>
                            <Grid.Col>
                                <Text style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto Condensed',
                                    fontWeight: '400px',
                                }}>
                                    Наслаждайтесь интернетом без ограничений
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>

                </Grid>

            </Container>
        </AppShell.Section>
    )
}
