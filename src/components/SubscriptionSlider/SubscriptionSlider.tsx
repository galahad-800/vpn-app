import { useRef } from 'react'
import { Button } from '@mantine/core'

export type Plan = {
    title: string
    subtitle: string
    price: number
}

export function SubscriptionSlider({plans}: { plans: Plan[] }) {
    const scrollRef = useRef<HTMLDivElement>(null)

    return (
        <div className='slider-wrapper'>
            <div className='slider' ref={scrollRef}>
                {plans.map((plan, index) => (
                    <div key={index} className='card'>
                        <h3>{plan.title}</h3>
                        <p className='subtitle'>{plan.subtitle}</p>
                        <div className='price'>{plan.price} ₽</div>
                        <Button bg='#e60044' radius='md'>Приобрести</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
