import { newTodo } from "@/utils/actions"

const NewTodoForm = () => {
    return (
        <div>
            <form action={newTodo}>
                <input name="content" type="text" />
                <button type="submit">Add New Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm