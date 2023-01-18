
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Image,
    HStack,
    useBreakpointValue,
    Grid
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaSkype, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    return (
        <Box

            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Grid} maxW={'7xl'} py={10} gridTemplateColumns={'70% 20%'} >
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} >
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>Terms</Link>
                        <Link href={'#'}>Privacy</Link>
                        <Link href={'#'}>Cookies</Link>
                        <Link href={'#'}>Affiliate terms</Link>
                        <Link href={'#'}>Download app</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Affiliate</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>DivineTime in your language</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Features</ListHeader>
                        <Link href={'#'}>All features</Link>
                        <Link href={'#'}>Automatic time tracking</Link>
                        <Link href={'#'}>URL & App tracking</Link>
                        <Link href={'#'}>Screenshots</Link>
                        <Link href={'#'}>Project time tracking</Link>
                        <Link href={'#'}>Shift schedule</Link>
                        <Link href={'#'}>Offline time tracking</Link>
                        <Link href={'#'}>Absence calendar</Link>
                        <Link href={'#'}>Mobile app</Link>
                        <Link href={'#'}>Feature request</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Help center</ListHeader>
                        <Link href={'#'}>Contact us</Link>
                        <Link href={'#'}>Schedule a call</Link>
                        <Link href={'#'}>Send us an e-mail</Link>
                        <Link href={'#'}>Request In-person training</Link>
                        <Link href={'#'}>Open chat</Link>
                        <ListHeader href={'#'}>Phone support</ListHeader>
                        <Link href={'#'}>+1 (315) 6365354</Link>
                        <Link href={'#'}>MON-FRI 9:00-22:00 EET</Link>
                    </Stack>
                </SimpleGrid>
                <SimpleGrid >
                    <Stack>
                        <ListHeader>Install App</ListHeader>
                        <HStack>
                            <Image src="https://lh3.googleusercontent.com/RyLoNcOmb91IxHIP9NWfC82chbsCsT-5R25efns1FmuM8xz6znE4CRjIEBosZ1FH2xG1UqH6Axyp-vPFnm4sazbrsaB-S0QT_cN9uWU9UKoSQYCjYQ=s0">

                            </Image>
                            <Image src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' ></Image>
                        </HStack>
                    </Stack>
                </SimpleGrid>
            </Container>

            <FooterFoot />
        </Box>
    );
}

export default Footer;

const SocialButton_ = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const FooterFoot = () => {
    return (
        <Box
            width={"100%"}
            bg={"#f3f5f7"}

            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                width={"100%"}

                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <HStack>
                    <RouterLink to="/">
                        <Image backgroundColor={"#f3f5f7"} src="" boxSize={"38px"}></Image>
                    </RouterLink>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        fontSize={"25px"}
                        color={useColorModeValue('gray.800', 'white')}>
                        <RouterLink to="/">PaperFury</RouterLink>
                    </Text>
                </HStack>

            </Container>

            <Container
                bg={"#f3f5f7"}
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton_ label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton_>
                    <SocialButton_ label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton_>
                    <SocialButton_ label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton_>
                    <SocialButton_ label={'Skype'} href={'#'}>
                        <FaSkype />
                    </SocialButton_>
                    <SocialButton_ label={'Linkedin'} href={'#'}>
                        <FaLinkedin />
                    </SocialButton_>
                    <SocialButton_ label={'Whatsapp'} href={'#'}>
                        <FaWhatsapp />
                    </SocialButton_>
                </Stack>
            </Container>

            <Container

                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>


            </Container>
        </Box>
    );
}