import React from "react"
import ReactDOM from "react-dom"
import GuessButton from "./GuessButton"
import ReactTestUtils from "react-dom/test-utils"

test("render test", () => {
	const root = document.createElement('root')
	ReactDOM.render(<GuessButton/>, root)
})

test("button render test", () => {
	const root = document.createElement('root')
	ReactDOM.render(<GuessButton/>, root)
	const x = root.querySelector("#guesser")
	expect(x).not.toBeUndefined()
})

test("submitted test", () => {
	const root = document.createElement('root')
	ReactDOM.render(<GuessButton/>, root)
	const y = root.querySelector("#guesser")
	expect(y.disabled).toEqual(false)
})