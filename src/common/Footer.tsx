import logo from '../assets/Logo/Logo.svg'
import { Container, Flex, Grid, Image, Text } from '@mantine/core'

export function Footer() {
    return (
        <section
            style={{
                background: '#4E5281',
                padding: '36px',
            }}
        >
            <Container>
                    <Flex justify={'center'}>
                        <Image src={logo} />
                    </Flex>
                    <Grid justify={'center'} gutter="xl" pt={36}>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}>
                                Преимущества
                            </Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}>
                                Цены
                            </Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}>
                                Отзывы
                            </Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}>
                                Частые вопросы
                            </Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}>
                                Поддержка
                            </Text>
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'center'} pt={28}>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '300',
                                fontFamily:'Roboto Condensed'
                            }}>
                                Пользовательское соглашение
                            </Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '300',
                                fontFamily:'Roboto Condensed'
                            }}>
                                Политика конфиденциальности
                            </Text>
                        </Grid.Col>
                        <Grid.Col span="content">
                            <Text component='a' href={'#'} style={{
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '300',
                                fontFamily:'Roboto Condensed'
                            }}>
                                Правила использования
                            </Text>
                        </Grid.Col>
                    </Grid>
            </Container>
        </section>
    )
}

export default Footer
