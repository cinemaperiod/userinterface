import { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeadComponent from '../components/Head';
import FooterComponent from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
// import data from '../data/homepage.json';
import Star from '../components/Star';

export default function Home({ homePageData = {} }) {
  const [windowWidth, setWindowWidth] = useState(768);
  const [slideOptions, setSlideOptions] = useState({
    translate: 0,
    transition: 0.45,
    activeSlideIndex: 0,
    containerWidth: 0,
  });
  const [data, setData] = useState(homePageData);
  
  useEffect(() => {
    // window.addEventListener('resize', handleWindowResize);
    document.querySelector('html').style.visibility = 'visible';
    // return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  
  const navigateSlider = (index) => {
    setSlideOptions({...slideOptions, activeSlideIndex: index });
  }

  const goTopostPage = (pageIndex) => {
    console.log(pageIndex, ' is the page');
  }

  const goPrev = () => {
    let newActiveSlideIndex = null;
    if (slideOptions.activeSlideIndex === 0) {
      newActiveSlideIndex = data.sliderData.length - 1;
    } else {
      newActiveSlideIndex = slideOptions.activeSlideIndex - 1;
    }
    setSlideOptions({...slideOptions, activeSlideIndex: newActiveSlideIndex });
  }

  const goNext = () => {
    let newActiveSlideIndex = null;
    if (slideOptions.activeSlideIndex === data.sliderData.length - 1) {
      newActiveSlideIndex = 0;
    } else {
      newActiveSlideIndex = slideOptions.activeSlideIndex + 1;
    }
    setSlideOptions({...slideOptions, activeSlideIndex: newActiveSlideIndex });
  }

  return (
    <Query query={gql`
      {
        blogposts {
          edges {
            node {
              content
              postData {
                type
                heading
                subheading
                publisheddate
                author
                readtime
                heroimage
                secondaryimage
                language
                content1
                content2
                content3
                content4
                content5
                content6
                youtubelinks
                tweetlinks
                socialtags
                moviegallery
              }
            }
          }
        }
      }
    `}>
      {
        ({ loading, error, data}) => {
          if (loading) return (<h3>Loading....</h3>);
          return (
            <div className='container'>
              <HeadComponent title='Arun' />
              {
                data?.blogposts?.edges?.map((toaster, key) => {
                  return (
                    <div key={key}>
                      <h2>{toaster?.node?.postData?.heading}</h2>
                      <h2>{toaster?.node?.postData?.author}</h2>
                      <h2>{toaster?.node?.postData?.publisheddate}</h2>
                      <h2>{`${toaster?.node?.postData?.readtime} minutes`}</h2>
                      <h2>{toaster?.node?.postData?.language}</h2>
                      <h2>{toaster?.node?.postData?.content1}</h2>
                      <h2>{toaster?.node?.postData?.content2}</h2>
                      <h2>{toaster?.node?.postData?.content3}</h2>
                      <h2>{toaster?.node?.postData?.content4}</h2>
                      <h2>{toaster?.node?.postData?.content5}</h2>
                      <h2>{toaster?.node?.postData?.content6}</h2>
                    </div>
                  );
                })
              }
            </div>
          )
        }
      }
    </Query>
  );
}
