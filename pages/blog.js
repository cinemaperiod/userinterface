import { useState, useEffect } from 'react';
import HeadComponent from '../components/Head';
import FooterComponent from '../components/Footer';
import CodeBlock from '../components/CodeBlock';
import MobileNavigation from '../components/MobileNavigation';
import DesktopNavigation from '../components/DesktopNavigation';
import blog from '../data/blog.json';

export default function Home(props) {
  const [windowWidth, setWindowWidth] = useState(768);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const blk = '`code-segment-${childrenCount}-${i}`';
  const exampleBlock = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}
  
function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key: ${blk}
    }));
  }
}`;
  return (
    <div className='container'>
      <HeadComponent title='Blog - Balaji Academy' />
      <main className='main'>
        {windowWidth < 768 ? <MobileNavigation /> : <DesktopNavigation />}
        <h1 className='title'>
          Introduction to web development
        </h1>

        <p className='description'>
          Published on:&nbsp;
          <span className='highlight-text'>26th Oct, 2020</span>&nbsp;
          Author:&nbsp;
          <span className='highlight-text'>Arun</span> 
        </p>

        <div className='grid'>
          <section href="https://nextjs.org/docs" className='card'>
            <h3>HTML, CSS & Javascript</h3>
            <p>The fundamentals of web development are HTML, CSS & Javascript. Every single website in the world is built using these 3 fundamentals technologies. <a href='https://amazon.in' target='_blank' className='link'>Amazon</a>, <a href='https://flipkart.com' target='_blank' className='link'>Flipkart</a>, <a href='https://netflix.com' target='_blank' className='link'>Neflix</a>, <a href='https://fb.com' target='_blank' className='link'>Facebook</a> - every website are built using these 3 amazing technologies.</p>
          </section>

          <section href="https://nextjs.org/learn" className='card'>
            <p>In this course, you will learn from the basic to advanced topics in web development, <code>creating</code> innovative and amazing websites and become a master web developer.</p>
          </section>

          <section href="https://nextjs.org/learn" className='card'>
            <a href='' className='downloadBtn' download>
              <button>Download Code</button>
            </a>
          </section>

          <section className='card'>
            <CodeBlock 
              value={exampleBlock}
              language='jsx' />
          </section>
          <section href="https://nextjs.org/learn" className='card'>
            <p>Learn React JS - one of the hottest, in-demand skills in the IT industry today.
            Learn React JS - one of the hottest, in-demand skills in the IT industry today.
            Learn React JS - one of the hottest, in-demand skills in the IT industry today 111.</p>
          </section>
          <section href="https://nextjs.org/learn" className='card'>
            <p>Learn React JS - one of the hottest, in-demand skills in the IT industry today.</p>
          </section>
          <section href="https://nextjs.org/learn" className='card'>
            <h3>Hello world</h3>
            <p>Learn React JS - one of the hottest, in-demand skills in the IT industry today.</p>
            <ul>
              <li>This is the first one</li>
              <li>This is the second one</li>
              <li>This is the third one</li>
            </ul>
          </section>
        </div>
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
        }
        .main {
          padding: 6rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-basis: 90%;
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
        
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4.8rem;
          margin: 0 auto;
          max-width: 1000px;
          width: 80vw;
          display: block;
        }
        
        .title,
        .description {
          text-align: left;
        }
        
        .description {
          line-height: 1.5;
          font-size: 2rem;
          max-width: 1000px;
          width: 80vw;
          margin-top: 2rem;
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
          max-width: 1000px;
          width: 80vw;
          margin-top: 1.8rem;
        }
        
        .card {
          margin: 0 0 2rem 0;
          padding: 0;
          flex-basis: 100%;
          width: 100%;
          text-align: left;
          color: inherit;
          text-decoration: none;
        }

        .card h3 {
          margin: 1rem 0;
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
        
        @media only screen and (max-width: 600px) {
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

export async function getStaticProps(context) {
  return {
    props: {
      name: blog
    }
  }
}