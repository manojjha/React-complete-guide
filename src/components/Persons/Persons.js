import React, { Component } from 'react';
import Person from './Person/Person'


class Persons extends Component {
    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    } */

/*     componentWillReceiveProps(props){
        console.log('[Persons.js] componentWillRecieveProps', props);
    } */

    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js] this.getSnapshotBeforeUpdate');
        return {message : 'snapshot!!'};
    }
    componentDidUpdate(prevProps, prevState, snapshopt) {
        console.log('[persons.js] componentDidupdate ');
        console.log(snapshopt);
    }


    render() {
        console.log('[persons.js] rendering....')
        return this.props.persons.map((person, index) => {
            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
            />
            );
        });
    }
}
export default Persons;