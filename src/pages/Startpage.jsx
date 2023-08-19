import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './../ColorModeSwitcher';
import Product from './../components/Product';
import data from './../data/phones.json';

function Startpage() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="l">
        <header>
          <ColorModeSwitcher justifySelf="flex-end" />
        </header>
        <main>
          <div className="columns">
            {data.map((product, index) => {
              return (
                <div className="column is-4">
                  <Product data={product} />
                </div>
              );
            })}
          </div>
        </main>
      </Box>
    </ChakraProvider>
  );
}

export default Startpage;
