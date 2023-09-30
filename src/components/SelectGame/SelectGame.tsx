import { useLocation } from 'react-router-dom';
import { ContentCard, Button } from '../Shared/SharedStyles';
import {
    SelectGameTitle
} from './SelectGameStyles';

const SelectGame: React.FC = () => {
    const location = useLocation() as { state: { roomAction: 'create' | 'join', roomCode: string } };
    const roomAction = location.state?.roomAction;
    const roomCode = location.state?.roomCode;

    return (
        <ContentCard>
            {roomAction === 'create' ? (
                <>
                    <div>{roomCode}</div>
                    <SelectGameTitle>Select a Game</SelectGameTitle>
                    <Button>Top 3</Button>
                    <Button>Any 3</Button>
                </>
            ) : (
                <h1>Waiting for host to choose a game...</h1>
            )}
        </ContentCard>
    );
}

export default SelectGame;
