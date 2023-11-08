import React from 'react';
import {Route, Routes} from "react-router-dom";
import PostsPage from "../../../pages/PostsPage/PostsPage";
import PostIdPage from "../../../pages/PostIdPage/PostIdPage";
import HomePage from "../../../pages/HomePage/HomePage";
import ErrorPage from "../../../pages/ErrorPage/ErrorPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<ErrorPage to="/error" replace/>} />
        </Routes>
    );
};

export default AppRouter;
