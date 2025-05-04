import React from 'react';
import { Box, Typography, Container, Paper, Switch, FormControlLabel } from '@mui/material';

const Settings = () => {
    const [settings, setSettings] = React.useState({
        notifications: true,
        emailUpdates: true,
    });

    const handleChange = (event) => {
        setSettings({
            ...settings,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Settings
                </Typography>
                <Paper sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={settings.notifications}
                                    onChange={handleChange}
                                    name="notifications"
                                />
                            }
                            label="Enable Notifications"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={settings.emailUpdates}
                                    onChange={handleChange}
                                    name="emailUpdates"
                                />
                            }
                            label="Email Updates"
                        />
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Settings;