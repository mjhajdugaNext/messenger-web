import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import LoaderFullScreen from '../../shared/components/LoaderFullScreen';

export default function AuthModule() {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate('/messaging')}>Navigate to messaging</Button>
        </div>
    )
}