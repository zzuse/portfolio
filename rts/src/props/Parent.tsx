import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Clicked')} >
        asls;
    </ChildAsFC>;
};

export default Parent;