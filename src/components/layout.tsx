import * as React from 'react';

type LayoutProps = {
    heading: string;
};
class Layout extends React.Component<LayoutProps> {
    constructor(props: LayoutProps) {
        super(props);
    }
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

export default Layout;
