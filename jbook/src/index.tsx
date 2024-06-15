import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import CodeCell from './components/code-cell';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

const App = () => {

    // const error = console.error;
    // console.error = (...args: any) => {
    //     if (/defaultProps/.test(args[0])) return;
    //     error(...args);
    // };

    return (<div>
        <CodeCell />
    </div>);
};

root.render(<App />);