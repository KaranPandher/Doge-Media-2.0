import * as React from 'react';

export interface IButtonMountProps {
    }

export default class ButtonMount extends React.Component<IButtonMountProps> {   // this comes second

    componentDidMount() {
        onclick = () => { // mounting then mounting itself
            const newChange = document.getElementById("freestyle");
            if (newChange !== null) // 
                newChange.innerHTML = "Noooooooo way!"
        }
    }

public render() {
    return (
        <button id="freestyle">Tickle Me Elmo!</button>  // rendered button this goes first
    );
  }
}
