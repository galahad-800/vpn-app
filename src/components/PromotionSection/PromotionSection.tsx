import { Box, Button, Container, Flex, Text } from '@mantine/core'

export function PromotionSection() {
    return (
        <section
            className={'gradient'}
            style={{
                background: '#4E5281',
                padding: '36px',
            }}
        >
            <Container size='xl'>
                <Flex direction={'column'} gap={'64'}>
                    <Flex>
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: '56px',
                                fontWeight: '700',
                            }}
                        >
                            Попробуйте за 1 рубль на 7 дней!
                        </Text>
                    </Flex>
                    <Flex justify={'center'} gap={'190'}>
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: '20px',
                                fontWeight: '600',
                            }}
                        >
                            Акция заканчивается через 24 часа!
                        </Text>
                        <Box>
                            <Button radius='16px' bg='#FF1441'>
                                {' '}
                                Получить пробный период
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}
