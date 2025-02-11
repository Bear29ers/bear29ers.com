module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        message: 'What is directory name? (empty is root)',
        name: 'directory_name',
        type: 'input',
      },
      {
        message: 'What is component name?',
        name: 'component_name',
        type: 'input',
        validate: (answer) => answer !== '',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { directory_name } = answers;
      const path = `src/components/${directory_name ? `${directory_name}/` : ``}`;
      return { ...answers, path };
    });
  },
};
