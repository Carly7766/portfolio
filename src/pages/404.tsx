import { Link } from 'gatsby';
import React from 'react';

function NotFoundPage() {
    return (
        <>
            <h1>404: Page not found.</h1>
            <p>
                You've hit the void. <Link to="/">Go back.</Link>
            </p>
        </>
    );
}

export default NotFoundPage;
