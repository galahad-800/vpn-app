import { AppShell, Box, Button, Container, Flex, Text } from '@mantine/core'

export function PromotionSection() {
    return (
        <AppShell.Section
            style={{
                background: 'radial-gradient(40% 50% at 50% 50%, var(--Primary-Yellow, #FFC301) 0%, var(--Secondary-Dark-Navy, #4E5281) 100%)',
            }}
        >
            <Container px={20}>
                <Box>
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
                        <Flex justify={'end'} gap={'190'}>
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
                                <Button radius="16px" bg="#FF1441">
                                    {' '}
                                    Получить пробный период
                                </Button>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </AppShell.Section>
    )
}
