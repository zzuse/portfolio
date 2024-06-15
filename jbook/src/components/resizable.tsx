import './resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
    children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    // let resizableProps;
    // if (direction === 'horizontal') {
    //     resizableProps = {};
    // } else {
    //     resizableProps = {};
    // }
    return (<ResizableBox
        minConstraints={[Infinity, 24]}
        maxConstraints={[Infinity, window.innerHeight * 0.9]}
        // height={direction === 'vertical' ? 300 : Infinity}
        height={300}
        width={Infinity}
        resizeHandles={['s']}>
        {children}
    </ResizableBox>);
};

export default Resizable;