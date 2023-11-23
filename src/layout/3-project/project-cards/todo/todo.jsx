import './todo.css'
import todoImg from '../../../../assets/images/todo-mobile.png'

export function Todo () {
  return (
    <article className='todoContainer'>
      <div className='todo'>
        <img src={todoImg} />
        <div className='todo__divText'>
          <h2>To-Do List</h2>
          <p>this is a description</p>
        </div>
      </div>
    </article>
  )
}
