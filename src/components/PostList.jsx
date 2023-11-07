import React from 'react';
import PostItem from "./PostItem";
import {Virtuoso} from "react-virtuoso";

const PostList = ({ posts, title, isLoading, isFetching}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }
    const itemContent = (index) => {
        const post = posts[index];
        return (
            <PostItem number={index} post={post} />
        );
    };

    const handleEndReached = () => {
        if (!isFetching && !isLoading) {
            fetchMore()
        }
    };

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <Virtuoso
                style={{ height: '70vh' }}
                totalCount={posts.length}
                itemContent={itemContent}
                endReached={handleEndReached}
                // itemContent={() => (
                //     posts.map((post, index) => (
                //         <PostItem number={index + 1} post={post} />
                //     )
                // ))}
            />
        </div>
    );
};

export default PostList;
