import { Container, Flex, Text } from '@mantine/core'

export function PricesSection() {
    return (
        <section>
            <Container size={'xl'}>
                <Flex justify={'left'}>
                    <Text
                        style={{
                            color: '#2C4D96',
                            fontSize: '72px',
                            fontWeight: '700',
                        }}
                    >
                        Тарифы и цены
                    </Text>
                </Flex>
            </Container>
        </section>
    )
}
