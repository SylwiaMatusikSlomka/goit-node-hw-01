require("colors");
const { Command } = require("commander");
const { listContacts, getContactById, addContact, removeContact } = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>", "Action ex: -a add")
  .option("-i, --id <id>", "User ID")
  .option("-n, --name <name>", "User name ex: -n John")
  .option("-e, --email <email>", "User email ex: -n john@john.com")
  .option("-p, --phone <phone>", "User phone number ex: 123456789");

program.parse(process.argv);

const parsedOptions = program.opts();

function invokeAction({ action, id, name, email, phone })  {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("Unknown action type!".bgYellow.black);
      program.help();
  }
}

invokeAction(parsedOptions);