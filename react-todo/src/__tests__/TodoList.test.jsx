import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through;");
  });

  test("can delete a todo", async () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[1];
    fireEvent.click(deleteButton);

    await waitFor(() =>
      expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument()
    );
  });
});

