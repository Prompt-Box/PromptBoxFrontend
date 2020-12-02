import React from "react"
import ReactDOM from "react-dom"
import Lobby from "./Lobby"

test("render test", () => {
	const root = document.createElement('root')
	ReactDOM.render(<Lobby/>, root)
})

test("welcome text test", () => {
	const root = document.createElement('root')
	ReactDOM.render(<Lobby/>, root)
	const x = root.querySelector("#welcome")
	expect(x).not.toBeUndefined()	
})

test("room map render test", () => {
	const root = document.createElement('root')
	ReactDOM.render(<Lobby/>, root)
	const y = root.querySelector("#roomflex")
	expect(y).not.toBeUndefined()		
})

