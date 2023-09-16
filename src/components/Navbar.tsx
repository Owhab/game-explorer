import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game_explorer.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Game Explorer</Text>
    </HStack>
  );
};

export default Navbar;
