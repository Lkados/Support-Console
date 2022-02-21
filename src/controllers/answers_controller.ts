const inquirer = require('inquirer');
import {getRequest, addMessages} from '../lib_services/services'

export function answerToRequest() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the request ID :',
            },
        ])
        .then(async (answers: any) => {
            const request = await getRequest(parseInt(answers.id));
            const requests = [request];
            console.table(requests);
            if (request.messages.length > 0) {
                console.log('\n');
                console.log('Messages :');
                console.table(request.messages);
            }
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'answer',
                        message: 'Please enter your answer :',
                    },
                ]).then((async (answers: any) => {
                    await addMessages(request.users.name, request.id, answers.answer);
                }));
        });
};
