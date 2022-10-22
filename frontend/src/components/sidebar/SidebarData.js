import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import StyleIcon from '@mui/icons-material/Style';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import AddIcon from '@mui/icons-material/Add';
import Group from "@mui/icons-material/Group";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";

export const SidebarData = [
    {
        title: "HOME",
        icon: <HomeIcon />,
        link: "/dashboard"
    },
    {
        title: "ALL APPROVED STUDENTS",
        icon: <CheckBoxIcon />,
        link: "/all_students"
    },
    {
        title: "ADD NEW STUDENTS",
        icon: <AddIcon />,
        link: "/add_student"
    },
    {
        title: "ALL BOOKS IN LIBRARY",
        icon: <LocalLibraryIcon />,
        link: "/manage_books"
    },
    {
        title: "ADD NEW BOOK",
        icon: <LibraryBooksIcon />,
        link: "/add_book"
    },
    {
        title: "ADD BOOK CATEGORY",
        icon: <ImportContactsIcon />,
        link: "/add_category"
    },
    {
        title: "ALL BOOK CATEGORIES",
        icon: <DensitySmallIcon />,
        link: "/category_details"
    },
    {
        title: "ISSUE BOOK",
        icon: <AssignmentReturnedIcon />,
        link: "/issuebook"
    },
    {
        title: "RETURN BOOK",
        icon: <AssignmentReturnedIcon />,
        link: "/returnbook"
    },
    {
        title: "ALL ISSUED BOOKS",
        icon: <StyleIcon />,
        link: "/issued_books_details"
    },
    {
        title: "SCHOOL BRANCHES",
        icon: <HolidayVillageIcon />,
        link: "/view_school_branches"
    },
    {
        title: "STUDENT CATEGORIES",
        icon: <Group />,
        link: "/view_student_categories"
    },
] 