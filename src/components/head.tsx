import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface StaticQueryProps {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            keywords: string;
        };
    };
}

type HeadProps = {
    title?: string;
    description?: string;
};

class Head extends React.Component<HeadProps> {
    public render(): React.ReactNode {
        return (
            <StaticQuery
                query={graphql`
                    query IndexLayoutQuery {
                        site {
                            siteMetadata {
                                title
                                description
                            }
                        }
                    }
                `}
                render={(data: StaticQueryProps) => (
                    <Helmet
                        htmlAttributes={{
                            lang: 'ja',
                        }}
                        title={
                            this.props.title
                                ? this.props.title
                                : data.site.siteMetadata.title
                        }
                        meta={[
                            {
                                name: 'description',
                                content: this.props.description
                                    ? this.props.description
                                    : data.site.siteMetadata.description,
                            },
                            {
                                name: 'keywords',
                                content: data.site.siteMetadata.keywords,
                            },
                        ]}
                    />
                )}
            />
        );
    }
}

export default Head;
