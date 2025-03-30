import { Box, Card, Container, Flex, Text } from '@mantine/core'

const reviews = [
    {
        id: 1,
        text: 'Пользуюсь уже несколько месяцев. Скорость отличная, соединение стабильное. Даже в путешествиях всё работает без сбоев.',
    },
    {
        id: 2,
        text: 'До этого пользовался бесплатными VPN, но они постоянно отключались. Здесь всё на высоте — поддержка быстро отвечает, скорость радует.',
    },
    {
        id: 3,
        text: 'Подключение моментальное, доступ к нужным сайтам без проблем. Был один момент со сменой сервера, но техподдержка решила за минуту. Спасибо!',
    },
    {
        id: 4,
        text: 'VPN — 🔥 Telegram, Instagram, YouTube — всё летает. Рад, что нашёл нормальный сервис, который реально работает.',
    },
    {
        id: 5,
        text: 'крутой сервис! Сначала взял пробный период, а потом сразу оформил годовую подписку. Работает идеально, рекомендую всем!',
    },
    {
        id: 6,
        text: 'Очень нравится ваш VPN! Лёгкая установка, никаких сложных настроек. Подключаюсь за секунды и не переживаю за безопасность.',
    },
    {
        id: 7,
        text: 'Подключение моментальное, доступ к нужным сайтам без проблем. Был один момент со сменой сервера, но техподдержка решила за минуту. Спасибо!',
    },
]

export function ReviewsSection() {
    return (
        <section
            style={{
                background: '#FF7401',
                padding: '0px 0px 64px 0px',
            }}
        >
            <Container size='xl'>
                <Flex gap={'md'} p={'50 0 0 0'}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: '72px',
                            fontWeight: '700',
                        }}
                    >
                        Отзывы пользователей
                    </Text>
                </Flex>
            </Container>
            <Container size={'xxl'}>
                <Box>
                    <Flex direction='column' gap='md' align='center'>
                        <Flex wrap='wrap' justify='center' gap='md'>
                            {reviews.slice(0, 3).map(review => (
                                <Card
                                    key={review.id}
                                    shadow='sm'
                                    padding='lg'
                                    radius='md'
                                    style={{ width: '300px' }}
                                >
                                    <Text size='sm'>{review.text}</Text>
                                </Card>
                            ))}
                        </Flex>

                        <Flex wrap='wrap' justify='center' gap='md'>
                            {reviews.slice(3, 7).map(review => (
                                <Card
                                    key={review.id}
                                    shadow='sm'
                                    padding='lg'
                                    radius='md'
                                    style={{ width: '300px' }}
                                >
                                    <Text size='sm'>{review.text}</Text>
                                </Card>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </section>
    )
}
