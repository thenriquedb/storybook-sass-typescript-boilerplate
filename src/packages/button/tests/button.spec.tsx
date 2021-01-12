import React from "react"
import { render, fireEvent } from "@testing-library/react"

// import styles from "../src/button.module.scss"
import { Button } from "../src"

describe("<Button />", () => {
  it("should label is render", () => {
    const label = "Label"
    const { getAllByText } = render(<Button label={label} />)

    expect(getAllByText(label)).toBeTruthy()
  })

  it("should call onClick prop when clicked", () => {
    const label = "Label"

    const onClick = jest.fn()

    const { getByRole } = render(<Button onClick={onClick} label={label} />)
    const button = getByRole("button")

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("should loading prop ", () => {
    const label = "Label"

    const { getByText } = render(<Button loading label={label} />)

    expect(getByText("Loading"))
  })

  it("should not click when button is loading", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button loading onClick={onClick} label="Loading" />,
    )

    fireEvent.click(getByText("Loading"))
    expect(onClick).not.toBeCalled()
  })
})
