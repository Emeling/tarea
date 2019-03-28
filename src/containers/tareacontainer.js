import React,  {Component} from 'react';

import  Tarea from './../components/tarea'

class TareaContainer extends Component {

    constructor(props){
        super(props);

        this.state={
            datos:[],
        }
    }

    render(){
        const {datos} = this.state;

        return (<Tarea
        datos={datos}
        />
        );
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> {
            return response.json();
        })
        .then((albunDeFotos) => {
            //Aqui estan mis datos
            this.setState({
                datos: albunDeFotos,
            })
        })
    }
}
export default TareaContainer;