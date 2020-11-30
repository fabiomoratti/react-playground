import * as React from "react";
import {Button, Nav} from "tabler-react";

// Notification Object Props: http://tabler-react.com/documentation/#notificationreact
const notificationsObjects = [
    {
        unread: true,
        avatarURL: "logo192.png",
        message: (
            <React.Fragment>
                <strong>Nathan</strong> pushed new commit: Fix page load performance
                issue.
            </React.Fragment>
        ),
        time: "10 minutes ago",
    },
    {
        unread: true,
        avatarURL: "logo192.png",
        message: (
            <React.Fragment>
                <strong>Alice</strong> started new task: Tabler UI design.
            </React.Fragment>
        ),
        time: "1 hour ago",
    },
    {
        unread: false,
        avatarURL: "logo192.png",
        message: (
            <React.Fragment>
                <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
            </React.Fragment>
        ),
        time: "2 hours ago",
    },
];

// The options are defined by the following type:
// type itemObject = {|
//   +icon?: string,
//   +badge?: string,
//   +badgeType?: string,
//   +value?: string,
//   +isDivider?: boolean,
//   +to?: string,
//   +RootComponent?: React.ElementType,
//   +onClick?: (event: SyntheticMouseEvent<*>) => mixed,
// |};
// The type is defined in the Tabler React source code here:
//      src/components/Dropdown/Dropdown.react.js
// since we don't (yet) use Flow the check is not automatic
const accountDropdownProps = {
    avatarURL: "logo192.png",
    name: "John Doe",
    description: "Administrator",
    options: [
        {icon: "user", value: "Profile", to: "/"},
        {icon: "settings", value: "Settings", to: "/"},
        {icon: "mail", value: "Inbox", badge: "6", to: "/"},
        {icon: "send", value: "Message", to: "/"},
        {isDivider: true},
        {icon: "help-circle", value: "Need help?", to: "/"},
        {icon: "log-out", value: "Sign out", to: "/"},
    ],
};

// Header pops: http://tabler-react.com/documentation/#siteheaderreact
export const headerItems = {
    href: "/",
    alt: "React CRUD with Tabler",
    imageURL: "logo192.png",
    navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
                <Button
                    href="/"
                    target="_blank"
                    outline
                    size="sm"
                    RootComponent="a"
                    color="primary"
                >
                    Test button 1
                </Button>
            </Nav.Item>
    ),
    // Notification Tray props http://tabler-react.com/documentation/#notificationtrayreact
    notificationsTray: {
        notificationsObjects,
        markAllAsRead: () => {
            console.log("markAllAsRead called");
        },
        unread: true
    },
    accountDropdown: accountDropdownProps,
}