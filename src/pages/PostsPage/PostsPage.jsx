import React, { useEffect, useState } from "react";
import Loader from "../../shared/ui/Loader/Loader";
import { useFetchAllPostsQuery } from "../../shared/api/PostService";
import { Virtuoso } from "react-virtuoso";
import PostItem from "../../entities/Post/ui/PostItem/PostItem";

function PostsPage() {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching } = useFetchAllPostsQuery(page);
    const [posts, setPosts] = useState(() => []);

    useEffect(() => {
        if (data?.length) {
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
            <div className="notification-container">
                <h1 className="notification-text">Загрузка...</h1>
                <Loader />
            </div>
        );
    }



    return (
        <div className="App">
            {error
                ?
                <h1 className="notification-text">Возникла ошибка: {error}</h1>
                :
                <>
                    {isLoading && (
                        <div className="notification-container">
                            <h1 className="notification-text">Загрузка...</h1>
                            <Loader />
                        </div>
                    )}
                    {posts.length > 0
                        ?
                        <div className="content-wrapper">
                            <h1 className="list-title">Список постов</h1>
                            <div className="list-container">
                                <Virtuoso
                                    className="list"
                                    data={posts}
                                    useWindowScroll
                                    style={{ flex: '1' }}
                                    itemContent={itemContent}
                                    endReached={handleEndReached}
                                    overscan={200}
                                />
                            </div>
                        </div>
                        :
                        <h1 className="notification-text">Посты не найдены!</h1>
                    }
                </>
            }
        </div>
    );
}

export default PostsPage;
