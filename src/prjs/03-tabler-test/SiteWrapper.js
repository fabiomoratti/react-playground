import React from 'react';
import {withRouter} from "react-router-dom";
import {Site, RouterContextProvider} from "tabler-react";

import {navBarItems} from './data/navBarItems';
import {headerItems} from './data/headerItems';
import {footerItems} from './data/footerItems';

const SiteWrapper = ({children}) => {

    return (
        <Site.Wrapper
            headerProps={headerItems}
            navProps={{
                collapse: false,
                itemsObjects: navBarItems,
                withSearchForm: true
            }}
            routerContextComponentType={withRouter(RouterContextProvider)}
            footerProps={footerItems}
        >
            {children}
        </Site.Wrapper>
    );
}

export default SiteWrapper;