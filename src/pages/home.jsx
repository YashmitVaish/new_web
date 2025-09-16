import './App.css';
import Navbar from '../components/navbar';
import TextSec1 from '../components/textsec1';
import TextSec2 from '../components/textsec2';
import TextSec3 from '../components/textsec3';
import conferencedata from "../data/conferenceData.json";
import DatesTable from '../components/dates_table';
import CommitteeSection from '../components/CommitteeSection';
import Committees from '../components/committes';
import { thaparLearnFellows, uqFellows, gs, convener, os, nit } from '../data/committeeData';
import HeroSection from '../components/Landing';
import { Box, Container, Typography, Link } from '@mui/material';
import ConferenceTracks from '../components/ConferenceTracks';
import Bottombar from '../components/bottomblack';
import Slideshow from '../components/glimpses';
import ContactUs from '../components/contactUs';
import Chief from '../components/pcp';
import Chief2 from '../components/chief_guest';
import SpringerInfo from '../components/springer';
import AnnouncementsCard from '../components/announce';

function Home() {
  // Scroll handler for JSON links
  const handleScroll = (href) => {
    if (href.startsWith("#")) {
      const section = document.getElementById(href.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <>
      <Navbar data={conferencedata.navLinks} />
      <HeroSection />
      <Bottombar />

      {/* Logos */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          my: 4,
          gap: { xs: 2, sm: 0 },
          alignItems: "stretch",
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box component="img" src="/Springer_Nature.png" alt="Springer Nature" sx={{ width: 100, height: 'auto', borderRadius: 2 }} />
          <Box component="img" src="/springer-2.svg" alt="Springer 2" sx={{ width: 150, height: 'auto', borderRadius: 2 }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box component="img" src="/tiet.png" alt="TIET" sx={{ width: 120, height: 'auto', borderRadius: 2 }} />
          <Box component="img" src="/nitttr.jpeg" alt="NITTTR" sx={{ width: 100, height: 'auto', borderRadius: 2 }} />
        </Box>
      </Box>

      {/* About + Announcements side by side */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          px: 2,
          py: 4,
          alignItems: 'stretch', // children same height
        }}
      >
        {/* Left: About the Conference */}
        <Box sx={{ flex: 2, height: '100%' }}>
          <TextSec1 data={conferencedata.about} sx={{ height: '100%' }} />
        </Box>

        {/* Right: Announcements */}
        <Box sx={{ flex: 1, height: '100%' }}>
          <AnnouncementsCard data={conferencedata} handleScroll={handleScroll} sx={{ height: '100%' }} />
        </Box>
      </Box>

      {/* Other Sections */}
      <TextSec2 data={conferencedata.tiet} />
      <TextSec3 data={conferencedata.nitttr} />
      <DatesTable data={conferencedata.importantDates} />

      <Typography
        id="conference-tracks-section"
        variant="body1"
        align="left"
        sx={{ mt: 3, fontSize: '1.2rem', scrollMarginTop: '300px', textAlign: 'justify', fontWeight: 'bold' }}
      >
        <SpringerInfo data={conferencedata.springerInfo} />
      </Typography>

      <ConferenceTracks tracks={conferencedata.tracks} />

      <Box sx={{ background: '#ffffff', py: 4 }}>
        <Container>
          <Box sx={{ mb: 6 }}>
            <Typography>
              Abstract/Paper Submission link{" "}
              <Link
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTHEC2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Chief Guest */}
      <Box id="chief-guest" sx={{ py: 4 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
            Chief Guest
          </Typography>
        </Container>
      </Box>
      <Chief2 />

      {/* Guest Speakers */}
      <Box id="guest-speakers" sx={{ mt: 10, py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Guest Speakers
          </Typography>
          <CommitteeSection members={gs} />
        </Container>
      </Box>

      {/* Patrons */}
      <Box id="patrons">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Patrons
        </Typography>
      </Box>
      <Chief />

      {/* Organizers */}
      <Box id="organizers" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Organizers
        </Typography>
        <Container maxWidth="lg">
          <CommitteeSection title="Conveners" members={convener} />
          <CommitteeSection title="Organizing Secretary" members={os} />
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Organizing Committee
          </Typography>
          <CommitteeSection members={nit} />
          <CommitteeSection title="Thapar Learn Fellows (TLFs)" members={thaparLearnFellows} />
          <CommitteeSection title="University of Queensland Fellows" members={uqFellows} />
        </Container>
      </Box>

      {/* Committees */}
      <Committees data={conferencedata.committees} />

      {/* Glimpses Slideshow */}
      <Box sx={{ mt: 8 }}>
        <Slideshow data={conferencedata.glimpse} />
      </Box>

      {/* Footer */}
      <ContactUs data={conferencedata.footer} />
    </>
  );
}

export default Home;
