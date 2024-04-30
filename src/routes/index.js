import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from '../components/pages/PageNotFound/notFound';

export default function RouterCom () {
    return( 
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

    );
}

