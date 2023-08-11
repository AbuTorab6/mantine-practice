import React from "react";
import { BsArrow90DegLeft } from "react-icons/bs";

import { AiOutlineSetting } from "react-icons/ai";

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
  ActionIcon,
  MultiSelect,
  Checkbox,
} from "@mantine/core";
const App = () => {
  const theme = useMantineTheme();
  return (
    <div>
      <Flex h="100vh" bg="#252642" justify="center" align="center">
        <Box
          style={{
            backgroundColor: "#2f314f",
            borderRadius: "10px",
          }}
          px="30px"
          py="40px"
          w="600px"
        >
          <Group position="apart">
            <Box>
              <ActionIcon
                sx={{
                  backgroundColor: "white",
                  color: "#252642",
                  padding: "10px",
                  "&:hover": {},
                }}
                size="xl"
                radius="xl"
                variant="filled"
              >
                <BsArrow90DegLeft size="2rem" />
              </ActionIcon>
            </Box>
            <Box>
              <Group spacing="sm">
                <Text c="white" fz="md">
                  Settings
                </Text>
                <Text fz="xl" c="white">
                  <AiOutlineSetting />
                </Text>
              </Group>
            </Box>
          </Group>
          <Title my="xl" fw="400" w="36%" c="white" order={3}>
            Share with people and groups
          </Title>
          <MultiSelect
            styles={{
              input: {
                backgroundColor: "#292b48",
              },
              value: {
                backgroundColor: "#2f314f",
                color: "white",
              },
              defaultValueRemove: {
                color: "white",
              },
            }}
            data={["React", "Angular", "Svelte", "Vue"]}
            placeholder="Pick all you like"
            radius="xl"
            size="lg"
            withAsterisk
          />
          <Checkbox
            my="xl"
            styles={{
              input: {
                backgroundColor: "#292b48",
              },
              label: {
                color: "white",
              },
            }}
            label="Notify people"
          />
          <Group position="apart">
            <Box>
              <Text c="blue" fw={700}>
                Send Feedback
              </Text>
            </Box>
            <Box>
              <Button
                styles={{
                  root: {
                    backgroundColor: "#292b48",
                  },
                }}
                size="lg"
              >
                Cancle
              </Button>
              <Button ml="md" size="lg">
                Send
              </Button>
            </Box>
          </Group>
        </Box>
      </Flex>
    </div>
  );
};

export default App;
