import React from 'react';
import { Link, PageProps } from 'gatsby';

const Test: React.FC<PageProps> = (props: PageProps) => {
    return (
        <>
            <h1>Path:</h1>
            <p>{props.path}</p>
            <Link to="/">Go Back</Link>
        </>
    );
};

export default Test;
