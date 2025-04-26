import { AppShell, Button, Container, Grid, Text, Title } from '@mantine/core'

export function PromotionSection() {
    return (
        <AppShell.Section
            style={{
                background: 'radial-gradient(40% 50% at 50% 50%, var(--Primary-Yellow, #FFC301) 0%, var(--Secondary-Dark-Navy, #4E5281) 100%)',
            }}
        >
            <Container px={20} pb={26} pt={26}>
                            <Title order={1}
                                style={{
                                    color: '#FFF',
                                    fontSize: '56px',
                                    fontWeight: '700',
                                }}
                            >
                                Попробуйте за 1 рубль на 7 дней!
                            </Title>

                     <Grid pt={{ base: 16, sm: 64 }}  gutter="xl" >
                         <Grid.Col  span={'content'} offset={{ base: 0, sm: 1 }}>
                             <Text
                                 style={{
                                     color: '#FFF',
                                     fontSize: '20px',
                                     fontWeight: '600',
                                 }}
                             >
                                 Акция заканчивается через 24 часа!
                             </Text>
                         </Grid.Col>
                         <Grid.Col  span={'content'} offset={{ base: 0, sm: 2 }}>
                             <Button radius="16px" bg="#FF1441">
                                 {' '}
                                 Получить пробный период
                             </Button>
                         </Grid.Col>
                     </Grid>




            </Container>
        </AppShell.Section>
    )
}
