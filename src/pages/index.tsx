import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

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
