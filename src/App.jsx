import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Flex, Link, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function App() {
  const Navbar = () => (
    <Box bg="brand.900" px={5} py={3}>
      <Flex justify="space-between" align="center">
        <Box>
          <Link href="/" p={2} color="white" _hover={{ textDecoration: 'none', color: 'brand.700' }}>Home</Link>
          <Link href="#tour-dates" p={2} color="white" _hover={{ textDecoration: 'none', color: 'brand.700' }}>Tour Dates</Link>
          <Link href="#biography" p={2} color="white" _hover={{ textDecoration: 'none', color: 'brand.700' }}>Biography</Link>
          <Link href="#gallery" p={2} color="white" _hover={{ textDecoration: 'none', color: 'brand.700' }}>Gallery</Link>
          <Link href="#contact" p={2} color="white" _hover={{ textDecoration: 'none', color: 'brand.700' }}>Contact</Link>
        </Box>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          _hover={{ bg: 'brand.700' }}
        />
      </Flex>
    </Box>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;