import * as React from 'react';

type PageLayoutProps = {
    heading: string;
};
class PageLayout extends React.Component<PageLayoutProps> {
    public render(): React.ReactNode {
        return (
            <>
                <p style={{ color: '#f00' }}>Layout Start</p>
                <h1>{this.props.heading}</h1>
                {this.props.children}
                <p style={{ color: '#00f' }}>Layout End</p>
            </>
        );
    }
}

export default PageLayout;
