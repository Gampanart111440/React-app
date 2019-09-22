import React, { Component } from 'react';
import CharacterCard from './CharacterCard'
import './App.css'
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false,
        name: []
    }
}
export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({ name: [...this.state.name, c] })
        console.log("Name", this.state.name);

        this.setState({ guess })
        if (guess.length === this.state.chars.length) {
            if (guess.join('').toString() === this.state.word) {
                this.setState({ guess: [], completed: true })
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
            }
        }
    }

    render() {
        console.log("Word: ", this.state.word);
        console.log("Char: ", this.state.chars);
        console.log("Guess: ", this.state.guess);
        console.log("Guess: ", this.state.guess.join(""));
        console.log("Attemp: ", this.state.attempt);
        console.log("---------------------------------------");

        return (
            <div>
                <h1 className= "card4">Game</h1>
                <div>
                    {Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                        activationHandler={this.activationHandler} />
                    )}
                </div>
                <div>
                    {this.state.name.map((word, i) =>
                        <div key={i} className= "card1">
                            {word}
                        </div>
                    )}
                </div>
                {this.state.name.join("") === this.state.word ? <div> <h1 className= "card2">ถูกต้องแล้วพี่น้อง</h1></div> : ''}
                {this.state.name.join("") !== this.state.word && this.state.attempt === 3 ? <div> <h1 className= "card2">ผิดนะเอาใหม่ได้เสมอนะ</h1></div> : ''}
            </div>
        );
    }
}
