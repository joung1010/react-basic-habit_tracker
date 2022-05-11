import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };
    handleIncrement = (habit) => {
        // console.log(`handleIncrement ${habit.name}`);
        //1. habits 배열에서 원하는 인덱스 추출
        //2. 해당하는 인덱스의 객체에서 내가 원하는 값만을 바꾸고 싶음
        //3. 값을 바꾸고 다시 state 에 업데이트
     /* my code
        const targetIndex = this.state.habits.findIndex((item => item.id === habit.id));
        let count = habit.count +1;
        let copyArr = [...this.state.habits];
        if (targetIndex !== -1) {
            copyArr[targetIndex] = {...copyArr[targetIndex], count: count};
        }
        this.setState({habits:copyArr});*/
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count ++ ;
        this.setState({habits});    // key 와 value 과 같으면 생략 가능
    };
    handleDecrement = (habit) => {
        // console.log(`handleDecrement ${habit.name}`);
/*        const targetIndex = this.state.habits.findIndex((item => item.id === habit.id));
        let copyArr = [...this.state.habits];
        let count = habit.count -1;
        if (count < 0) {
            count = 0;
        }
        if (targetIndex !== -1) {
            copyArr[targetIndex] = {...copyArr[targetIndex], count: count};
        }
        this.setState({habits:copyArr});*/
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count -1;
        habits[index].count = count<0 ? 0 : count;
        this.setState({habits});    // key 와 value 과 같으면 생략 가능


    };

    handleDelete = (habit) => {
        // console.log(`handleDelete ${habit.name}`);
       /* const targetIndex = this.state.habits.findIndex((item => item.id === habit.id));
        let copyArr = [...this.state.habits];
        if (targetIndex !== -1) {
            copyArr.splice(targetIndex,1);
        }
        this.setState({habits:copyArr});*/
        const habits  = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

    render() {
        return (
            <ul>
                {this.state.habits.map(habit =>
                    (<Habit key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                    />)
                )}
            </ul>
        );
    }
}

export default Habits;