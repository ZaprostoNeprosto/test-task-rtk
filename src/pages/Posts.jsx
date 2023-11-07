import React, { useEffect, useState } from "react";
import Loader from "../components/UI/Loader/Loader";
import { useFetchAllPostsQuery } from "../services/PostService";
import { Virtuoso } from "react-virtuoso";
import PostItem from "../components/PostItem";

function Posts() {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching } = useFetchAllPostsQuery(page);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (data) {
            setPosts((prevPosts) => [...prevPosts, ...data]);
        }
    }, [data]);

    const itemContent = (index) => {
        const post = posts[index];
        return <PostItem number={index} post={post} />;
    };

    const handleEndReached = () => {
        if (!isFetching && !isLoading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    if (isLoading) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ marginBottom: "40px" }}>Загрузка...</h1>
                <Loader />
            </div>
        );
    }

    return (
        <div className="App">
            {error ? (
                <h1 style={{ marginTop: "20px" }}>Возникла ошибка: {error}</h1>
            ) : (
                <>
                    {isLoading && (
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <h1 style={{ marginBottom: "40px" }}>Загрузка...</h1>
                            <Loader />
                        </div>
                    )}

                    {posts.length > 0 ? (
                        <div>
                            <h1 style={{ textAlign: "center" }}>Список постов</h1>
                            <Virtuoso
                                data={posts}
                                style={{ height: "70vh" }}
                                totalCount={posts.length}
                                itemContent={itemContent}
                                endReached={handleEndReached}
                            />
                        </div>
                    ) : (
                        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
                    )}
                </>
            )}
        </div>
    );
}

export default Posts;
