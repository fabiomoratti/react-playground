import React from 'react';
import "tabler-react/dist/Tabler.css";
import {Page, Grid, GalleryCard, Form} from "tabler-react";

import SiteWrapper from "../SiteWrapper";

const HomePage = () => {

    return (
        <SiteWrapper>
            <Page.Content>
                <Page.Header
                    title="Home Page title"
                    subTitle="Home Page sub title"
                />
                <Grid.Row className="row-cards">
                    <h1>HomePage component</h1>
                </Grid.Row>
            </Page.Content>
        </SiteWrapper>
    );
}
export default HomePage;