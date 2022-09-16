/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { WaterMark } from '..'

test('loads and displays greeting', async () => {
  render(<WaterMark platformName="Test" />)

  expect(screen.getAllByText('Test').length).toBe(2)
})
