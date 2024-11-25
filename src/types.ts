interface Cost {
    ressource: string,
    quantity: number
}

interface User {
    name: string,
}

interface Factory {
    id: string,
    type: string,
    cost: Cost[],
    prod: number,
    level: number,
    user: User
}