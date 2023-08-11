import React from "react";

import {
  Flex,
  Button,
  Box,
  Title,
  Input,
  Text,
  Group,
  useMantineTheme,
  MantineProvider,
} from "@mantine/core";

const App = () => {
  const theme = useMantineTheme();
  return (
    <div>
      <Flex h="100vh" bg="#f8f8fb" justify="center" align="center">
        <Box
          style={{ boxShadow: "10px 10px 30px #DCDBEF", borderRadius: "5px" }}
          px="30px"
          py="70px"
          w="400px"
          bg="#ffff"
        >
          <Title c="#2d4b81" ta="center" mb="md" order={2}>
            Log in
          </Title>
          <Input mb="sm" placeholder="Enter email" size="lg" />
          <Input mb="sm" placeholder="Enter password" size="lg" />
          <Button bg={theme.colors.button[9]} c="white" fullWidth size="lg">
            Log in
          </Button>
          <Text my="lg" ta="center" fz="md">
            or
          </Text>
          <Button mb="sm" fullWidth size="lg">
            Continue With Google
          </Button>
          <Button mb="sm" fullWidth size="lg">
            Continue With Microsoft
          </Button>
          <Button mb="sm" fullWidth size="lg">
            Continue With Apple
          </Button>
          <Text ta="center" fw={600} mt="lg" c="#2d4b81" fz="lg">
            Can't Log in? Already have an account?
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default App;
