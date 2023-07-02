module.exports = [
  {
    type: 'input',
    name: 'component_name',
    message: 'Input a component name',
    validate: (input) => input !== '',
  },
];
