import { gql } from 'apollo-boost';

export function GET_PREPROCESSED_POSTS_LAST_100() {
  return (gql`
    {
          preProcessed(orderBy: registeredAt_DESC,last:100){
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

export function GET_PREPROCESSED_POSTS_ALL() {
  return (gql`
    {
          preProcessed{
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

export function GET_PREPROCESSED_POSTS_ORDER_BY_HITCOUNT_DESC() {
  return (gql`
    {
          preProcessed(orderBy: hitCount_DESC){
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