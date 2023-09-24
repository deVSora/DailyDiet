export interface dietItem{
    time : string;
    description: string;
    isIntoDiet: boolean;
}

export interface dietDataProps{
    date: string;
    items: dietItem[]
}

export const dietData : dietDataProps[] = [
    {
        date: "12.08.22",
        items: [
            {
                time: "20:00",
                description: "X-all",
                isIntoDiet: false
            },
            {
                time: "16:00",
                description: "Whey protein with leite",
                isIntoDiet: true
            },
            {
                time: "12:30",
                description: "Cesar salad with grilled chicken",
                isIntoDiet: true
            },
            {
                time: "09:30",
                description: "Banana smoothie with avocado",
                isIntoDiet: true
            },
        ]
    },
    {
        date: "11.08.22",
        items: [
            {
                time: "21:30",
                description: "Banana",
                isIntoDiet: true
            },
            {
                time: "18:30",
                description: "Chocolate pizza",
                isIntoDiet: false
            },
            {
                time: "15:00",
                description: "Sushi",
                isIntoDiet: false
            },
            {
                time: "11:30",
                description: "2 eggs, banana and orange juice",
                isIntoDiet: true
            },
            {
                time: "07:30",
                description: "Hotdog",
                isIntoDiet: false
            },
        ]
    }
];