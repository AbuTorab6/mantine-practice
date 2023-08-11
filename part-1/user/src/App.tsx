import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

// ************************
// Set Value handler
// ************************

// function App() {
//   const form = useForm({
//     initialValues: {
//       name: "",
//       email: "",
//     },
//   });

//   var onClickHandle = () => {
//     form.setValues({
//       name: "idhfhvbipyeb",
//       email: `oushfbvvuhrbvf@email.com`,
//     });
//   };

//   return (
//     <>
//       <Box maw={320} mx="auto">
//         <TextInput
//           label="Name"
//           placeholder="Name"
//           {...form.getInputProps("name")}
//         />
//         <TextInput
//           mt="md"
//           label="Email"
//           placeholder="Email"
//           {...form.getInputProps("email")}
//         />

//         <Group position="center" mt="xl">
//           <Button variant="outline" onClick={onClickHandle}>
//             Set random values
//           </Button>
//         </Group>
//       </Box>
//     </>
//   );
// }

// export default App;

// ************************
// Set field Value handler
// ************************

// const App = () => {
//   const form = useForm({
//     initialValues: {
//       name: "",
//       email: "",
//     },
//   });

//   return (
//     <div>
//       <Box maw={320} mx="auto">
//         <TextInput
//           label="Name"
//           placeholder="Name"
//           {...form.getInputProps("name")}
//         />
//         <TextInput
//           mt="md"
//           label="Email"
//           placeholder="Email"
//           {...form.getInputProps("email")}
//         />

//         <Group position="center" mt="xl">
//           <Button
//             variant="outline"
//             onClick={() => form.setFieldValue("name", "name")}
//           >
//             Random name
//           </Button>
//           <Button
//             variant="outline"
//             onClick={() => form.setFieldValue("email", "juboraz727@gmail.com")}
//           >
//             Random email
//           </Button>
//         </Group>
//       </Box>
//     </div>
//   );
// };

// export default App;

// ***********************
// handler transformValues
// ***********************

// const App = () => {
//   const [submittedValues, setSubmittedValues] = useState("");

//   const form = useForm({
//     initialValues: {
//       firstName: "Jane",
//       lastName: "Doe",
//       age: "33",
//     },

//     transformValues: (values) => ({
//       // values = {firstName: "Jane",lastName: "Doe",age: "33",}
//       fullName: `${values.firstName} ${values.lastName}`,
//       age: Number(values.age) || 0,
//     }),
//   });

//   var getData = () => {
//     console.log("transformed value", form.getTransformedValues());
//   };

//   var getTypedValue = () => {
//     console.log("typed value", form.values);
//     type x = typeof form.values;
//   };

//   return (
//     <div>
//       <Box maw={400} mx="auto">
//         <form
//           onSubmit={form.onSubmit((values) => {
//             //values = { fullName: "Jan Doe", age: 33 }
//             setSubmittedValues(JSON.stringify(values));
//           })}
//         >
//           <TextInput
//             label="First name"
//             placeholder="First name"
//             {...form.getInputProps("firstName")}
//           />
//           <TextInput
//             label="Last name"
//             placeholder="Last name"
//             mt="md"
//             {...form.getInputProps("lastName")}
//           />
//           <TextInput
//             type="number"
//             label="Age"
//             placeholder="Age"
//             mt="md"
//             {...form.getInputProps("age")}
//           />
//           <Button type="submit" mt="md">
//             Submit
//           </Button>
//         </form>

//         {submittedValues && <h2>{submittedValues}</h2>}
//       </Box>
//       <button onClick={getData}>get transform values</button>
//       <br />
//       <button onClick={getTypedValue}>get typed values</button>
//     </div>
//   );
// };

// export default App;

// ***********************
// handler error
// ***********************
const App = () => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
    },

    validate: {
      firstName: (value) =>
        value.length < 3 ? "First name is too short" : null,
      lastName: (value) => (value.length < 3 ? "Last name is too short" : null),
    },

    initialErrors: {
      firstName: "First name is too short",
      lastName: "Last name is too short",
    },
  });

  var onClickHandle = () => {
    form.validate();
    console.log(form.validate());
    // form.setErrors({
    //   firstName: "Too short fname",
    //   lastName: "Too short lname",
    // });
    console.log(form.errors);
  };
  return (
    <div>
      <Box maw={320} mx="auto">
        <form onSubmit={form.onSubmit((values)=>{console.log(values)})}>
          <TextInput
            label="firstName"
            placeholder="firstName"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            mt="md"
            label="lastName"
            placeholder="lastName"
            {...form.getInputProps("lastName")}
          />

          <Group position="center" mt="xl">
            {/* <Button variant="outline" onClick={onClickHandle}>
              submit
            </Button> */}
            <Button type="submit" variant="outline">
              submit
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default App;
