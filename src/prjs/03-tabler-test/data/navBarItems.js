import { NavLink, withRouter } from "react-router-dom";

export const navBarItems = [
    {
        value: "Home",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
    },
    {
        value: "Interface",
        icon: "box",
        subItems: [
            {
                value: "Cards Design",
                to: "/cards",
                LinkComponent: withRouter(NavLink),
            },
            { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
            {
                value: "Pricing Cards",
                to: "/pricing-cards",
                LinkComponent: withRouter(NavLink),
            },
        ],
    },
    {
        value: "Components",
        icon: "calendar",
        subItems: [
            { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
            { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
            { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
            { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) },
        ],
    },
    {
        value: "Pages",
        icon: "file",
        subItems: [
            { value: "Profile", to: "/profile", LinkComponent: withRouter(NavLink) },
            { value: "Login", to: "/login", LinkComponent: withRouter(NavLink) },
            {
                value: "Register",
                to: "/register",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Forgot password",
                to: "/forgot-password",
                LinkComponent: withRouter(NavLink),
            },
            { value: "400 error", to: "/400", LinkComponent: withRouter(NavLink) },
            { value: "401 error", to: "/401", LinkComponent: withRouter(NavLink) },
            { value: "403 error", to: "/403", LinkComponent: withRouter(NavLink) },
            { value: "404 error", to: "/404", LinkComponent: withRouter(NavLink) },
            { value: "500 error", to: "/500", LinkComponent: withRouter(NavLink) },
            { value: "503 error", to: "/503", LinkComponent: withRouter(NavLink) },
            { value: "Email", to: "/email", LinkComponent: withRouter(NavLink) },
            {
                value: "Empty page",
                to: "/empty-page",
                LinkComponent: withRouter(NavLink),
            },
            { value: "RTL", to: "/rtl", LinkComponent: withRouter(NavLink) },
        ],
    },
    {
        value: "Forms",
        to: "/form-elements",
        icon: "check-square",
        LinkComponent: withRouter(NavLink),
    },
    {
        value: "Gallery",
        to: "/gallery",
        icon: "image",
        LinkComponent: withRouter(NavLink),
    },
    {
        icon: "file-text",
        value: "Documentation",
        to:
            process.env.NODE_ENV === "production"
                ? "https://tabler.github.io/tabler-react/documentation"
                : "/documentation",
    },
];
