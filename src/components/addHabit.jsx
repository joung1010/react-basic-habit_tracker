import React, {Component} from 'react';

class AddHabit extends Component {
    inputRef = React.createRef();
    formRef =React.createRef();
    //React는 바로 DOM 요소에 접근하지 않고
    // 필요할때는 React.createRef() 이용해서 멤버 변수를 정의한다음
    // 원하는 컴포넌트에 ref 속성으로 연결하면 된다.

    handleSubmit = (event)=>{
        event.preventDefault();
        const habitName = this.inputRef.current.value;
        habitName && this.props.onAddHabit(habitName);
        // this.inputRef.current.value='';
        this.formRef.current.reset();
    };

    render() {
        return (
            <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default AddHabit;