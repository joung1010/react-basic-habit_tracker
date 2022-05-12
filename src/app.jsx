import './app.css';
import React, {Component} from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component{
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };

    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count ++ ;
        this.setState({habits});
    };
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count -1;
        habits[index].count = count<0 ? 0 : count;
        this.setState({habits});


    };

    handleDelete = (habit) => {
        const habits  = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

    getTotalCount = ()=>{
        let totalCount = this.state.habits.reduce((sum, value) => sum += value.count, 0);
        if (totalCount <= 0) {
            totalCount = 0;
        }
        return totalCount;
    };

    handleSubmit = (habit) =>{
        const habits = [...this.state.habits];
        habits.push(habit);
        this.setState({habits});
    };

    handleReset = ()=>{
        const habits = [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ];
        this.setState({habits});
    };

    render() {
        return (
            <>
            <Navbar
            totalCount={this.state.habits.filter(item => item.count>0).length}
            />
            <Habits
                habits={this.state.habits}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAddHabit={this.handleSubmit}
                onResetHabit={this.handleReset}
            />
            </>
        );
    }


}

export default App;
