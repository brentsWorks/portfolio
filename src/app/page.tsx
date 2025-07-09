import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';

export default function Home() {
  return (
    // TopBar (Home, Projects, Experience)
    // Home Section (Profile Picture, Name, Description, Socials)
    // Projects Section (Project 1, Project 2, Project 3)
    // Experience Section (Experience 1, Experience 2, Experience 3)
    <>
      <TopBar />
      <AboutMe />
      <ProjectSection />
      <ExperienceSection />
    </>
  );
}
