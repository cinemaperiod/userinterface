import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from '../pages/api/theme';

export default function CodeBlock({ language, value }) {
    return (
      <SyntaxHighlighter 
        language={language} 
        style={theme} 
        wrapLines={true} 
        showLineNumbers={true}>
        {value}
      </SyntaxHighlighter>
    );
};