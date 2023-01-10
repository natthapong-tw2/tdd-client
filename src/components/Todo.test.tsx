import {act, render, screen, waitFor} from "@testing-library/react"
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

  it("should be able to render", () => {
    expect(() => render(<Todo/>))
      .not.toThrow()
  })

  it("should get todo list when render", () => {
    render(<Todo/>)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => { /**/ })

    expect(TodoService.getTodos)
      .toHaveBeenCalled()
  })

  it("should render task", async () => {
    render(<Todo/>)

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => { /**/ })

    const task1 = await screen.findByText("Task 1")
    expect(task1).toBeInTheDocument()
  })
})