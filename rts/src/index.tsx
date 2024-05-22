import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
const App = () => {
    return (
        <div>
            <GuestList />
        </div>
    );
};

root.render(<App />);