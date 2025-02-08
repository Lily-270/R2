import { Provider } from "./components/ui/provider"
import { Flex, Image, Heading, Box, Center, VStack} from '@chakra-ui/react'
import './App.css';
import Task from "./Task"
function App() {

  return (
    <div className="App">
      <Provider>
        <Flex gap="2" direction="column">
          <Heading size="3xl" >My To do List !</Heading>
          <Center>
            <VStack gap="20" >
              <Box boxSize="17vh">
                <Image src="https://i.pinimg.com/736x/ee/d1/87/eed187da6c1f93b1933b25cbaa51c45f.jpg" alt="list-image" />
              </Box>
              <Task />
            </VStack>
          </Center>
        </Flex>
      </Provider>
    </div>
  );
}

export default App;
