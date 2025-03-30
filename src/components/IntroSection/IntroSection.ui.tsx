import vpnLogo from '../../assets/Block1/LogoVpn.png'
import { Box, Button, Container, Flex, Image, Text } from '@mantine/core'

export function IntroSection() {
    return (
        <section className='introgradient' style={{
            padding:'28px'
        }}>
            <Container size='lg' >
                <Flex justify='space-between' align='center'  >
                    <Flex direction='column' gap='md'>
                        <Flex direction='column' gap={'md'}>
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
                        </Flex>
                        <Flex align='center' gap={'md'}>
                            <Text variant='body1'>
                                Попробовать за 1 рубль на 7 дней
                            </Text>
                            <Box>
                                <Button radius='16px' bg='#31DFF6'>
                                    Попробовать за 1 ₽
                                </Button>
                            </Box>
                        </Flex>
                    </Flex>
                    <Box>
                        <Image src={vpnLogo} alt='Logo'/>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
