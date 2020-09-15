import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

it("renders the AC button", () => {
  render(<App />);
  expect(screen.getByText("AC")).toBeInTheDocument();
});

describe('multiplication', () => {
  describe('7 x 5', () => {
    it('equals 35', () => {
      render(<App />)
      userEvent.click(screen.getByRole('button', { name: '7' }))
      userEvent.click(screen.getByRole('button', { name: 'x' }))
      userEvent.click(screen.getByRole('button', { name: '5' }))
      userEvent.click(screen.getByRole('button', { name: '=' }))
      expect(screen.getByText('35')).toBeInTheDocument()
    })
  })
})

describe('division', () => {
  describe('100 / 5', () => {
    it('equals 20', () => {
      render(<App />)
      userEvent.click(screen.getByRole('button', { name: '1' }))
      userEvent.click(screen.getByRole('button', { name: '0' }))
      userEvent.click(screen.getByRole('button', { name: '0' }))
      userEvent.click(screen.getByRole('button', { name: '÷' }))
      userEvent.click(screen.getByRole('button', { name: '5' }))
      userEvent.click(screen.getByRole('button', { name: '=' }))
      expect(screen.getByText('20')).toBeInTheDocument()
    })
  })
})

describe('negative numbers', () => {
  describe('-5 + 2', () => {
    it('equals -3', () => {
      render(<App />)
      userEvent.click(screen.getByRole('button', { name: '5' }))
      userEvent.click(screen.getByRole('button', { name: '+/-' }))
      userEvent.click(screen.getByRole('button', { name: '+' }))
      userEvent.click(screen.getByRole('button', { name: '2' }))
      userEvent.click(screen.getByRole('button', { name: '=' }))
      expect(screen.getByText('-3')).toBeInTheDocument()
      userEvent.click(screen.getByRole('button', { name: 'AC' }))
      expect(screen.queryByText('-3')).not.toBeInTheDocument()
    })
  })
})