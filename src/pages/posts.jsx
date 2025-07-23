import '../styles/posts.css';
import { useEffect, useState , useContext} from 'react';
import  {PostContext}  from '../context/postContext';

export default function Posts() {
    const { data, info, userAction } = useContext(PostContext);
    const [postInfo, setPostInfo] = useState(info);
    const [action, setAction] = useState(userAction);
    function hundle(id, key) {
        var updateAction = { ...action};
        var updatePostInfo = { ...postInfo };

        if (!action[id][key] && key === 'like') {
            updateAction[id][key] = true;

            if (action[id]['dislike']) {
                updatePostInfo[id]['dislike'] -= 1000;
                updateAction[id]['dislike'] = false;
            }
            updatePostInfo[id][key] += 1000;

        } else if (!action[id][key]) {
            updateAction[id][key] = true;

            if (action[id]['like']) {
                updatePostInfo[id]['like'] -= 1000;
                updateAction[id]['like'] = false;
            }
            updatePostInfo[id][key] += 1000;
            
        } else {
            updateAction[id][key] = false;
            updatePostInfo[id][key] -= 1000;
        }

        setAction(updateAction);
        setPostInfo(updatePostInfo);
    }

    return (
        <>
            <div className="container-posts">
                <h1>Posts</h1>
                <main className='main-posts'>
                    {data ? (
                        data.slice(0, 10).map(post => (
                        <div key={post.id} className="post">
                            <h2> Post {post.id}</h2>
                            <h3>Title: {post.title}</h3>
                            <p>{post.body}</p>
                            <div className='div-button-posts'>
                                <button className='dislike-button' onClick={() => hundle(post.id, 'dislike')}>Des Like {postInfo[post.id].dislike < 1000 ? (
                                    postInfo[post.id].dislike
                                ):(
                                    (postInfo[post.id].dislike/1000) + 'K'
                                )}
                                </button>
                                <button className='like-button' onClick={() => hundle(post.id, 'like')}>Like {postInfo[post.id].like < 1000 ? (
                                    postInfo[post.id].like
                                ):(
                                    (postInfo[post.id].like/1000) + 'K'
                                )}
                                </button>
                            </div>
                        </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </main>
            </div>
        </>
    );
}





