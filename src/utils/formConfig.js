const formConfig = [
  {
    name: "email",
    label: "Email",
    type: "text",
    validation: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    validation: { required: true },
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    validation: { required: true },
  },
  {
    name: "age",
    label: "Age",
    type: "text",
    validation: { required: true },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: { required: true, minLength: 8 },
  },
];

export default formConfig;
