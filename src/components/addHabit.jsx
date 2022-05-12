import React, {Component} from 'react';

class AddHabit extends Component {
    handleSubmit = (event)=>{
      const addInput =  document.querySelector(".add-input");
      const habitName = addInput.value;
        if (!habitName) {
            alert("habit을 입력해주세요");
            return event.preventDefault();
        }
        const id = this.props.lastId +1;
        const habit = {id,name:habitName,count:0}
        this.props.onAddHabit(habit);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default AddHabit;