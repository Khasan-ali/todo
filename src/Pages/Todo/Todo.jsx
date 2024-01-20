import { useTodoProp } from "./useTodoProps"
import './Todo.css'

export const Todo = () => {

       const { register, handleSubmit, onSubmit, fields } = useTodoProp()

       return (
              <>
                     <div className="todo-back">
                            <div className="todo-center-inner">
                                   <div className="todo-back-top">
                                          <h1 className="todo-top-heading">Todo List</h1>
                                          <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                                 <input className="form__input" type="text" {...register('name')} placeholder="What would you like to do?" />
                                                 <button className="form__btn" type="submit">Add</button>
                                          </form>
                                   </div>

                                   <div className="todo-table">
                                          <h2 className="todo-table-title">Todo List</h2>
                                          <ul className="list">
                                                 <li className="item-heading">
                                                        <ul className="list-inner">
                                                               <li className="inner-item-heading">List</li>
                                                               <li className="inner-item-heading">Position</li>
                                                               <li className="inner-item-heading">Delete</li>
                                                        </ul>
                                                 </li>
                                                 <li className="item">
                                                        {
                                                               fields.map((row, index) => (
                                                                      <ul className="inner-list-tbody" key={index}>
                                                                             <li className="tbody-item">{row.title}</li>
                                                                             <li className="tbody-item">
                                                                                    <input className="checked-input" type="checkbox" />
                                                                             </li>
                                                                             <li className="tbody-item">
                                                                                    <span className="material-symbols-outlined">
                                                                                           delete
                                                                                    </span>
                                                                             </li>
                                                                      </ul>
                                                               ))
                                                        }
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </div>
              </>
       )
}