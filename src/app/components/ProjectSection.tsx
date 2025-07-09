'use client';

import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { usePortfolioMode } from '../PortfolioModeContext';

const technicalProjects = [
  {
    title: 'GPA Prediction with Machine Learning',
    date: 'February 2023',
    image: '/images/GPAPredict.png',
    description:
      "Successfully developed a linear regression based machine learning program in Python to build and train a model that would predict a student's future GPA based on a given dataset.",
  },
  {
    title: 'Environmental Statistical Analysis and Data Collection',
    date: 'April 2023',
    image: '/images/RPI.jpg',
    description:
      'Developed an environmental data collection system using a DHT11 sensor and a Raspberry Pi 400B, integrating MariaDB for database management and writing a C-based program for intuitive, real-time statistical analysis of temperature and humidity.',
  },
  {
    title: 'Tidal Disruption Analysis',
    date: 'March 2024',
    image: '/images/TidalDataProj.png',
    description:
      "Collaborated with a team of 4 to develop a Python script for simulating and analyzing Santa Cruz tidal data, identifying discrepancies caused by the Hunga Tonga-Hunga Ha'apai volcanic eruption, and finalized a Jupyter Notebook to visualize findings, revealing a significant 2 ft deviation from regular tidal patterns due to tsunami impacts.",
  },
  {
    title: 'Virtualized Campus Parking System',
    date: 'April 2025',
    image: '/images/parkwiselogo.png',
    description:
      'Collaborated in a team of 6 developers to build a digital solution for campus parking operations, replacing paper-based systems with streamlined online processes for vehicle registration, permit purchasing, and ticket management.',
  },
];
const personalHobbies = [
  {
    title: 'Hiking and Traveling',
    date: 'Ongoing',
    image: '/images/your_running_photo.jpg',
    description: 'Visited 5 countries and 10 states, love sight seeing and pushing my limits outdoors.',
  },
  {
    title: 'Brazilian Jiu Jitsu',
    date: 'Since 2023',
    image: '/images/your_guitar_photo.jpg',
    description: 'I have been training BJJ for 2 and a half years now at Solidarity Jiu Jitsu in San Jose, CA. I currently have my blue belt and am looking to compete again asap.',
  },
  {
	title: 'Weightlifting',
	date: 'Since 2018',
	image: '/images/your_guitar_photo.jpg',
	description: 'I began lifting weights several years ago, and it became a real passion of mine about 2 years into the journey.',
  },
];

export default function ProjectSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards visible at once
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const theme = useTheme();
  const arrowColor = theme.palette.mode === 'dark' ? '#90caf9' : '#1976d2';
  const dotColor = theme.palette.mode === 'dark' ? '#90caf9' : '#1976d2';
  const { mode } = usePortfolioMode();
  const projects = mode === 'technical' ? technicalProjects : personalHobbies;

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, background: 'none', px: { xs: 0.5, sm: 2, md: 10, lg: 20 } }}>
      <GlobalStyles styles={{
        '.slick-arrow:before': {
          color: arrowColor,
          fontSize: '32px',
        },
        '.slick-dots li button:before': {
          color: dotColor,
          fontSize: '14px',
        },
        '.slick-dots li.slick-active button:before': {
          color: arrowColor,
        },
        '.slick-dots': {
          marginTop: '8px !important',
          position: 'relative',
        },
      }} />
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: { xs: 3, md: 6 }, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
      >
        My <span style={{ color: theme.palette.text.primary }}>{mode === 'technical' ? 'Projects' : 'Hobbies'}</span>
      </Typography>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <Box key={idx} sx={{ px: { xs: 0.5, sm: 2 }, minWidth: 0 }}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.7)' : 'rgba(255,255,255,0.7)',
                color: theme.palette.text.primary,
                borderRadius: 3,
                boxShadow: 2,
                height: '100%',
                minHeight: { xs: 260, sm: 320, md: 340 },
                maxHeight: { xs: 320, sm: 340 },
                width: { xs: '90vw', sm: 320, md: 340 },
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${theme.palette.divider}`,
                px: { xs: 1, sm: 2 },
                py: { xs: 1, sm: 2 },
                transition: 'transform 0.2s, box-shadow 0.2s, max-height 0.2s, border-radius 0.2s',
                overflow: 'hidden',
                cursor: 'pointer',
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
                height="140"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'contain', background: theme.palette.action.hover, borderRadius: 2, mb: 2, transition: 'border-radius 0.2s', width: '100%' }}
              />
              <CardContent sx={{
                flexGrow: 1,
                p: 0,
                minHeight: 120,
                maxHeight: 120,
                overflow: 'hidden',
                transition: 'max-height 0.2s, border-radius 0.2s',
                borderRadius: 3,
                fontSize: { xs: '0.95rem', sm: '1rem' },
              }}>
                <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary, mb: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  {project.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                    transition: 'all 0.2s',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    '&:hover': {
                      WebkitLineClamp: 'unset',
                      overflow: 'visible',
                      textOverflow: 'unset',
                      background: theme.palette.action.hover,
                      borderRadius: 2,
                      p: 1,
                    },
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
