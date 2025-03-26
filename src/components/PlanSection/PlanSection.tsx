import { Box, Button, Container, Flex, Text } from '@mantine/core'

export function PlanSection() {
    return (
        <section
            style={{
                padding: '36px',
            }}
        >
            <Container size='lg'>
                <Flex direction={'column'} gap={'md'}>
                    <Text
                        style={{
                            color: '#2C4D96',
                            fontSize: '72px',
                            fontWeight: '700',
                        }}
                    >
                        {' '}
                        Бизнес-план
                    </Text>
                    <Text
                        style={{
                            color: '#373535',
                            fontSize: '18px',
                            fontWeight: '400',
                            fontFamily: 'MyCustomFont, Roboto',
                        }}
                    >
                        Настройте свой тариф для себя или вашего бизнеса
                    </Text>
                    <Box>
                        <Button radius='16px' bg='#FF1441'>
                            Подключить свой тариф
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </section>
    )
}
