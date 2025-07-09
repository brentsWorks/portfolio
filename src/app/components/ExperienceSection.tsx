'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { usePortfolioMode } from '../PortfolioModeContext';

const technicalExperiences = [
  {
    employer: 'Headstarter AI',
    role: 'Software Engineering Fellow',
    dates: 'June 2025 - Present',
    location: 'Remote, USA',
    image: '/images/Headstarter.jpeg',
  },
  {
    employer: 'Mobalytics',
    role: 'Data Analysis & Research Intern',
    dates: 'September 2023 - December 2023',
    location: 'Marina Del Rey, CA',
    image: '/images/mobalytics.jpeg',
  },
  {
    employer: 'Interweave Capital',
    role: 'Cybersecurity Market Analyst',
    dates: 'June 2023 - September 2023',
    location: 'Palo Alto, CA',
    image: '/images/iwcapital.jpeg',
  },
];
const personalMemories = [
  {
    employer: 'Trip to Japan',
    role: 'Traveler',
    dates: 'May 2023',
    location: 'Tokyo, Kyoto, Osaka',
    image: '/images/japan_trip.jpg',
  },
  {
    employer: 'Family Reunion',
    role: 'Family',
    dates: 'July 2022',
    location: 'Lake Tahoe, CA',
    image: '/images/family_reunion.jpg',
  },
  // ...add more memories
];

export default function ExperienceSection() {
  const { mode } = usePortfolioMode();
  const experiences = mode === 'technical' ? technicalExperiences : personalMemories;
  const theme = useTheme();
  const sectionBg = theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.7)' : 'rgba(255,255,255,0.7)';
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, background: 'none', px: { xs: 1, sm: 2, md: 10, lg: 20 } }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: { xs: 3, md: 6 }, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
      >
        {mode === 'technical' ? 'Work Experience' : 'Memories'}
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
        {experiences.map((exp, idx) => (
          <Grid key={idx} size={{ xs: 12, sm: 8, md: 6, lg: 4 }}>
            <Card
              sx={{
                background: sectionBg,
                color: theme.palette.text.primary,
                borderRadius: 3,
                boxShadow: 3,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                width: { xs: '90vw', sm: 320, md: 340 },
                minHeight: { xs: 260, sm: 320, md: 340 },
                maxHeight: { xs: 320, sm: 340 },
                mx: 'auto',
                border: `1px solid ${theme.palette.divider}`,
                p: { xs: 1, sm: 2 },
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s, max-height 0.2s, border-radius 0.2s',
                '&:hover': {
                  transform: 'scale(1.04)',
                  boxShadow: 6,
                  zIndex: 2,
                  maxHeight: 'none',
                  borderRadius: 3 * 1.04,
                },
                '&:hover .MuiCardContent-root': {
                  maxHeight: 'none',
                  borderRadius: 3 * 1.04,
                },
              }}
            >
              <CardMedia
                component="img"
                image={exp.image}
                alt={exp.employer}
                sx={{ width: { xs: 80, sm: 100 }, height: { xs: 80, sm: 100 }, objectFit: 'cover', m: 2, borderRadius: 2, background: theme.palette.action.hover }}
              />
              <CardContent sx={{ width: '100%', minWidth: 0 }}>
                <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
                  {exp.employer}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  {exp.dates}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>{exp.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 