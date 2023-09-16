import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="red">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
