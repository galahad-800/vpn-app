import pc from '../../assets/Block3/PC.png'
import { Container, Flex, Text, Image } from '@mantine/core'

export function InstructionsSection() {
    return (
        <section
            style={{
                padding: '36px',
            }}
        >
            <Container size='xl'>
                <Flex direction='column' gap='md'>
                    <Flex justify={'left'}>
                        <Text
                            style={{
                                color: '#2C4D96',
                                fontSize: '72px',
                                fontWeight: '700',
                            }}
                        >
                            Как это работает?
                        </Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                        <Flex justify={'center'} p={'0 0 0 108'} >
                            <Image src={pc} className='gradient'/>
                        </Flex>
                        <Flex
                            direction={'column'}
                            justify={'center'}
                            gap={'md'}
                        >
                            <Text
                                c={'#0C8DFE'}
                                style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                }}
                            >
                                Пошаговое описание подключения:
                            </Text>
                            <Text>
                                Скачайте приложение или подключитесь через
                                Telegram-бота{' '}
                            </Text>
                            <Text>
                                Выберите сервер – список стран и регионов{' '}
                            </Text>
                            <Text>
                                Нажмите "Подключиться" – зашифрованный канал
                                активен{' '}
                            </Text>
                            <Text>
                                Наслаждайтесь интернетом без ограничений
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}
