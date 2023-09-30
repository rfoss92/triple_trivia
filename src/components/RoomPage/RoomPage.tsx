import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
    ContentCard,
    Button
} from '../Shared/SharedStyles';
import {
    InputLabel,
    Input
} from './RoomPageStyles';

const RoomPage: React.FC = () => {
    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState('XYZ123');
    const location = useLocation() as { state: { roomAction: 'create' | 'join' } };
    const roomAction = location.state?.roomAction;

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 12) {
            setName(value);
        }
    }

    const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRoomCode(e.target.value);
    }

    return (
        <ContentCard>
            <div>
                <InputLabel htmlFor="roomCodeInput">ROOM CODE</InputLabel>
                <Input 
                    id="roomCodeInput"
                    type="text"
                    placeholder="Enter a room code" 
                    value={roomAction === 'create' ? roomCode : ''}
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

            <Button disabled={!name.trim()}>Play</Button>
        </ContentCard>
    );
}

export default RoomPage;
