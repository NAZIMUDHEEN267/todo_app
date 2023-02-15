import MANAGE from "../assets/svg/manage.svg";
import ORGANIZE from "../assets/svg/organize.svg";
import PRODUCTIVITY from "../assets/svg/productivity.svg";

import {
    DARK_BLUE,
    DARK_CYAN,
    DARK_GREEN,
    DARK_PINK,
    DARK_YELLOW,
    LIGHT_BLUE,
    LIGHT_CYAN,
    LIGHT_GREEN,
    LIGHT_PINK,
    LIGHT_YELLOW,
} from 'constants/colors';

export const TODO_TYPE_DATA = [
    { label: 'Work', value: '1', bgClr: LIGHT_PINK, color: DARK_PINK, icon: "briefcase" },
    { label: 'Habit', value: '2', bgClr: LIGHT_BLUE, color: DARK_BLUE, icon: "book" },
    { label: 'Shopping', value: '3', bgClr: LIGHT_YELLOW, color: DARK_YELLOW, icon: "shopping-cart" },
    { label: 'Today', value: '4', bgClr: LIGHT_GREEN, color: DARK_GREEN, icon: "sun-o" }
];

export const TODO_REMINDER_DATA = [
    { label: 'On', value: '1', bgClr: LIGHT_CYAN, color: DARK_CYAN, icon: "bell-o" },
    { label: 'Off', value: '2', bgClr: LIGHT_CYAN, color: DARK_CYAN, icon: "bell-slash-o" }
];

export const CAROUSEL_DATA = [
    { svg: MANAGE, title: "Manage your tasks", subtitle: "repudiandae vitae voluptatibus quibusdam voluptate sint id praesentium eius illum corrupti vero, doloremque odio ex."},
    { svg: ORGANIZE, title: "Organize your tasks", subtitle: "repudiandae vitae voluptatibus quibusdam voluptate sint id praesentium eius illum corrupti vero, doloremque odio ex." },
    { svg: PRODUCTIVITY, title: "Increase your productivity", subtitle: "repudiandae vitae voluptatibus quibusdam voluptate sint id praesentium eius illum corrupti vero, doloremque odio ex." },
]
