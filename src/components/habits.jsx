import React, {Component} from 'react';
import Habit from "./habit";
import AddHabit from "./addHabit";
import HabitReset from "./habitReset";

class Habits extends Component {

    render() {
        return (
            <section className="habits">
                <AddHabit
                    onAddHabit={this.props.onAddHabit}
                    lastId={this.props.habits[this.props.habits.length - 1]}
                />
                <ul>
                    {this.props.habits.map(habit =>
                        (<Habit key={habit.id}
                                habit={habit}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}
                        />)
                    )}
                </ul>
                <button className="habits-reset" onClick={this.props.onResetHabit}>Reset All</button>
            </section>
        );
    }
}

export default Habits;