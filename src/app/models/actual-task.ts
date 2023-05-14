export interface ITask { 
    status: boolean;
    priority?: boolean;   
    name: string;
    deadline?: Date;
}

export const TASK_MOCK: ITask[] = [
    {
        status: false,
        priority: true,
        name: "Hit the gym",
        deadline: new Date(2023, 8, 30)
    },
    {
        status: true,
        priority: true,
        name: "Buy eggs",
        deadline: new Date(2023, 5, 10)
    },
    {
        status: false,
        priority: false,
        name: "Eat dinner",
    },
    {
        status: false,
        priority: true,
        name: "Buy apples",
        deadline: new Date(2023, 5, 10)
    },
    {
        status: true,
        priority: false,
        name: "Meet George",
    },
    {
        status: true,
        priority: true,
        name: "Feed the cat",
    },
    {
        status: false,
        priority: true,
        name: "Run 1 km",
        deadline: new Date(2023, 6, 30)
    }
];