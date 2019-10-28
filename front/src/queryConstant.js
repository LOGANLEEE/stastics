import { gql } from 'apollo-boost';

export function GET_TEMP_POSTS() {
  return (gql`
    {
          tempPosts(orderBy: registeredAt_DESC,last:100){
            id,
            title,
            author,
          registeredAt,
            hitCount,
            link,
            from,
            createdAt
          }
    }
  `)
};

export default 'default export of queryConstant'