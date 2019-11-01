import { gql } from 'apollo-boost';

export function GET_TEMP_POSTS_LAST_100() {
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

export function GET_TEMP_POSTS_ALL() {
  return (gql`
    {
          tempPosts{
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

export function GET_TEMP_POSTS_ORDER_BY_HITCOUNT_DESC() {
  return (gql`
    {
          tempPosts(orderBy: hitCount_DESC){
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