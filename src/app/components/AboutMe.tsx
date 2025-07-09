'use client';

import { Box, Typography, Button, Stack, Avatar, IconButton, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import { Typewriter } from 'react-simple-typewriter';
import { useTheme } from '@mui/material/styles';
import { usePortfolioMode } from '../PortfolioModeContext';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function MeSection() {
  const { mode } = usePortfolioMode();
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '60vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        py: { xs: 4, md: 8 },
        px: { xs: 1, sm: 2, md: 4 },
        background: 'none',
        color: theme.palette.text.primary,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          background: theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.7)' : 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(8px)',
          borderRadius: 5,
          p: { xs: 2, sm: 3, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 2, sm: 3, md: 6 },
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
          border: `1px solid ${theme.palette.divider}`,
          width: '100%',
          maxWidth: 1100,
        }}
      >
        <Avatar
          src="/images/profilepic.jpeg"
          alt="Profile Picture"
          sx={{ width: { xs: 120, sm: 160, md: 200 }, height: { xs: 120, sm: 160, md: 200 }, boxShadow: 4, border: `3px solid ${theme.palette.primary.main}` }}
        />
        <Box sx={{ width: '100%', minWidth: 0 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: theme.palette.text.primary, textShadow: '0 2px 8px rgba(0,0,0,0.4)', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, textAlign: { xs: 'center', md: 'left' } }}>
            Hi, I&apos;m <span style={{ color: theme.palette.primary.main, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Brent</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, color: theme.palette.text.secondary, textShadow: '0 2px 8px rgba(0,0,0,0.4)', fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }, textAlign: { xs: 'center', md: 'left' } }}>
            I&apos;m a <span style={{ color: theme.palette.primary.main, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              <Typewriter
                words={mode === 'technical' ? ['Software Engineer'] : ['Competitive Athlete']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 500, color: theme.palette.text.secondary, mx: { xs: 'auto', md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
            Living a well-balanced life while fulfilling my unwavering passion for the future of technology.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
            {mode === 'technical' && (
              <>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/brent-brison/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  sx={{ color: theme.palette.primary.main, background: theme.palette.action.hover, '&:hover': { background: theme.palette.primary.main, color: theme.palette.background.paper } }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/brentsWorks/"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  sx={{ color: theme.palette.primary.main, background: theme.palette.action.hover, '&:hover': { background: theme.palette.primary.main, color: theme.palette.background.paper } }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </>
            )}
            {mode === 'personal' && (
			  <>
              <IconButton
                component="a"
                href="https://www.youtube.com/@yourchannel"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                sx={{
                  color: theme.palette.primary.main,
                  background: theme.palette.action.hover,
                  '&:hover': { background: theme.palette.primary.main, color: theme.palette.background.paper }
                }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>
			  <IconButton
			  component="a"
			  href="https://www.instagram.com/brentbrison/"
			  target="_blank"
			  rel="noopener"
			  aria-label="Instagram"
			  sx={{ color: theme.palette.primary.main, background: theme.palette.action.hover, '&:hover': { background: theme.palette.primary.main, color: theme.palette.background.paper } }}
			>
			  <InstagramIcon fontSize="large" />
			</IconButton>
			</>
            )}
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2, justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: { xs: 'stretch', sm: 'center' }, minHeight: 56 }}>
            <Tooltip title="Download CV" placement="top">
              <IconButton
                component="a"
                href="/images/Brent_Brison_Resume.pdf"
                download
                sx={{
                  color: theme.palette.primary.main,
                  background: theme.palette.action.hover,
                  border: `2px solid ${theme.palette.primary.main}`,
                  width: 56,
                  height: 56,
                  visibility: mode === 'technical' ? 'visible' : 'hidden',
                  pointerEvents: mode === 'technical' ? 'auto' : 'none',
                  '&:hover': { background: theme.palette.primary.main, color: theme.palette.background.paper }
                }}
                aria-label="Download CV"
              >
                <DownloadIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Button
              variant="outlined"
              color="primary"
              href="mailto:bbrison@ucsc.edu?subject=Contact&body=Hello%20Brent,%0D%0A%0D%0A"
              sx={{
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                background: theme.palette.action.hover,
                visibility: mode === 'technical' ? 'visible' : 'hidden',
                pointerEvents: mode === 'technical' ? 'auto' : 'none',
                '&:hover': { background: theme.palette.primary.main, color: theme.palette.background.paper }
              }}
            >
              Contact me
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
