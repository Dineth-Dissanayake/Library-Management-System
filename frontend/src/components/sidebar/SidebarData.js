import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import StyleIcon from '@mui/icons-material/Style';

export const SidebarData = [
    {
        title: "HOME",
        icon: <HomeIcon />,
        link: "/dashboard"
    },
    {
        title: "ALL WAITING STUDENTS",
        icon: <HourglassBottomIcon />,
        link: "/waiting_students"
    },
    {
        title: "ALL APPROVED STUDENTS",
        icon: <CheckBoxIcon />,
        link: "/approve_students"
    },
    {
        title: "REGISTRATION SETTINGS",
        icon: <HowToRegIcon />,
        link: "/reg_setting"
    },
    {
        title: "ALL BOOKS IN LIBRARY",
        icon: <LocalLibraryIcon />,
        link: "/books"
    },
    {
        title: "ADD BOOK CATEGORY",
        icon: <ImportContactsIcon />,
        link: "/add_book"
    },
    {
        title: "ISSUE OR RETURN BOOK",
        icon: <AssignmentReturnedIcon />,
        link: "/issue_return"
    },
    {
        title: "ALL ISSUED BOOKS",
        icon: <StyleIcon />,
        link: "/issued"
    }
] 