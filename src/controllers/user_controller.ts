const inquirer = require('inquirer');

import { getUsers, getRequestByUser } from "../lib_services/services";
import main from "../../script"

export async function UserRequest() {
    const users = await getUsers();
    console.table(users);
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'user',
                message: 'Please enter user index :',
            },
        ])
        .then(async (answers: any) => {
            console.log(users[answers.user].id);
            const userRequest = await getRequestByUser(parseInt(users[answers.user].id));
            console.table(userRequest);
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
        });
}
