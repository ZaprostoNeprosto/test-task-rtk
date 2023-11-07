import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostsIdPage";
import Home from "../pages/Home";
import Error from "../pages/Error";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<Error to="/error" replace/>} exact="true" />
        </Routes>
    );
};

export default AppRouter;
