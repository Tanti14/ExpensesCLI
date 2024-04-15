/* Logica de nuestro script */
import { getData, saveData } from "./filesMethods.js";
import { newExpensePrompt } from "./userPrompts.js";
import inquirer from "inquirer";

const createExpense = async () => {
  const newExpense = await newExpensePrompt();
  const expense = {
    ...newExpense,
    amount: new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(newExpense.amount),
    date: new Intl.DateTimeFormat("es-AR").format(newExpense.date),
  };
  const expenses = await getData("expenses");
  expenses.push(expense);
  await saveData("expenses", expenses);
  console.log("=================================");
  console.log("= Gasto agregado correctamente! =");
  console.log("=================================");
};

const showExpenses = async () => {
  const expenses = await getData("expenses");
  if (!expenses.length) {
    console.log("==================================");
    console.log("=   No hay gastos para mostrar   =");
    console.log("==================================");
    return;
  }
  console.log("=================================");
  console.log("=       Listado de gastos       =");
  console.log("=================================");
  expenses.forEach((expense) => {
    console.log("Nombre:", expense.name);
    console.log("Monto:", expense.amount);
    console.log("Fecha:", expense.date);
    console.log("=================================");
  });
};

const main = async () => {
  let isRunning = true;
  while (isRunning) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Seleccione una opción:",
        choices: [
          { name: "Agregar un gasto", value: 1 },
          { name: "Ver todos los gastos", value: 2 },
          { name: "Limpiar la pantalla", value: 3 },
          { name: "Salir", value: 4 },
        ],
      },
    ]);

    switch (action.action) {
      case 1:
        await createExpense();
        break;
      case 2:
        await showExpenses();
        break;
      case 3:
        console.clear();
        break;
      case 4:
        isRunning = false;
        break;
      default:
        isRunning = false;
        break;
    }
  }
  console.log("=================================")
  console.log("= Gracias por usar BaratNotion! =");
  console.log("=================================")
};

main();