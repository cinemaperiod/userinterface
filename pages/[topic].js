import { useState, useEffect, lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeadComponent from '../components/Head';
import FooterComponent from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
// import post from '../data/post.json';
import staticPaths from '../data/staticPaths.json';
import topicsData from '../data/topicsData.json';
const TweetComponent = lazy(() => import('../components/Tweet'));
const YoutubeComponent = lazy(() => import('../components/Youtube'));

export default function Post({ topicsData = {} }) {
  const router = useRouter();
  const { topic } = router.query;
  // const { topicsData } = props;
  const [windowWidth, setWindowWidth] = useState(768);
  const [post, setPostData] = useState({});

  const relatedPostUrls = Object.keys(topicsData).filter((topicData, index) => index <= 4 && topic !== topicData) || [];
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);
    console.log(topic, 'arun2');
    if (topic && topicsData && topicsData[topic]) {
      setPostData(topicsData[topic]);
    }
    if (!topicsData || !topicsData[topic]) {
      window.location.href = '404';
      return false;
    }
    document.querySelector('html').style.visibility = 'visible';
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [topic]);

  if(Object.keys(post).length === 0 && post.constructor === Object) return <div />
  
  return (
    <div className='container'>
      <HeadComponent title={`${post.heading} - Cinema Period - cinemaperiod.com`} />
      <main className='main'>
        {windowWidth < 768 ? <MobileNavigation /> : <DesktopNavigation />}
        <section className='main-container'>
          <section className='content'>
            <h1 className='title'>
              {post.heading}
            </h1>

            <h2 className='subtitle'>
              {post.subHeading}
            </h2>

            <p className='description'>
              <span>
              Published on:&nbsp;<span className='highlight-text'>{post.publishedDate}</span>&nbsp;
              </span>
              <span>
              Author:&nbsp;<span className='highlight-text'>{post.author}</span>&nbsp;
              </span>
              <span>
              Reading Time:&nbsp;<span className='highlight-text'>{post.readTime}</span>&nbsp;
              </span>
            </p>

            <div className='grid'>
              <section className='card' style={{ flexBasis: '100%', textAlign: 'center', width: '100%' }}>
                <figure>
                  <img className='heroImage' src={post.heroImage} alt={post.heading} />
                </figure>
              </section>

              {post && post.basicDetails && (
                <section className='card'>
                  {post.basicDetails.director && (
                    <p>
                      <span className='highlight-text'>Director:</span>&nbsp; {post.basicDetails.director}
                    </p>
                  )}

                  {post.basicDetails.cast && (
                    <p>
                      <span className='highlight-text'>Cast:</span>&nbsp; {post.basicDetails.cast.join(',')}
                    </p>
                  )}

                  {post.basicDetails.streamingOn && (
                    <p>
                      <span className='highlight-text'>Streaming on:</span>&nbsp; {post.basicDetails.streamingOn}
                    </p>
                  )}
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && (
                <section className='card'>
                  <p>{post.textContent[0]}</p>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[1] && (
                <section className='card'>
                  <p>{post.textContent[1]}</p>
                </section>
              )}

              {post.youtubeLinks && post.youtubeLinks.length > 0 && post.youtubeLinks[0].trailer && (
                <section className='card video-card'>
                  <Suspense fallback={<>Loading...</>}>
                    <YoutubeComponent id={post.youtubeLinks[0].trailer} windowWidth={windowWidth} />
                  </Suspense>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[2] && (
                <section className='card'>
                  <p>{post.textContent[2]}</p>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[3] && (
                <section className='card'>
                  <p>{post.textContent[3]}</p>
                </section>
              )}

              {post.tweetLinks && post.tweetLinks.length > 0 && (
                <section className='card tweet-card'>
                  <Suspense fallback={<>Loading...</>}>
                    <TweetComponent
                      id={post.tweetLinks[0]}
                      options={{ width: '500' }}
                    />
                  </Suspense>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[4] && (
                <section className='card'>
                  <p>{post.textContent[4]}</p>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[5] && (
                <section className='card'>
                  <p>{post.textContent[5]}</p>
                </section>
              )}

              {post.youtubeLinks && post.youtubeLinks.length > 0 && post.youtubeLinks[1] && post.youtubeLinks[1].trailer && (
                <section className='card video-card'>
                  <Suspense fallback={<>Loading...</>}>
                    <YoutubeComponent id={post.youtubeLinks[1].trailer} windowWidth={windowWidth} />
                  </Suspense>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[6] && (
                <section className='card'>
                  <p>{post.textContent[6]}</p>
                </section>
              )}

              {post.type !== 'review' && post.secondaryImage && (
                <section className='card' style={{ flexBasis: '100%', textAlign: 'center', width: '100%' }}>
                  <figure>
                    <img className='heroImage' src={post.secondaryImage} alt={post.heading} />
                  </figure>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[7] && (
                <section className='card'>
                  <p>{post.textContent[7]}</p>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[8] && (
                <section className='card'>
                  <p>{post.textContent[8]}</p>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[9] && (
                <section className='card'>
                  <p>{post.textContent[9]}</p>
                </section>
              )}

              {post.textContent && post.textContent.length > 0 && post.textContent[10] && (
                <section className='card'>
                  <p>{post.textContent[10]}</p>
                </section>
              )}

            </div>
          </section>

          <aside className='sidebar'>
            <div className='grid'>
              {Object.keys(post).length > 0 && relatedPostUrls && relatedPostUrls.length > 0 && (
                <section className='card related-reviews-block'>
                  <h3 className='related-reviews-heading'>Related Posts</h3>
                  {relatedPostUrls.map((url, index) => {
                    const currentPost = topicsData[url] || null;
                    if (!currentPost) return null;
                    return (
                      <div className='movie-card' key={index}>
                        <div className='movie-card-container'>
                          <img src={currentPost.posterImage || currentPost.heroImage} alt={currentPost.heading} />
                          <Link href={url} target='_blank'>
                            <a className='movie-card-data'>
                              <h5>{currentPost.heading}</h5>
                              <h6>Date: {currentPost.publishedDate}</h6>
                            </a>
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </section>
              )}

              {post.socialTags && post.socialTags.length > 0 && (
                <section className='card'>
                  <h3 className='social-posts-heading'>Social Posts</h3>
                  <div className='social-tags'>
                    {post.socialTags.map((tag, index) => {
                      if (!tag) return null;
                      return (
                        <span className={tag.media} key={index}>
                          <a href={tag.url} target='_blank'>{tag.content}</a>
                        </span>
                      );
                    })}
                  </div>
                </section>
              )}

              {post.movieGallery && post.movieGallery.length > 0 && (
                <section className='card'>
                  <h3 className='movie-gallery-heading'>Movie Gallery</h3>
                  <div className='gallery-container'>
                    {post.movieGallery.map((img, index) => {
                      if (!img) return null;
                      return (
                        <div className='image-wrapper' key={index}>
                          <img src={img} alt={post.heading} />
                        </div>
                      )
                    })}
                  </div>
                </section>
              )}
            </div>
          </aside>
        </section>
      </main>
      <FooterComponent />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 90vw;
          max-width: 90vw;
        }
        .main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .highlight-text {
          color: #0070f3;
          text-decoration: none;
        }
        
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        
        .title, .subtitle {
          margin: 0;
          line-height: 1.15;
          font-size: 3.2rem;
          margin: 0 auto;
          display: block;
        }
        .subtitle {
          margin-top: 1.5rem;
          font-size: 1.8rem;
          font-weight: 400;
        }
        .title,
        .subtitle,
        .description {
          text-align: center;
        }
        
        .description {
          line-height: 1.5;
          font-size: 1.4rem;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        .description > p {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        
        .grid {
          display: flex;
          align-items: center;
          // justify-content: center;
          flex-wrap: wrap;
          // max-width: 1000px;
          // width: 80vw;
          margin-top: 1.8rem;
        }
        .sidebar .grid, .related-reviews-heading {
          margin-top: 0;
        }
        
        .card {
          margin: 0 0 3rem 0;
          padding: 0;
          // flex-basis: 100%;
          // width: 100%;
          text-align: left;
          color: inherit;
          text-decoration: none;
        }

        .card.video-card {
          margin: 0 auto 2rem;
        }

        .card.tweet-card {
          max-width: 100%;
          width: 500px;
          margin: 0 auto;
        }

        .main-container {
          display: flex;
          justify-content: space-between;
          max-width: 100%;
        }

        .main-container .content {
          flex-basis: 70%;
          max-width: 70%;
          padding: 0 1rem;
        }
        
        .main-container .sidebar {
          flex-basis: 30%;
          max-width: 30%;
        }

        .card h3 {
          margin: 0rem 0 1rem;
          font-size: 2.5rem;
          font-weight: 600;
        }
        
        .card p {
          margin: 0;
          font-size: 2rem;
          line-height: 1.5;
        }

        .card .downloadBtn {
          display: flex;
          justify-content: center;
          cursor: pointer;
        }

        .card .downloadBtn button {
          padding: 15px 20px;
          border-radius: 5px;
          outline: none;
          border: 1px solid #000;
          background: #fff;
          color: #000;
          font-size: 1.8rem;
          font-weight: bold;
          cursor: pointer;
        }

        .card .downloadBtn button:hover {
          text-decoration: underline;
        }

        .card ul {
          margin-top: 2rem;
        }
        .card ul li {
          line-height: 1.5;
          font-size: 2rem;
          margin-left: 2.5rem;
        }

        .link {
          text-decoration: underline;
        }
        .movie-card {
          margin-bottom: 1rem;
        }
        .movie-card-container {
          display: flex;
        }
        .movie-card-container > img {
          height: 7rem;
          max-height: 7rem;
          border-radius: 50%;
          min-width: 8rem;
          max-width: 8rem;
        }

        .movie-card-data {
          padding-left: 0.5rem;
          cursor: pointer;
          transition: color .3s;
        }
        .movie-card-data:hover h5 {
          color: #CD5C5C;
        }
        .movie-card-data > h5 {
          font-size: 2rem;
          line-height: 2rem;
          padding-bottom: 0.4rem;
          font-weight: 600;
        }
        .movie-card-data > h6 {
          font-size: 1.2rem;
        }
        .heroImage {
          max-width: 100%;
          height: auto;
          max-height: 500px;
        }
        .social-tags {
          display: flex;
          flex-wrap: wrap;
        }

        .social-tags > span {
          background: rgb(29, 161, 242);
          padding: 5px 10px;
          border-radius: 15px;
          color: #000;
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 10px 10px 0;
          cursor: pointer;
        }
        .social-tags > span.facebook {
          background: #1877f2;
        }
        .social-tags > span.pinterest {
          background: #e60023;
        }
        .social-tags > span.youtube {
          background: #f00;
        }
        .social-tags > span.instagram {
          background: #405DE6;
        }
        .social-tags > span > a {
          color: #fff;
        }
        .gallery-container {
          display: flex;
          flex-wrap: wrap;
        }
        .gallery-container > .image-wrapper {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0.5rem;
          overflow: hidden;
        }
        .gallery-container > .image-wrapper > img  {
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          border-radius: 0.5rem;
          max-height: 150px;
          cursor: pointer;
          transition: opacity 0.2s ease-in-out, transform 0.4s ease-in;
        }
        .gallery-container > .image-wrapper > img:hover  {
          opacity: 0.9;
          transform: scale(1.05);
        }
        @media only screen and (max-width: 1200px) and (min-width: 768px) {
          .main-container > .content {
            flex-basis: 100%;
            max-width: 100%;
          }
        }
        @media only screen and (max-width: 768px) {
          .title {
            font-size: 3.5rem;
          }
          .title > span {
            white-space: nowrap;
          }
          .description {
            margin: 0.8rem;
          }
          .description .code {
            font-size: 2.1rem;
          }
          .grid {
            width: 80vw;
            margin: 0 auto;
            max-width: 1000px;
            flex-direction: column;
          }
          .card {
            text-align: left;
          }
          .related-reviews-block {
            order: 2;
          }
        }

        @media only screen and (max-width: 1024px) and (min-width: 768px) {
          .container {
            min-height: 50vh;
          }
        }

        @media only screen and (max-width: 1150px) {
          .container {
            overflow: hidden;
            margin: 0 auto;
            flex-wrap: wrap;
            padding: 0;
            width: 100vw;
          }
          .main {
            flex-basis: 100%;
          }
          .main-container {
            flex-basis: 90%;
            max-width: 90%;
            flex-wrap: wrap;
          }
          .main-container > .content {
            flex-basis: 100%;
            max-width: 100%;
          }
          .main-container > .sidebar {
            flex-basis: 100%;
            max-width: 100%;
          }
          .title {
            font-size: 3.2rem;
          }
          .grid {
            max-width: 100%;
            align-items: stretch;
          }
          .card {
            width: 100%;
            max-width: 100%;
          }
          iframe {
            width: 100%;
            max-width: 100%;
            height: auto;
          }
          .card figure, .card figure img {
            width: 100%;
            max-width: 100%;
            flex-basis: 100%;
          }
          .social-posts-heading, 
          .related-reviews-heading, 
          .movie-gallery-heading {
            text-align: center;
          }
          .social-tags {
            justify-content: center;
          }
        }
      `}
      </style>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      topicsData
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: staticPaths && staticPaths.urls,
    fallback: false
  };
}