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
        link: "/#"
    }
] 