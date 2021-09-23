import * as React from 'react';

import 'normalize.css';
import 'modern-normalize';

type PageLayoutProps = {
    heading: string;
};
class PageLayout extends React.Component<PageLayoutProps> {
    public render(): React.ReactNode {
        return (
            <>
                <p></p>
            </>
        );
    }
}

export default PageLayout;
