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
  SegmentedControl,
  TextInput,
  Checkbox,
  Anchor,
} from "@mantine/core";

const App = () => {
  const theme = useMantineTheme();
  return (
    <div>
      <Flex h="100vh" bg="#f8f8fb" justify="center" align="center">
        <Box
          style={{ boxShadow: "10px 10px 30px #DCDBEF", borderRadius: "5px" }}
          px="30px"
          py="40px"
          w="400px"
          bg="#ffff"
        >
          <Text fw={600} mb="md" fz="md">
            Select gift frequently
          </Text>
          <SegmentedControl
            fullWidth
            data={[
              { label: "Monthly", value: "Monthly" },
              { label: "One Time", value: "one time" },
            ]}
          />
          <Text fw={600} my="md" fz="lg">
            Select Ammount
          </Text>
          <Group mb="md" spacing="xs" grow>
            <Button variant="outline">$12</Button>
            <Button variant="outline">$30</Button>
            <Button variant="outline">$40</Button>
            <Button variant="outline">$50</Button>
            <Button variant="outline">$60</Button>
          </Group>
          <Checkbox
            my="lg"
            label={
              <Text fw={600}>
                Yes, I'll generously add $0.30 each month to cover the
                transaction fees
              </Text>
            }
            color="dark"
            size="md"
          />
          <TextInput
            mb="md"
            placeholder="Enter Your Name"
            label="Name"
            radius="md"
            size="md"
          />
          <TextInput
            placeholder="Enter Your Email"
            label="Email"
            radius="md"
            size="md"
          />
          <Text c="blue" fw={600} mt="sm" fz="md">
            Give in honor to another person
          </Text>
          <Button
            my="lg"
            styles={{
              root: {
                border: "0px",
              },
            }}
            bg="black"
            c="white"
            fullWidth
            size="lg"
          >
            Donate now
          </Button>
          <Title order={6}>
            By donating, you agree to our{" "}
            <Anchor
              td="underline"
              href="https://mantine.dev/core/"
              span
              c="blue"
              inherit
            >
              term of service
            </Anchor>{" "}
            and{" "}
            <Anchor
              td="underline"
              href="https://mantine.dev/core/"
              span
              c="blue"
              inherit
            >
              privacy policy
            </Anchor>
            something
          </Title>
        </Box>
      </Flex>
    </div>
  );
};

export default App;
