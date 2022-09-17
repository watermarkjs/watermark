/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import WaterMark from '@/water-mark/index.vue'

test('loads and displays greeting', async () => {
  render(WaterMark, {
    props: {
      title: 'Test',
    },
  })

  expect(screen.getAllByText('Test').length).toBe(1)
})
