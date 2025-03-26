import { Accordion, Box, Container, Flex, Text } from '@mantine/core'

export function QuestionsSection() {
    return (
        <section style={{}}>
            <Container size='xl'>
                <Flex justify={'left'}>
                    <Text
                        style={{
                            color: '#2C4D96',
                            fontSize: '72px',
                            fontWeight: '700',
                        }}
                    >
                        Часто задаваемые вопросы
                    </Text>
                </Flex>
                <Flex direction={'column'} align={'center'}>
                    <Box>
                        <Accordion>
                            <Box>
                                <Accordion.Item value='vpn'>
                                    <Accordion.Control>
                                        Как работает VPN?
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        VPN шифрует ваш интернет-трафик и
                                        скрывает ваш IP-адрес, обеспечивая
                                        анонимность и безопасность.
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Box>

                            <Accordion.Item value='vpn'>
                                <Accordion.Control>
                                    Чем отличается ваш сервис от бесплатных VPN?
                                </Accordion.Control>
                                <Accordion.Panel>
                                    VPN шифрует ваш интернет-трафик и скрывает
                                    ваш IP-адрес, обеспечивая анонимность и
                                    безопасность.
                                </Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value='vpn'>
                                <Accordion.Control>
                                    Можно ли использовать VPN для стриминга?
                                </Accordion.Control>
                                <Accordion.Panel>
                                    VPN шифрует ваш интернет-трафик и скрывает
                                    ваш IP-адрес, обеспечивая анонимность и
                                    безопасность.
                                </Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value='vpn'>
                                <Accordion.Control>
                                    Какие устройства поддерживаются?
                                </Accordion.Control>
                                <Accordion.Panel>
                                    VPN шифрует ваш интернет-трафик и скрывает
                                    ваш IP-адрес, обеспечивая анонимность и
                                    безопасность.
                                </Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value='vpn'>
                                <Accordion.Control>
                                    Как отменить подписку?
                                </Accordion.Control>
                                <Accordion.Panel>
                                    VPN шифрует ваш интернет-трафик и скрывает
                                    ваш IP-адрес, обеспечивая анонимность и
                                    безопасность.
                                </Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item value='vpn'>
                                <Accordion.Control>
                                    Есть ли реферальная программа?
                                </Accordion.Control>
                                <Accordion.Panel>
                                    VPN шифрует ваш интернет-трафик и скрывает
                                    ваш IP-адрес, обеспечивая анонимность и
                                    безопасность.
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
