import { useState, useEffect } from 'react';
import HeadComponent from '../components/Head';
import FooterComponent from '../components/Footer';
import Button from '../components/Button';
import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(768);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []); 
  return (
    <div className='container'>
      <HeadComponent />
      <main className='main'>
        {windowWidth < 768 ? <MobileNavigation /> : <DesktopNavigation />}
        <main className='row'>
          <section className='one-third-column'>
            <h4 className='post-title'>Latest</h4>
            <div className='mt-3 border-top'>
              <div className='trending-item'>
                <a href='javascript: void(0)'>Reviews</a>
                <div className='post-title-container'>
                  <h5 className='post-title'>
                    <a href=''>The midnight summer dreams</a>
                  </h5>
                </div>
                <div className='author-container'>
                  <h5 className='author-title'>
                    <a href=''><span>By Arun Srinivas</span></a>
                  </h5>
                </div>
                <div className='tag-container'>
                  <a href=''>Hollywood</a>
                </div>
              </div>
            </div>
          </section>
          <section className='two-third-column'></section>
          <section className='one-third-column'></section>
        </main>
        {/* <div className='grid'>
          <section href="https://nextjs.org/docs" className='card'>
            <h3><a className="card-heading">Web Development &rarr;</a></h3>
            <p>Learn the fundamentals of web development - HTML, CSS & Javascript.</p>
            <Button />
          </section>
          <section href="https://nextjs.org/learn" className='card'>
            <h3><a className="card-heading">React JS Mastery &rarr;</a></h3>
            <p>Learn React JS - one of the hottest, in-demand skills in the IT industry today.</p>
            <Button />
          </section>
        </div> */}
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
        }
        .main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .title .highlight-text {
          color: #0070f3;
          text-decoration: none;
        }
        
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4.8rem;
        }
        
        .title,
        .description {
          text-align: center;
        }
        
        .description {
          line-height: 1.5;
          font-size: 2rem;
        }
        
        .code {
          background: #fff;
          color: #FF8C00;
          font-weight: bold;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.8rem;
          font-weight: bold;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
        }
        
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1.8rem;
        }
        
        .card {
          margin: 1.6rem;
          flex-basis: 45%;
          padding: 2.2rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card .card-heading:hover, 
        .card .card-heading:focus, 
        .card .card-heading:active {
          text-decoration: underline;
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
        
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 2.5rem;
          font-weight: 600;
        }
        
        .card p {
          margin: 0;
          font-size: 2rem;
          line-height: 1.5;
        }

        h4.post-title {
          font-size: 1.25rem;
          letter-spacing: 0.5px;
          text-transform: none;
        }

        .border-top {
          border-top: 1px dotted grey;
        }
        .mt-3 {
          margin-top: 3px;
        }
        
        @media only screen and (max-width: 600px) {
          .row {
            display: flex;
            flex-wrap: wrap;
            align-self: flex-start;
            width: 100%;
          }

          .trending-item {
            margin: 14px 0;
          }

          .trending-item > a {
            font-size: 1.6rem;
            font-weight: 900;
            color: darkgreen;
          }

          .one-third-column, .two-third-column {
            position: relative;
            width: 100%;
            min-height: 1px;
          }

          .one-third-column > h4 {
            background: #000;
            color: #fff;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 10px;
          }
          
          .main {
            width: 95%;
          }
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
            width: 100%;
            flex-direction: column;
          }
          .card {
            text-align: center;
          }
        }

        @media only screen and (max-width: 1024px) and (min-width: 768px) {
          .container {
            min-height: 50vh;
          }
        }
      `}
      </style>
    </div>
  )
}
