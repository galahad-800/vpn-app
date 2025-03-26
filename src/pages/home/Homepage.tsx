import Layout from '../../common/Layout.tsx'
import { CardSection } from '../../components/CardSection/CardSectionm.tsx'
import { ContactsSection } from '../../components/ContactsSection/ContactsSection.tsx'
import { InstructionsSection } from '../../components/InstructionsSection/InstructionsSection.tsx'
import { IntroSection } from '../../components/IntroSection/IntroSection.ui.tsx'
import { PlanSection } from '../../components/PlanSection/PlanSection.tsx'
import { PricesSection } from '../../components/PricesSection/Prices.tsx'
import { PromotionSection } from '../../components/PromotionSection/PromotionSection.tsx'
import { QuestionsSection } from '../../components/QuestionsSection/QuestionsSection.tsx'
import { ReviewsSection } from '../../components/ReviewsSection/ReviewsSection.tsx'

export function HomePage() {
    return (
        <Layout>
            <IntroSection />
            <CardSection />
            <InstructionsSection />
            <PricesSection />
            <PlanSection />
            <ReviewsSection />
            <QuestionsSection />
            <PromotionSection />
            <ContactsSection />
        </Layout>
    )
}
