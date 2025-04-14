import vpnLogo from '../../assets/Block1/LogoVpn.png'
import { AppShell, Box, Button, Container, Grid, Image, Text } from '@mantine/core'

export function IntroSection() {


    return (
        <AppShell.Section>
            <Box bg={{
                base: 'radial-gradient(72.15% 34.42% at 50% 68.66%, var(--Primary-Yellow, #FFC301) 0%, var(--Secondary-Dark-Navy, #4E5281) 100%)',
                sm: 'radial-gradient(20% 50.15% at 66.88% 50%, var(--Primary-Yellow, #FFC301) 0%, var(--Secondary-Dark-Navy, #4E5281) 100%)',
            }}>

                <Container px={20}>
                    <Grid align="center">
                        <Grid.Col span={{ base: 12, sm: 6 }} offset={{ base: 0, sm: 1 }} style={{ zIndex: '2' }}>
                            <Grid columns={6}>
                                <Grid.Col span={6}>
                                    <Text
                                        style={{
                                            color: '#FFF',
                                            fontSize: '40px',
                                            weight: '700',
                                        }}
                                    >
                                        Скоростной и безопасный VPN для свободы в
                                        интернете
                                    </Text>
                                </Grid.Col>

                                <Grid.Col span={6}>
                                    <Text
                                        style={{
                                            color: '#FFF',
                                            fontSize: '20px',
                                            weight: '600',
                                        }}
                                    >
                                        Обход блокировок, защита данных, высокая
                                        скорость
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={{ base: 6, sm: 3 }}>
                                    <Text variant="body1">
                                        Попробовать за 1 рубль на 7 дней
                                    </Text>
                                </Grid.Col>

                                <Grid.Col span={{ base: 6, sm: 3 }}>
                                    <Box>
                                        <Button radius="16px" bg="#31DFF6">
                                            Попробовать за 1 ₽
                                        </Button>
                                    </Box>
                                </Grid.Col>


                            </Grid>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6 }} offset={{ base: 0, sm: -1 }} style={{ zIndex: '1' }}>
                            <Image src={vpnLogo} alt="Logo" mah={'100%'} />
                        </Grid.Col>
                    </Grid>

                </Container>
            </Box>

        </AppShell.Section>
    )
}
