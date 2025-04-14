import { AppShell, Box, Card, Container, Flex, Text } from '@mantine/core'

export const reviews = [
    {
        oneLine: [
            {
                id: 1,
                text: 'Пользуюсь уже несколько месяцев. Скорость отличная, соединение стабильное. Даже в путешествиях всё работает без сбоев.',
            },
            {
                two: [
                    {
                        id: 2,
                        text: 'До этого пользовался бесплатными VPN, но они постоянно отключались. Здесь всё на высоте — поддержка быстро отвечает, скорость радует.',
                    },
                    {
                        id: 3,
                        text: 'Подключение моментальное, доступ к нужным сайтам без проблем. Был один момент со сменой сервера, но техподдержка решила за минуту. Спасибо!',
                    },
                ],
            },
            {
                id: 4,
                text: 'VPN — 🔥 Telegram, Instagram, YouTube — всё летает. Рад, что нашёл нормальный сервис, который реально работает.',
            },
        ],
    },
    {
        twoLine: [
            {
                three: [
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
                ],
            },
        ],
    },
]

export function ReviewsSection() {
    return (
        <AppShell.Section style={{ background: '#FF7401' }}>
            <Container px={20}>
                <Flex gap={'md'} p={'50 0 0 0'}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: 'var(--var-title-size-md)',
                            fontWeight: '700',
                        }}
                    >
                        Отзывы пользователей
                    </Text>
                </Flex>
            </Container>
            <Container px={20}>
                <Flex direction="column" gap="lg">
                    {reviews.map((row, rowIndex) => (
                        <Flex
                            key={rowIndex}
                            justify="space-between"
                            w="85%"
                            style={{
                                margin: 'auto',
                            }}
                        >
                            {row.oneLine && (
                                <>
                                    <Card w={305} h={125} radius="lg">
                                        {row.oneLine[0].text}
                                    </Card>

                                    <Flex
                                        justify="space-between"
                                        align="center"
                                        w="42%"
                                    >
                                        {
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            // @ts-expect-error
                                            row.oneLine[1].two.map(item => (
                                                <Card
                                                    key={item.id}
                                                    w={305}
                                                    h={150}
                                                    radius="lg"
                                                >
                                                    {item.text}
                                                </Card>
                                            ))
                                        }
                                    </Flex>

                                    <Card w={305} h={125} radius="lg">
                                        {row.oneLine[2].text}
                                    </Card>
                                </>
                            )}

                            {row.twoLine &&
                                row.twoLine.map(subRow => (
                                    <Box
                                        w="80%"
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <Flex
                                            key="someKey"
                                            gap="md"
                                            justify="space-between"
                                        >
                                            {subRow.three.map(review => (
                                                <Card
                                                    key={review.id}
                                                    w={305}
                                                    radius="lg"
                                                >
                                                    {review.text}
                                                </Card>
                                            ))}
                                        </Flex>
                                    </Box>
                                ))}
                        </Flex>
                    ))}
                </Flex>
            </Container>
        </AppShell.Section>
    )
}
