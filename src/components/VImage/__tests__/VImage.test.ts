import { fireEvent, render, screen } from '@testing-library/vue'
import VImage from '../VImage.vue'

describe('VImage', () => {
  const src = `${window.location.href}/example.webp`
  const alt = 'Example image'
  const error = 'Error'

  it('should render the image with correct src and alt', async () => {
    render(VImage, { props: { src, alt } })

    const image: HTMLImageElement = await screen.findByAltText(alt)

    expect(image).toBeVisible()
    expect(image.src).toEqual(src)
  })

  it('should display error slot and hide image when the src fails', async () => {
    render(VImage, { props: { src: 'bad-url', alt }, slots: { error } })

    const image = await screen.findByAltText(alt)

    await fireEvent.error(image)

    expect(screen.getByText(error)).toBeVisible()
    expect(image).not.toBeVisible()
  })

  it('should display error slot and hide image when the src is not set', async () => {
    render(VImage, { props: { alt }, slots: { error } })

    expect(await screen.findByText(error)).toBeVisible()
    expect(screen.queryByAltText(alt)).not.toBeInTheDocument()
  })
})
