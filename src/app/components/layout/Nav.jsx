import { Box, Flex, Spacer, Link, Button, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import "../../../styles/common.css"

function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box className="full-width nav-shadow" >
			<Flex flexWrap={"none"} align="center">
					<Link href="#" className="bg-nav burger-menu-link" w={"13.33%"} color="white" fontSize="xl" >
						<Flex j align="center" w="100%">
							<HamburgerIcon boxSize={30} mr="0.66em" color="white" />
							Menu
						</Flex>
					</Link>
				<Spacer />
				<Box display={{ base: 'block', md: 'none' }} onClick={isOpen ? onClose : onOpen} cursor="pointer">

				</Box>
				<Box
					display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
					mt={{ base: 4, md: 0 }}
					ml={8}
				>
					<Link href="#" color="black" mr={4}>
						Home
					</Link>
					<Link href="#" color="black" mr={4}>
						About
					</Link>
					<Link href="#" color="black" mr={4}>
						Services
					</Link>
					<Link href="#" color="black" mr={4}>
						Contact
					</Link>
				</Box>
				<Button variant="outline" colorScheme="black" ml={2}>
					Sign In
				</Button>
			</Flex>
		</Box>
	);
}

export default Navbar;
