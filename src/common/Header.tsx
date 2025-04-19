import logo from '../assets/Logo/Logo.svg'
import { AppShell, Button, Container, Grid, Image, Text } from '@mantine/core'
import { IconMenu2 } from '@tabler/icons-react'
import Logomobile from '../assets/Logo/Logomobile.svg'


export function Header() {

    return (
        <AppShell.Header

            style={{
                background: '#4E5281',
            }}
        >
            <Container size="md" p={'md'}>
                <Grid align={'center'} gutter="xl">
                    <Grid.Col span={{ base: 3, sm: 1 }}>
                        <Image src={logo} alt="Logo" />
                    </Grid.Col>
                    <Grid.Col span={{base: 5}} display={{ base: 'block', sm: 'none' }}>
                        <Image src={Logomobile} w={'100%'} />
                    </Grid.Col>
                    <Grid.Col span={'auto'}  display={{ base: 'none', sm: 'block' }}></Grid.Col>
                    <Grid.Col span="content" display={{ base: 'none', sm: 'block' }}>
                        <Text component="a" href="#" color="white" style={{ textDecoration: 'none' }}>
                            Преимущества
                        </Text>
                    </Grid.Col>
                    <Grid.Col span="content" display={{ base: 'none', sm: 'block' }}>
                        <Text component="a" href="#" color="white" style={{ textDecoration: 'none' }}>
                            Цены
                        </Text>
                    </Grid.Col>
                    <Grid.Col span="content" display={{ base: 'none', sm: 'block' }}>
                        <Text component="a" href="#" color="white" style={{ textDecoration: 'none' }}>
                            Отзывы
                        </Text>
                    </Grid.Col>
                    <Grid.Col span="content" display={{ base: 'none', sm: 'block' }}>
                        <Text component="a" href="#" color="white" style={{ textDecoration: 'none' }}>
                            Частые вопросы
                        </Text>
                    </Grid.Col>
                    <Grid.Col span="content" display={{ base: 'none', sm: 'block' }}>
                        <Text component="a" href="#" color="white" style={{ textDecoration: 'none' }}>
                            Поддержка
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={'auto'} ></Grid.Col>
                    <Grid.Col span={'content'} display={{ base: 'none', sm: 'block' }}>
                        <Button
                            radius={'16px'}
                            style={{
                                background: '#31DFF6',
                            }}
                        >
                            Попробовать за 1 ₽
                        </Button>
                    </Grid.Col>

                    <Grid.Col span={'content'} display={{ base: 'block', sm: 'none' }}>
                        <Button variant="subtle" color="white">
                            <IconMenu2 />
                        </Button>
                    </Grid.Col>

                </Grid>

            </Container>
        </AppShell.Header>
    )
}
