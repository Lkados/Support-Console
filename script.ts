const inquirer = require('inquirer');

import { UserRequest } from "./src/controllers/user_controller";
import { allRequests } from "./src/controllers/requests_controller";
import { answerToRequest } from "./src/controllers/answers_controller";

export default async function main() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: [
                    'List all requests',
                    'Get user requests',
                    'Answer to a request',
                ],
            },
        ])
        .then(async (answers: any) => {
            switch (answers.action) {
                case 'List all requests':
                    await allRequests();
                    break;
                case 'Get user requests':
                    await UserRequest();
                    break;
                case 'Answer to a request':
                    await answerToRequest();
                    break;
            };
        });
}

main();
