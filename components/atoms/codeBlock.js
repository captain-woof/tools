import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

// Registering languages
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('markdown', markdown)

// Theme for Codeblock
import codeblockTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'

export default function Codeblock({ children, language }){
    return (
        <SyntaxHighlighter language={language} style={codeblockTheme}>
            {children}
        </SyntaxHighlighter>
    )
}