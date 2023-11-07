import React from 'react';
import {useFetchPostByIdQuery} from "../services/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useParams} from "react-router";

const PostIdPage = (post) => {

    const params = useParams();
    const {data, error, isLoading} = useFetchPostByIdQuery(params.id);

    return (
        <>
            {error
                ?
                <h1 style={{marginTop: '20px'} }>Возникла ошибка: {error}</h1>
                :
                <>
                    {isLoading &&
                        <div style={{textAlign: "center", marginTop: '20px'}}>
                            <h1 style={{marginBottom: '40px'}}>Загрузка...</h1>
                            <Loader/>
                        </div>
                    }

                    {data &&
                        <div>
                            <h1>
                                {data.id}. {data.title}
                            </h1>
                            <div>
                                {data.body}
                            </div>
                        </div>
                    }
                </>
            }
        </>
    );
};

export default PostIdPage;
