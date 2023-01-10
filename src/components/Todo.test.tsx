import {render, screen, waitFor} from "@testing-library/react"
import {Todo} from "./Todo"
import {TodoService} from "../services/todo-service"
import {Task} from "../models/task";

describe("Todo", () => {

  const todos: Task[] = [
    { id: "1", name: "Task 1", done: true }
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(TodoService, "getTodos")
      .mockResolvedValue(todos)
  })

  it("should get todo list when render", async () => {
    render(<Todo/>)

    await waitFor(() => expect(TodoService.getTodos)
      .toHaveBeenCalled())
  })

  it("should render task", async () => {
    render(<Todo/>)

    const task1 = await screen.findByText("Task 1")
    expect(task1).toBeInTheDocument()
  })
})