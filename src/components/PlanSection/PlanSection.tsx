import { AppShell, Box, Button, Container, Flex, Text } from '@mantine/core'

export function PlanSection() {
    return (
        <AppShell.Section>
            <Container px={20} pt={48} pb={36}>
                <Flex direction={'column'} gap={'md'}>
                    <Text
                        style={{
                            color: '#2C4D96',
                            fontSize: 'var(--var-title-size-md)',
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
                            fontFamily: 'Roboto Condensed',
                        }}
                    >
                        Настройте свой тариф для себя или вашего бизнеса
                    </Text>
                    <Box>
                        <Button radius='16px' bg='#FF1441' size={'lg'} p={'8 16 8 16'}>
                            Подключить свой тариф
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </AppShell.Section>
    )
}
