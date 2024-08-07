import { render, screen } from '@testing-library/vue'
import VInitials from '../VInitials.vue'

describe('VInitials', () => {
  const name = 'John Doe'

  it('should render 2 initials by default', () => {
    render(VInitials, { props: { name } })
    expect(screen.getByText('JD')).toBeVisible()
  })

  it('should render the first two initials when num is 1', () => {
    render(VInitials, { props: { name, num: 1 } })
    expect(screen.getByText('J')).toBeVisible()
  })

  it('should not render any initials when num is 0', () => {
    render(VInitials, { props: { name, num: 0 } })
    expect(screen.queryByText('J')).not.toBeInTheDocument()
  })

  it('should not render any initials when name is not provided', () => {
    render(VInitials)
    expect(screen.queryByText('J')).not.toBeInTheDocument()
  })
})
