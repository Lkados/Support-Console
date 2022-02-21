const inquirer = require('inquirer');

import main from "../../script";
import { getRequests } from "../lib_services/services";

export async function allRequests() {
    const requests = await getRequests();
    console.table(requests);
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'user',
                message: 'Would you like to go back to the main menu? y/n :',
            },
        ])
        .then((answers: any) => {
            if (answers.user === 'y') {
                main();
            }
        });
}