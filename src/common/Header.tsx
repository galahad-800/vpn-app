import logo from '../assets/Logo/Logo.svg'
import { Box, Button, Container, Flex, Image, Text } from '@mantine/core'

export function Header() {
    return (
        <header
            style={{
                background: '#4E5281',
            }}
        >
            <Container size='md'>
                <Flex
                    justify='space-between'
                    align='center'
                    c='#FFF'
                    wrap='wrap'
                >
                    <Box p={'16'}>
                        <Image src={logo} alt='Logo' />
                    </Box>
                    <Flex gap='xl' wrap='wrap'>
                        <Text component='a' href={'#'}>
                            Преимущества
                        </Text>
                        <Text component='a' href={'#'}>
                            Ценыс
                        </Text>
                        <Text component='a' href={'#'}>
                            Отзывы
                        </Text>
                        <Text component='a' href={'#'}>
                            Частые вопросы
                        </Text>
                        <Text component='a' href={'#'}>
                            Поддержка
                        </Text>
                    </Flex>

                    <Flex direction='column'>
                        <Button
                            radius={'16px'}
                            style={{
                                background: '#31DFF6',
                            }}
                        >
                            Попробовать за 1 ₽
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </header>
    )
}
