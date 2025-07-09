'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { usePortfolioMode } from '../PortfolioModeContext';

export default function TopBar() {
  const { mode, setMode } = usePortfolioMode();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(20, 20, 30, 0.85)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.12)',
        borderBottom: '1px solid #222',
      }}
    >
      <Toolbar sx={{ minHeight: 72, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="button"
            aria-label="Toggle dark/light mode"
            onClick={() => {
              const current = localStorage.getItem('theme');
              const next = current === 'light' ? 'dark' : 'light';
              localStorage.setItem('theme', next);
              // Force reload to apply theme (since theme is set in layout.tsx useEffect)
              window.location.reload();
            }}
            sx={{
              background: 'none',
              border: 'none',
              p: 0,
              m: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
              '&:hover .lightbulb': {
                color: '#fff176',
                filter: 'drop-shadow(0 0 8px #fff176)',
                transition: 'color 0.2s, filter 0.2s',
              },
            }}
          >
            <EmojiObjectsIcon
              className="lightbulb"
              sx={{
                color: '#90caf9',
                fontSize: 36,
                mr: 1,
                transition: 'color 0.2s, filter 0.2s',
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              color: '#fff',
              fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif',
              borderLeft: '4px solid #90caf9',
              pl: 2,
              textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            Brent Brison
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(_, newMode) => { if (newMode) setMode(newMode); }}
            sx={{ ml: 2, bgcolor: 'background.paper', borderRadius: 2 }}
            size="small"
          >
            <ToggleButton value="technical">💼 Career</ToggleButton>
            <ToggleButton value="personal">🏃‍♂️ Personal</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}