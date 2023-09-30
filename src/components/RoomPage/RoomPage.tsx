import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';import { 
    ContentCard,
    Button
} from '../Shared/SharedStyles';
import {
    InputLabel,
    Input
} from './RoomPageStyles';

const RoomPage: React.FC = () => {
    const location = useLocation() as { state: { roomAction: 'create' | 'join' } };
    const roomAction = location.state?.roomAction;
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState(roomAction === 'create' ? 'XYZ123' : '');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 12) {
            setName(value);
        }
    }

    const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 6) {
            setRoomCode(e.target.value);
        }
    }

    const handleContinueClick = () => {
        if (roomAction === 'create') {
            navigate('/selectGame', { state: { roomAction: 'create', roomCode: roomCode } });
        } else {
            navigate('/selectGame', { state: { roomAction: 'join', roomCode: roomCode } });
        }
    }

    return (
        <ContentCard>
            <div>
                <InputLabel htmlFor="roomCodeInput">ROOM CODE</InputLabel>
                <Input 
                    id="roomCodeInput"
                    type="text"
                    placeholder="Enter a room code" 
                    value={roomCode}
                    onChange={handleRoomCodeChange}
                    disabled={roomAction === 'create'}
                />
            </div>

            <div>
                <InputLabel htmlFor="nameInput">NAME</InputLabel>
                <Input
                    id="nameInput"
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={handleNameChange} 
                />
            </div>

            <Button onClick={handleContinueClick} disabled={!name.trim() || !roomCode.trim()}>Continue</Button>
        </ContentCard>
    );
}

export default RoomPage;
