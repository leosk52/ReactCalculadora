import React from 'react';
import Keyboard from './Keyboard';

class Display extends React.Component {
    state = { num1: '', oper: '', num2: '', res: ''};
    
    onInputSubmit = async (but) => {
        await this.setState( {num1: `${this.state.num1}${but}`})
        await this.setState( {res: ''})
        //console.log(this.state.num1)
    }

    onSomaSubmit = async () => {
        await this.setState( {num2: this.state.num1})
        await this.setState( {num1: ''})
        await this.setState( {oper: "+"})
    }

    onSubSubmit = async () => {
        await this.setState( {num2: this.state.num1})
        await this.setState( {num1: ''})
        await this.setState( {oper: "-"})
    }

    onMultSubmit = async () => {
        await this.setState( {num2: this.state.num1})
        await this.setState( {num1: ''})
        await this.setState( {oper: "x"})
    }

    onDivSubmit = async () => {
        await this.setState( {num2: this.state.num1})
        await this.setState( {num1: ''})
        await this.setState( {oper: "/"})
    }

    onRaizSubmit = async () => {
        let num = Math.sqrt(this.state.num1)
        await this.setState( {res: num} )
        await this.setState( {num1: this.state.res})
    }

    onPercentSubmit = async () => {
        await this.setState( {num2: this.state.num1})
        await this.setState( {num1: ''})
        await this.setState( {oper: "%"})
    }

    onClearSubmit = async () => {
        await this.setState( {num1: ''})
        await this.setState( {num2: ''})
        await this.setState( {res: ''})
        await this.setState( {oper: ''})
    }

    onDelSubmit = async () => {
        if (this.state.num1 !== '') {
            let a = this.state.num1.slice(0, this.state.num1.length-1)
            await this.setState( {num1: a} )
        } else if (this.state.oper !== '') {
            let a = this.state.oper.slice(0, this.state.oper.length-1)
            await this.setState( {oper: a} )
        } else if (this.state.num2 !== '') {
            let a = this.state.num2.slice(0, this.state.num2.length-1)
            await this.setState( {num2: a} )
        }
    }


    onResSubmit = async () => {
        let aux = this.state.num2
        await this.setState( {num2: this.state.num1})
        await this.setState( {num1: aux})
        let operation = this.state.oper
        let resul
        if (operation === '+') {
            resul = Number(this.state.num1) + Number(this.state.num2)
        } else if (operation === '-') {
            resul = Number(this.state.num1) - Number(this.state.num2)
            console.log(resul)
        } else if (operation === 'x') {
            resul = Number(this.state.num1) * Number(this.state.num2)
        } else if (operation === '/') {
            resul = Number(this.state.num1) / Number(this.state.num2)
        } else if (operation === '%') {
            resul = (Number(this.state.num1) * Number(this.state.num2)) / 100
        }

        await this.setState( {res: resul})
        this.setState( {num1: ''})
        this.setState( {num2: ''})
        this.setState( {oper: ''})
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={ `${this.state.res}` || (this.state.num2 + this.state.oper + this.state.num1) }
                    onChange={this.onInputSubmit || this.onSomaSubmit || this.onResSubmit}
                />
                <Keyboard 
                onSubmit={this.onInputSubmit} 
                onSoma={this.onSomaSubmit} 
                onRes={this.onResSubmit} 
                onDiv={this.onDivSubmit}
                onSub={this.onSubSubmit}
                onMult={this.onMultSubmit}
                onRaiz={this.onRaizSubmit}
                onPercent={this.onPercentSubmit}
                onClear={this.onClearSubmit}
                onDel={this.onDelSubmit}
                />
            </div>
        );
    }
}

export default Display
