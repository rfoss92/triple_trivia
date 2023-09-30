import { 
    AppHeader,
    ContentCard,
    Title,
    Description,
    PlayButton,
    Footer
} from './LandingPageStyles';

interface Props {

}

const LandingPage: React.FC<Props> = (props: Props) => {

    return (
        <>
            <AppHeader>
                <i className="fas fa-question-circle"></i>
                Triple Trivia
            </AppHeader>
            <ContentCard>
                <Title>Triple Trivia</Title>
                <Description>List, Guess, Win! Dive into the minds of friends and unveil their favorite trios</Description>
                <PlayButton>Play</PlayButton>
            </ContentCard>
            <Footer>
                © 2023 Fossibly the Best Game Ever. All Rights Reserved.
            </Footer>
        </>
    )
}

export default LandingPage;
