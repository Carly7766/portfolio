import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head';
import PageLayout from '../layouts/pageLayout';

class Index extends React.Component {
    public render(): React.ReactNode {
        return (
            <>
                <Head />
                <PageLayout heading="ホゲー">
                    <p>Hoge Hogeeeeeeeeeeeeeee</p>
                    <p>Test test Test</p>
                    <Link to="/page-2/">Go to page 2</Link>
                </PageLayout>
            </>
        );
    }
}

export default Index;
