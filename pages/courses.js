import CodeBlock from '../components/CodeBlock';

export default function Courses() {
  const code = `<p className='description'>
  Become a <code className='code'>world class</code> software developer in just 30 days!
</p>`;
  
  return (<>
    <CodeBlock value={code} language='html' />
  </>);
}