import { useEffect } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

function Toaster(props) {
  useEffect(() => {
    document.querySelector('html').style.visibility = 'visible';
  }, [])
  console.log(props);
  console.log(props?.data?.toaster?.toasterMeta?.youtubelinks?.split(","))

  if (!props.data.toaster) return (<><h5>Loading....</h5></>);

  return (
    <div>
      <h2>{props.data.toaster.title}</h2>
      <div>{props.data.toaster.toasterMeta.price}</div>
      <div>{props.data.toaster.toasterMeta.watts}</div>
    </div>
  )
}

const GetToasterBySlug = gql`
  query getToasterBySlug($slug: ID!) {
    toaster(id: $slug, idType: SLUG) {
      title
      toasterMeta {
        price
        watts
        description
        youtubelinks
      }
    }
  }
`;

export default graphql(GetToasterBySlug, {
  options: (props) => {
    const slug = 'toaster2';
    // const slug = props.match.params.slug;
    return {
      variables: {
        slug
      }
    }
  }
})(Toaster);