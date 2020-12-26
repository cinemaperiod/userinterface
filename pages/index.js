import { useState, useEffect } from 'react';
import HeadComponent from '../components/Head';
import FooterComponent from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
import data from '../data/homepage.json';
import Star from '../components/Star';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(768);
  const [slideOptions, setSlideOptions] = useState({
    translate: 0,
    transition: 0.45,
    activeSlideIndex: 0,
    containerWidth: 0,
  });
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);
    setSlideOptions({...slideOptions, containerWidth: document.querySelector('.swiper-wrapper').offsetWidth});
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const navigateSlider = (index) => {
    setSlideOptions({...slideOptions, activeSlideIndex: index });
  }

  const goTopostPage = (pageIndex) => {
    console.log(pageIndex, ' is the page');
  }

  return (
    <div className='container'>
      <HeadComponent />
      <main className='main'>
        {windowWidth < 768 ? <MobileNavigation /> : <DesktopNavigation />}
        <section className='row'>
          <div className='latest-section col-md-3'>
            <h4 className='text-uppercase'>{data && data.trending && data.trending.heading}</h4>
            {data && data.trending && data.trending.posts.length > 0 && data.trending.posts.map((post) => {
              return (
                <div className='border-top mt-1'>
                  <div className='post-item-wrapper'>
                    <a href='' className='category-link text-uppercase'>{post.category}</a>
                    <div className='post-title-wrapper'>
                      <h5><a href='javascript:void(0)'>{post.title}</a></h5>
                    </div>
                    <div className='author-wrapper'>
                      <h5><a href='javascript:void(0)'>By {post.author}</a></h5>
                      <span>{post.date}</span>
                    </div>
                    <div className='tag-wrapper'>
                      <a href='javascript:void(0)'>{post.tag}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='slider-section col-md-6 side-border'>
            <div className='swiper-container'>
              <div className='swiper-wrapper' style={{ transition: 'transform 0.3s cubic-bezier(0.995, 0.020, 0.000, -0.015)', transform: `translate3d(-${slideOptions.containerWidth * slideOptions.activeSlideIndex}px, 0, 0)` }}>
                {data && data.sliderData.length > 0 && data.sliderData.map((slide, index) => {
                  return (
                    <div className='swiper-slide' key={index}>
                      <div className='featured-post-wrapper'>
                        <div className='featured-img-wrapper'>
                          <img src={slide.imgSrc} />
                        </div>
                        <div className='featured-details-wrapper'>
                          <h2 className='featured-title'>
                            <a href=''>{slide.title}</a>
                          </h2>
                          <div className='featured-author'>
                            <a href=''>By {slide.author}</a>
                            <span>{slide.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='swiper-navigation'>
                {data && data.sliderData.length > 0 && data.sliderData.map((slide, index) => {
                  return (<span key={index} className={slideOptions.activeSlideIndex === index ? 'swiper-bullet swiper-bullet-active' : 'swiper-bullet'} onClick={() => navigateSlider(index)}></span>);
                })}
              </div>
            </div>
          </div>
          <div className='trending-section col-md-3'>
            <h4 className='text-uppercase'>{data && data.latest && data.latest.heading}</h4>
            {data && data.latest && data.latest.posts.length > 0 && data.latest.posts.map((post, index) => {
              return (
                <div className='border-top mt-1' key={index}>
                  <div className='post-item-wrapper'>
                    <a href='' className='category-link text-uppercase'>{post.category}</a>
                    <div className='post-title-wrapper'>
                      <h5><a href='javascript:void(0)'>{post.title}</a></h5>
                    </div>
                    <div className='author-wrapper'>
                      <h5><a href='javascript:void(0)'>By {post.author}</a></h5>
                      <span>{post.date}</span>
                    </div>
                    <div className='tag-wrapper'>
                      <a href='javascript:void(0)'>{post.tag}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className='row'>
          {data && data.blockPosts && data.blockPosts.data.length > 0 && data.blockPosts.data.map((block, index) => {
            return (
              <div className='column col-md-3' key={index}>
                <div className='col-overlay'>
                  <a href='' className='overlay-block'>
                    <figure>
                      <img src={block.imgSrc} />
                      <figcaption className='block-figcaption'>
                        <h6>{block.title}</h6>
                        <div className='block-details'>
                          <div className='block-stars'>
                            {Array(block.stars).fill(<Star />)}
                          </div>
                          <div className='block-author'>
                            {block.author}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            )
          })}
        </section>
        <section className='row'>
          <section className='side-block-title'>
            <span className='side-block-overline'></span>
            <h3 className='side-block-heading'>Latest Movie Posts</h3>
          </section>
          <section className='side-block-content'>
            <div className='side-block-columns'>
              <div className='col-md-4 side-block-data'>
                <h2 className='side-block-main-heading'>
                  <a href=''>The best superhero movie is here - The best visual treat for fans</a>
                </h2>
                <div className='side-block-line'>
                  With a galaxy of superhero characters, each having a legacy of their own, the villian matches them all single-handedly and makes this a great cinematic experience.
                </div>
                <div className='side-block-subheading'>
                  <a href=''>Arun Srinivas</a>
                </div>
                <div className='side-block-time'>
                  25th December, 2020
                </div>
              </div>
              <div className='col-md-8 side-block-img'>
                <a href=''>
                  <img src='https://www.minnpost.com/wp-content/uploads/2019/05/ThorAvengersEndgame640.jpg?fit=640%2C405&strip=all' />
                </a>
              </div>
            </div>
          </section>
        </section>
        <section className='row'>
          <section className="side-block-title">
            <span className="side-block-overline"></span>
            <h3 className="side-block-heading">{data && data.tabPosts && data.tabPosts.heading || 'Most Viewed Posts of the Month'}</h3>
          </section>
          <section className='tabs-container'>
            <ul className='movie-list-container-1'>
              {data && data.tabPosts && data.tabPosts.data && data.tabPosts.data.length > 0 && data.tabPosts.data.slice(0, 5).map((tabPost, index) => {
                return (
                  <li key={index} className='movie-list-item' onClick={() => goTopostPage(index+1)}>
                    <div className='tab-list-item-container'>
                      <span>{index+1}</span>
                      <div>
                        <h4>{tabPost}</h4>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <ul className='movie-list-container-2'>
              {data && data.tabPosts && data.tabPosts.data && data.tabPosts.data.length > 0 && data.tabPosts.data.slice(5, 10).map((tabPost, index) => {
                return (
                  <li key={index} className='movie-list-item' onClick={() => goTopostPage(index+6)}>
                    <div className='tab-list-item-container'>
                      <span>{index+6}</span>
                      <div>
                        <h4>{tabPost}</h4>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        </section>
      </main>
      <FooterComponent />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
        }
        .main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          max-width: 100%;
        }
        .col-md-3, .col-md-6 {
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 20px;
          padding-left: 20px;
        }
        .latest-section > h4, .trending-section > h4 {
          font-size: 2rem;
          letter-spacing: 0.5px;
          // text-transform: none;
        }
        .post-item-wrapper {
          margin: 1.4rem 0;
        }
        .category-link {
          color: #227871;
          font-weight: 900;
          font-size: 1.2rem;
        }
        .post-title-wrapper {
          display: flex;
        }
        .post-title-wrapper > h5, .author-wrapper > h5 {
          flex: 0 0 100% !important;
          max-width: 100% !important
          line-height: 24px;
          font-size: 1.6rem;
          color: #000;
        }
        .author-wrapper > h5 {
          font-size: 1.4rem;
          font-weight: 500;
        }
        // .post-title-wrapper a {
        //   line-height: 20px;
        // }
        .border-top {
          border-top: 1px dotted lightgrey;
        }
        .mt-1 {
          margin-top: 1rem!important;
        }
        .text-uppercase {
          text-transform: uppercase;
        }
        .author-wrapper {
          color: #292929;
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .tag-wrapper > a {
          font-size: 1rem;
          color: #292929;
        }
        .side-border {
          border-right: 1px solid rgba(108,108,108,.15);
          border-left: 1px solid rgba(108,108,108,.15);
        }
        .swiper-container {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          transition-property: -webkit-transform;
          transition-property: transform;
          transition-property: transform,-webkit-transform;
          box-sizing: content-box;
          transition-property: transform,-webkit-transform;
        }
        .swiper-slide {
          width: 558px;
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          position: relative;
          transition-property: transform;
        }
        .featured-img-wrapper img {
          width: 100%;
          object-fit: cover;
        }
        .featured-post-wrapper {
          position: relative;
        }
        .featured-details-wrapper {
          background: #f4f4f4;
          width: 90%;
          margin: -30px auto 17px;
          position: relative;
          text-align: center;
          padding: 10px;
          border-radius: 0.3rem;
        }
        .featured-title {
          font-size: 26px;
          color: #333;
          line-height: 36px;
          padding: 10px 0 0;
        }
        .featured-author {
          padding-bottom: 20px;
        }
        .featured-author > a {
          font-size: 11px;
          color: #333;
          border-right: .5px solid #292929;
          padding: 0 10px;
          font-weight: 600;
        }
        .featured-author > span {
          font-size: 11px;
          color: #333;
          padding: 0 10px;
          font-weight: 600;
        }
        .swiper-navigation {
          display: flex;
          justify-content: center;
          transition: 0.5s opacity;
          transform: translate3d(0, 0, 0);
          z-index: 10;
          margin: 10px 0;
        }
        .swiper-bullet {
          margin: 0 5px;
          cursor: pointer;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background: #000;
          opacity: 0.6;
        }
        .swiper-bullet-active {
          background: green;
        }
        .col-overlay {
          overflow: hidden;
          border-radius: 4px;
        }
        .overlay-block img {
          transition: transform .4s;
        }
        .overlay-block img:hover {
          transform: scale(1.05);
        }
        .col-overlay > a {
          display: block;
          position: relative;
          cursor: pointer;
          color: #fff;
          transition: all .2s;
          text-decoration: none;
        }
        .col-overlay figure {
          display: block;
        }
        .col-overlay img {
          width: 100%;
          display: block;
          height: auto;
          max-width: 100%;
          max-height: 165px;
        }
        .block-figcaption {
          position: absolute;
          left: 0;
          width: 100%;
          right: 0;
          top: auto;
          bottom: 0;
          color: #fff;
          display: block;
          padding: 5px 10px;
          background: linear-gradient(180deg,transparent,#000);
        }
        .block-details {
          display: flex;
          justify-content: space-between;
        }
        .block-figcaption > h6 {
          font-size: 1.8rem;
          margin: 0.4rem 0;
        }
        .block-author {
          font-size: 1.6rem;
          font-weight: 600;
        }
        .block-stars {
          align-self: center;
        }
        .side-block-title {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 3rem 0;
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .side-block-overline {
          width: 50px;
          height: 5px;
          background: #d2691e;
          border-radius: 50%;
          align-self: center;
          margin-bottom: 10px;
        }
        .side-block-heading {
          align-self: center;
          font-size: 2.6rem;
        }
        .side-block-columns {
          display: flex;
          background: #f8f6f1;
        }
        .side-block-content {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .side-block-main-heading {
          font-size: 3rem;
        }
        .side-block-subheading {
          padding-top: 4rem;
          font-weight: 600;
          font-style: normal;
          font-size: 1.8rem;
          line-height: .9816rem;
          color: blue;
          font-family: sans-serif;
        }
        .side-block-line {
          font-size: 1.6rem;
          padding-top: 2rem;
        }
        .side-block-time {
          color: grey;
          padding-top: 0.5rem;
          font-size: 1.4rem;
        }
        .side-block-img a {
          color: #1897c2;
          transition: all .2s;
          text-decoration: none;
          opacity: 1 !important;
        }
        .side-block-img img {
          max-width: 100%;
          min-width: 100%;
          max-height: 500px;
          height: 100%;
        }
        .side-block-data {
          padding: 10px 20px;
        }
        .tabs-container {
          display: flex;
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
        }
        .movie-list-container-1, .movie-list-container-2 {
          list-style: none;
          flex: 0 0 50%;
          max-width: 50%;
          padding-right: 1rem;
        }
        .movie-list-item {
          // margin-bottom: 1rem;
          padding-bottom: 1rem;
          padding-top: 1rem;
          padding-left: 1rem;
          border-bottom: 0.1rem dotted cornflowerblue;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }
        .movie-list-item:hover {
          background: #f0efeb;
          border-radius: 0.3rem;
        }
        .tab-list-item-container {
          display: flex;
        }
        .tab-list-item-container > span {
          font-size: 4rem;
          // border: 0.5px solid red;
          border-radius: 10%;
          background: mediumaquamarine;
          padding: 0 10px;
          display: inline-block;
          max-height: 60px;
          text-align: center;
          flex-basis: 10%;
        }
        .tab-list-item-container > div {
          align-self: flex-start;
          margin-left: 10px;
          font-size: 2rem;
          flex-basis: 90%;
        }
        .tab-list-item-container > div > h4 {
          line-height: 2rem;
        }


        @media (min-width: 760px) {
          .col-md-3 {
              flex: 0 0 25%;
              max-width: 25%;
          }
          .col-md-4 {
            flex: 0 0 33.33%;
            max-width: 33.33%;
          }
          .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
          .col-md-8 {
            flex: 0 0 66.67%;
            max-width: 66.67%;
          }
        }

        @media (min-width: 1020px) {
          .col-md-6 {
              flex: 0 0 50%;
              max-width: 50%;
          }
        }

        @media only screen and (max-width: 1024px) and (min-width: 768px) {
          .container {
            min-height: 100vh;
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
      data: data
    }
  }
}