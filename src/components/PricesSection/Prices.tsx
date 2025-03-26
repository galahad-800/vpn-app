import { Plan, SubscriptionSlider } from '../SubscriptionSlider/SubscriptionSlider.tsx'
import { Container, Flex, Text } from '@mantine/core'



export function PricesSection() {
    const STANDARD_PLAN: Plan[] = [
        { title: 'Недельная', subtitle: 'Подписка на 1 неделю', price: 100 },
        { title: 'Месячная', subtitle: 'Подписка на 1 месяц', price: 200 },
        { title: 'Трехмесячная', subtitle: 'Подписка на 3 месяца', price: 500 },
        { title: 'Годовая', subtitle: 'Подписка на 1 год', price: 2000 },
    ]



    const VIP_PLAN: Plan[] = [
        {
            title: 'Месяц 2 доступа',
            subtitle: 'Подписка для двух устройств на месяц',
            price: 550,
        },
        {
            title: 'Месяц 3 доступа',
            subtitle: 'Подписка для трех устройств на месяц',
            price: 700,
        },
        {
            title: 'Месяц 5 доступов',
            subtitle: 'Подписка для пяти устройств на месяц',
            price: 850,
        },
        {
            title: 'Месяц 10 доступов',
            subtitle: 'Подписка для десяти устройств на месяц',
            price: 1800,
        },
    ]

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

                <Flex direction='column' gap='md'>
                    <SubscriptionSlider plans={STANDARD_PLAN} />
                    <SubscriptionSlider plans={VIP_PLAN} />
                </Flex>
            </Container>
        </section>
    )
}
