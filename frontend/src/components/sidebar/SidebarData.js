import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import StyleIcon from '@mui/icons-material/Style';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import AddIcon from '@mui/icons-material/Add';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import GroupIcon from '@mui/icons-material/Group';
import Group from "@mui/icons-material/Group";
import HolidayVillage from "@mui/icons-material/HolidayVillage";

export const SidebarData = [
    {
        title: "HOME",
        icon: <HomeIcon />,
        link: "/dashboard"
    },
    {
        title: "ALL WAITING STUDENTS",
        icon: <HourglassBottomIcon />,
        link: "/#"
    },
    {
        title: "ALL APPROVED STUDENTS",
        icon: <CheckBoxIcon />,
        link: "/#"
    },
    {
        title: "ADD NEW STUDENTS",
        icon: <AddIcon />,
        link: "/#"
    },
    {
        title: "REGISTRATION SETTINGS",
        icon: <HowToRegIcon />,
        link: "/#"
    },
    {
        title: "ALL BOOKS IN LIBRARY",
        icon: <LocalLibraryIcon />,
        link: "/#"
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
        link: "/#"
    },
    {
        title: "ISSUE OR RETURN BOOK",
        icon: <AssignmentReturnedIcon />,
        link: "/#"
    },
    {
        title: "ALL ISSUED BOOKS",
        icon: <StyleIcon />,
        link: "/#"
    },
    {
        title: "SCHOOL BRANCHES",
        icon: <HolidayVillageIcon />,
        link: "/view_school_branches"
    },
    {
        title: "STUDENT CATEGORIES",
        icon: <Group />,
        link: "/student_categories"
    },
] 