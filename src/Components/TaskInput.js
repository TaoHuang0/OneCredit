import { useState } from "react"

const TaskInput = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('No Task Input')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="inputTask" onSubmit={onSubmit}>
            <div className="textTask">
                <label className="labelTask"> Task </label>
                <input type="text" className="topInputTask" name="Add Task" placeholder="Add Task Description Here" value={text} onChange={(e) => {setText(e.target.value)}} />
            </div>
            <div className="textTask">
                <label className="labelTask"> Day & Time </label>
                <input type="text" className="topInputTask" name="Add Day & Time" placeholder="MM/DD/YYYY" value={day} onChange={(e) => {setDay(e.target.value)}} pattern='^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$' title='Date Must be in the format MM/DD/YYYY' />
            </div>
            <div className="reminderTask">
                <label className="labelTask"> Set Reminder </label>
                <input id='checkboxTask' type="checkbox" value={reminder} checked={reminder} />
            </div>
            <div>
                <button className="btnTask" style={{ backgroundColor : 'black', color: 'white' }}> Add Task </button>
            </div>
        </form>
    )
}

export default TaskInput
