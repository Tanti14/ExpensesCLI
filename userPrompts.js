/* Menu con opciones para la CLI con inquirer */
import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export const newExpensePrompt = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Nombre del gasto:",
    },
    {
      type: "number",
      name: "amount",
      message: "Monto del gasto:",
    },
    {
      type: "date",
      name: "date",
      message: "Fecha del gasto:",
      locale: "es-AR",
      format: { hour: undefined, minute: undefined },
    },
  ]);
};
