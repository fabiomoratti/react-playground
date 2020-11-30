import * as React from "react";
import {Button, Grid, List} from "tabler-react";

// http://tabler-react.com/documentation/#sitefooterreact
export const footerItems =
    {
        links: [
            <a href="/">First Link</a>,
            <a href="/">Second Link</a>,
            <a href="/">Third Link</a>,
            <a href="/">Fourth Link</a>,
            <a href="/">Five Link</a>,
            <a href="/">Sixth Link</a>,
            <a href="/">Seventh Link</a>,
        ],
        note:
            "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
        copyright: (
            <React.Fragment>
                Copyright © 2019
                <a href="."> Tabler-react</a>. Theme by
                <a
                    href="https://codecalm.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    codecalm.net
                </a>{" "}
                All rights reserved.
            </React.Fragment>
        ),
        nav: (
            <React.Fragment>
                <Grid.Col auto={true}>
                    <List className="list-inline list-inline-dots mb-0">
                        <List.Item className="list-inline-item">
                            <a href="/">Documentation</a>
                        </List.Item>
                        <List.Item className="list-inline-item">
                            <a href="/">FAQ</a>
                        </List.Item>
                    </List>
                </Grid.Col>
                <Grid.Col auto={true}>
                    <Button
                        href="https://github.com/tabler/tabler-react"
                        size="sm"
                        outline
                        color="primary"
                        RootComponent="a"
                    >
                        Source code
                    </Button>
                </Grid.Col>
            </React.Fragment>
        ),
    }