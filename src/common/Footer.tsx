import logo from '../assets/Logo/Logo.svg'
import { Container, Flex, Image, Text } from '@mantine/core'

export function Footer() {
    return (
        <section
            style={{
                background: '#4E5281',
                padding: '36px',
            }}
        >
            <Container>
                <Flex direction={'column'} gap={'xl'}>
                    <Flex justify={'center'}>
                        <Image src={logo} />
                    </Flex>
                    <Flex
                        gap='xl'
                        justify={'center'}
                        style={{
                            color: '#fff',
                            fontSize: '20px',
                            fontWeight: '600',
                        }}
                    >
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
                    <Flex
                        gap='xl'
                        justify={'center'}
                        style={{
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: '300',
                        }}
                    >
                        <Text component='a' href={'#'}>
                            Пользовательское соглашение
                        </Text>
                        <Text component='a' href={'#'}>
                            Политика конфиденциальности
                        </Text>
                        <Text component='a' href={'#'}>
                            Правила использования
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}

export default Footer
