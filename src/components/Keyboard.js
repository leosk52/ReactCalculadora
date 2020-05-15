import React from 'react';

class Keyboard extends React.Component {
    state = { but: ''}
    
    onClickChange = async (param) => {
        await this.setState( {but: param} )
        //console.log(this.state.but)
        this.props.onSubmit(this.state.but)
    }

    onSomaSubmit = async (param) => {
        await this.setState( {but: param} )
        //console.log(this.state.but)
        this.props.onSoma(this.state.but)
    }

    onSubSubmit = async (param) => {
        await this.setState( {but: param} ) 
        //console.log(this.state.but)
        this.props.onSub(this.state.but)
    }

    onMultSubmit = async (param) => {
        await this.setState( {but: param} )
        //console.log(this.state.but)
        this.props.onMult(this.state.but)
    }

    onDivSubmit = async (param) => {
        await this.setState( {but: param} )
        //console.log(this.state.but)
        this.props.onDiv(this.state.but)
    }

    onResSubmit = async (param) => {
        await this.setState( {but: param} )
        //console.log(this.state.but)
        this.props.onRes(this.state.but)
    }

    onRaizSubmit = async (param) => {
        await this.setState( {but: param} )
        this.props.onRaiz(this.state.but)
    }

    onPercentSubmit = async (param) => {
        await this.setState( {but: param} )
        this.props.onPercent(this.state.but)
    } 
    
    onClearSubmit = async (param) => {
        await this.setState( {but: param} )
        this.props.onClear(this.state.but)
    }

    onDelSubmit = async (param) => {
        await this.setState( {but: param} )
        this.props.onDel(this.state.but)
    }

    render() {
        return (
            <div className="Keyboard">
                <button onClick={() => this.onClearSubmit("C")} >C</button>
                <button onClick={() => this.onPercentSubmit("%")} >%</button>
                <button onClick={() => this.onRaizSubmit("RAIZ")} >RAIZ</button>                
                <button onClick={() => this.onDelSubmit("DEL")} >DEL</button>

                <button onClick={() => this.onClickChange(7)} >7</button>
                <button onClick={() => this.onClickChange(8)} >8</button>
                <button onClick={() => this.onClickChange(9)} >9</button>
                <button onClick={() => this.onDivSubmit("/")} >/</button>

                <button onClick={() => this.onClickChange(4)} >4</button>
                <button onClick={() => this.onClickChange(5)} >5</button>
                <button onClick={() => this.onClickChange(6)} >6</button>
                <button onClick={() => this.onMultSubmit("x")} >x</button>

                <button onClick={() => this.onClickChange(1)} >1</button>
                <button onClick={() => this.onClickChange(2)} >2</button>
                <button onClick={() => this.onClickChange(3)} >3</button>
                <button onClick={() => this.onSubSubmit("-")} >-</button>

                <button onClick={() => this.onClickChange(0)} >0</button>
                <button onClick={() => this.onClickChange(".")} >,</button>
                <button onClick={() => this.onResSubmit("=")} >=</button>
                <button onClick={() => this.onSomaSubmit("+")} >+</button>
            </div>
        )
    }
}

export default Keyboard