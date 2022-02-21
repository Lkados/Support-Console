import prisma from "../lib/prismaClient";

// get all users from db
export async function getUsers() {
    const users = await prisma.users.findMany({
        select: {
            id: true,
            name: true
        }
    });
    return users;
};
/**
 * get user by id
 * @param {number} id
 */
export async function getRequestByUser(userId: number) {
    const requests = await prisma.requests.findMany({
        where:
            {
                user_id: {
                    equals: userId
                },
                status_id: {
                    equals: 2
                }
            },
        select: {
            id: true,
            subject: true,
            description: true
        }
    });
    return requests;
};
// get all requests from db ordered by date of creation (asc)
export async function getRequests() {
    const requests = await prisma.requests.findMany({
        select: {
            id: true,
            subject: true,
            description: true,
            types :{
                select: {
                    name: true
                }
            },
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    return requests;
};
/**
 * get request by id
 * @param {number} id
 */

export function getRequest(id: number) {
    return prisma.requests.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            subject: true,
            description: true,
            messages: true,
            users: true,
        }
    });
};


export function addMessages(sender: string, request_id: number, message: string) {
    return prisma.messages.create({
        data: {
            sender: sender,
            request_id: request_id,
            message: message
        }
    });
};
