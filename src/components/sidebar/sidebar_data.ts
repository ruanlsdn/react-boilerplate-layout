import { IconType } from "react-icons";
import { SlHome, SlPeople, SlUserFollow, SlBag } from "react-icons/sl";

export type Links = {
    icon: IconType,
    title: string,
    description: string,
    path: string,
}

export type SidebarData = {
    group: string,
    links: Links[]
}

export const SIDEBAR_DATA: SidebarData[] = [
    {
        group: "HOME",
        links: [
            {
                icon: SlHome,
                title: "Welcome",
                description: "Welcome page!",
                path: "/welcome"
            },
        ]
    },
    {
        group: "DATA",
        links: [
            {
                icon: SlPeople,
                title: "Employees",
                description: "Welcome page!",
                path: "/employees"
            },
            {
                icon: SlUserFollow,
                title: "Costumers",
                description: "Welcome page!",
                path: "/costumers"
            },
            {
                icon: SlBag,
                title: "Products",
                description: "Welcome page!",
                path: "/products"
            },
        ]
    },
    {
        group: "PAGES",
        links: [
            {
                icon: SlPeople,
                title: "Page 1",
                description: "Welcome page!",
                path: "/page1"
            },
            {
                icon: SlUserFollow,
                title: "Page 2",
                description: "Welcome page!",
                path: "/page2"
            },
            {
                icon: SlBag,
                title: "Page 3",
                description: "Welcome page!",
                path: "/page3"
            },
        ]
    },
]