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
                        <div className='button'>
                            <div className='price'>{plan.price} ₽</div>
                            <Button bg='#FF1441' radius='16' justify={'center'} size={'lg'}>Приобрести</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
