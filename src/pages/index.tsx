import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

class Index extends React.Component {
    public render(): React.ReactNode {
        return (
            <Layout heading="ホゲー">
                <p>Hoge Hogeeeeeeeeeeeeeee</p>
                <p>Test test Test</p>
                <Link to="/page-2/">Go to page 2</Link>
            </Layout>
        );
    }
}

export default Index;
