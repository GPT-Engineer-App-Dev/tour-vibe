import { Box, Flex, Text, Button, Image, Input, Textarea, VStack, Heading } from '@chakra-ui/react';
import { FaCalendarAlt, FaEnvelope, FaImage, FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" m="4">
        <Heading as="h1" size="2xl" my="5">Band Name</Heading>
        <Image src="/images/band-main.jpg" alt="Band Main" boxSize="400px" objectFit="cover" borderRadius="md" />
      </Flex>

      <VStack spacing="5" my="5">
        <Section title="Tour Dates" icon={FaCalendarAlt}>
          <Text>No upcoming dates</Text>
        </Section>

        <Section title="Biography" icon={FaInfoCircle}>
          <Text>Band biography goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Section>

        <Section title="Gallery" icon={FaImage}>
          <Flex>
            <Image src="/images/gallery1.jpg" alt="Gallery 1" boxSize="150px" m="2" />
            <Image src="/images/gallery2.jpg" alt="Gallery 2" boxSize="150px" m="2" />
            <Image src="/images/gallery3.jpg" alt="Gallery 3" boxSize="150px" m="2" />
          </Flex>
        </Section>

        <Section title="Contact Us" icon={FaEnvelope}>
          <VStack as="form" spacing="3">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue">Send</Button>
          </VStack>
        </Section>
      </VStack>
    </Box>
  );
};

const Section = ({ title, icon: Icon, children }) => (
  <Box p="5" shadow="md" borderWidth="1px" borderRadius="md" w="full">
    <Flex align="center" mb="3">
      <Icon size="24" />
      <Text fontWeight="bold" ml="2">{title}</Text>
    </Flex>
    {children}
  </Box>
);

export default Index;