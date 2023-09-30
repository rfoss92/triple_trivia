import { useNavigate } from 'react-router-dom';
import { 
    ContentCard,
    Button
} from '../Shared/SharedStyles';
import { 
    Title,
    Description,
} from './LandingPageStyles';

interface Props {

}

const LandingPage: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate();

    const handleRoomClick = (action: 'create' | 'join') => {
        navigate('/room', { state: { roomAction: action } });
    }

    return (
        <ContentCard>
            <Title>Triple Trivia</Title>
            <Description>List, Guess, Win! Dive into the minds of friends and unveil their favorite trios</Description>
            <Button onClick={() => handleRoomClick('create')}>Create a Room</Button>
            <Button onClick={() => handleRoomClick('join')}>Join a Room</Button>
        </ContentCard>
    )
}

export default LandingPage;
