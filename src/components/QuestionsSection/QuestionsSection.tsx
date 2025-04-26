import { useState } from 'react'

import { AppShell, Collapse, Container, Flex, Text, Title } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

export type FaqItem = {
    id: number
    question: string
    answer: string
}

export const faqList: FaqItem[] = [
    {
        id: 1,
        question: 'Как работает VPN?',
        answer: 'VPN (Virtual Private Network) шифрует ваш интернет-трафик и передаёт его через безопасный сервер, обеспечивая вашу анонимность и защиту в сети.',
    },
    {
        id: 2,
        question: 'Чем отличается ваш сервис от бесплатных VPN?',
        answer: 'Мы предоставляем высокую скорость, стабильное соединение и отсутствие рекламы. Бесплатные VPN часто имеют ограничения по скорости, трафику и безопасности.',
    },
    {
        id: 3,
        question: 'Можно ли использовать VPN для стриминга?',
        answer: 'Да, наш VPN подходит для стриминга и позволяет обходить геоблокировки различных сервисов.',
    },
    {
        id: 4,
        question: 'Какие устройства поддерживаются?',
        answer: 'Мы поддерживаем Windows, macOS, iOS, Android и большинство браузеров через расширения.',
    },
    {
        id: 5,
        question: 'Как отменить подписку?',
        answer: 'Вы можете отменить подписку в личном кабинете в разделе “Подписка” в любое время.',
    },
    {
        id: 6,
        question: 'Есть ли реферальная программа?',
        answer: 'Да! Приглашайте друзей и получайте бонусы за каждого нового пользователя.',
    },
]

export function QuestionsSection() {
    const [activeId, setActiveId] = useState<number | null>(null)

    const toggle = (id: number) => {
        setActiveId(prev => (prev === id ? null : id))
    }

    return (
        <AppShell.Section style={{
            paddingBottom: '30px',
        }}>
            <Container px={20}>
                <Flex justify="left">
                    <Title order={2}
                        style={{
                            color: '#2C4D96',
                            fontSize: 'var(--var-title-size-md)',
                            fontWeight: '700',
                        }}
                    >
                        Часто задаваемые вопросы
                    </Title>
                </Flex>
            </Container>

            <Container px={20}>
                <Flex direction="column" >
                    {faqList.map(faq => (
                        <Flex direction="column" gap="md" key={faq.id}>
                            <Flex
                                justify="space-between"
                                align="center"
                                style={{
                                    borderRadius:
                                        activeId !== faq.id
                                            ? '32px'
                                            : '',
                                    borderBottom:
                                        activeId !== faq.id
                                            ? '3px solid #2C4D96'
                                            : 'none',
                                    padding: '10px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => toggle(faq.id)}
                            >
                                <Text
                                    c="#000"
                                    fw={700}
                                    style={{
                                        fontSize: '21px',
                                    }}
                                >
                                    {faq.question}
                                </Text>

                                <IconChevronDown
                                    size={16}
                                    color="#2C4D96"
                                    stroke={2}
                                    style={{
                                        transform:
                                            activeId === faq.id
                                                ? 'rotate(180deg)'
                                                : 'rotate(0deg)',
                                        transition: 'transform 0.3s',
                                    }}
                                />
                            </Flex>

                            <Collapse in={activeId === faq.id}>
                                <Text style={{ padding: '10px' }}>
                                    {faq.answer}
                                </Text>
                            </Collapse>
                        </Flex>
                    ))}
                </Flex>
            </Container>
        </AppShell.Section>
    )
}
