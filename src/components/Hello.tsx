import * as React from 'react';
import './Hello.css';
export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
class Hello extends React.Component<any,Object> {
    render() {
        const { name, enthusiasmLevel = 1 ,onDecrement,onIncrement} = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        );
    }
}

export default Hello;
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}