import { Children, createContext, useState , useEffect} from "react";

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'
export const PostContext = createContext();

export default function PostProvider({children}){
  const [data, setData] = useState(null);
  let info ={}
  let userAction = {}
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);

        response.data.forEach(post => {
          info[post.id] = {
            like: parseInt( Math.random() * 10000),
            dislike: parseInt( Math.random() * 10000),
          };
          userAction[post.id] = {
            like: false,
            dislike: false,
          };
        })
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
    return(
        <PostContext.Provider 
        value={{data, info, userAction}} >
            {children}
        </PostContext.Provider>
    )
}

