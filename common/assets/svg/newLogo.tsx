import * as React from 'react'
import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    style={{
      fill: 'var(--primaryColor)',
    }}
    viewBox="0 0 833 768"
  >
    <path d="m359.5 58.3-47 37.2-.3 42.6-.2 42.6 32.2 24.3c17.8 13.4 32.6 24.9 33 25.4.4.6.8 70.5.8 155.3V540h29V280.5c0-142.7-.1-259.5-.2-259.4-.2 0-21.4 16.8-47.3 37.2zM229.5 190.4l-46 31.3-.3 172.1c-.2 155.5-.1 172.2 1.4 172.2s90.6-22.9 91.2-23.4c.1-.2.1-86.5 0-191.8l-.3-191.6-46 31.2zM506 277.3v84.5l-3.7 1.4c-2.1.8-16.1 5.9-31 11.4l-27.3 9.8v76.8c0 50.5.3 76.8 1 76.8.6 0 1 1.8 1 3.9v3.9l5.8.6c3.1.4 22.6 2 43.2 3.6s39.6 3.2 42.3 3.5l4.7.6V452c0-56.1.4-102 .8-102 .5 0 9.6 3.3 20.3 7.4 10.7 4 20.4 7.6 21.7 8l2.2.7-.2-64.6-.3-64.7-39-21.5c-21.4-11.8-39.6-21.7-40.2-22-1-.4-1.3 16.8-1.3 84zM639 508.4v57.4l16.5 4.1c9 2.2 16.9 4.1 17.5 4.1.7 0 1-19.4 1-58.4 0-54.8-.1-58.5-1.7-59-1-.2-7.9-1.4-15.3-2.6-7.4-1.1-14.5-2.3-15.7-2.5l-2.3-.5v57.4zM377.8 582.7l-2.6.4.5 11.3.6 11.3-6.3.6c-3.5.4-8.9.7-12.1.7H352v-9.9c0-5.5-.3-10.6-.6-11.5-.5-1.2-2-1.6-6.2-1.6h-5.5l.7 16.2c1.8 44.8 1.7 44 4 43.4 1.2-.3 3.8-.6 5.9-.6h3.9l-.7-12.9-.7-12.8 11-.7c6.1-.4 11.6-.5 12.2-.1.5.3 1 3.9 1 7.8 0 4 .3 9.6.6 12.4l.7 5.3h5.3c2.9 0 5.4-.3 5.7-.8.2-.4-.2-12.4-.9-26.7-.7-14.3-1.3-27.5-1.3-29.3-.1-3-.3-3.2-3.3-3.1-1.8.1-4.5.4-6 .6zM408.1 609.3c-5.8 14.4-11.1 27.7-11.8 29.4L395 642h12.8l2.4-6.5 2.3-6.5H436.8l2.4 6.5 2.3 6.5h6.2c3.5 0 6.3-.3 6.3-.7 0-.4-5.1-13.6-11.2-29.5L431.5 583h-13l-10.4 26.3zm21.3-.6L433 619h-8c-4.4 0-8-.3-8-.8 0-1.9 7.6-21 8.1-20.4.4.4 2.3 5.3 4.3 10.9zM469 583.1c-.9 20.6-3.1 47.4-4.1 48.5-.6.8-2.6 1.4-4.4 1.4-3.2 0-3.3.2-3.7 4.4l-.3 4.5 4.7.6c6.4.9 10.3-.1 13.1-3.5 2.6-3.1 3.2-6.4 4.2-23 .3-5.2.8-12.4 1.1-15.9l.6-6.3 8.4.4c4.6.2 8.6.7 8.9 1 .3.3-.1 11.3-.9 24.4-.8 13.1-1.4 24-1.2 24.1.1.1 2.7.5 5.8.9l5.5.6.6-7.8c1.4-17.3 2.9-49.4 2.4-50.7-.4-1.1-4.1-1.6-15.9-2.1-8.4-.4-17.4-.9-20-1.3-2.7-.3-4.8-.4-4.8-.2zM323.8 585.7c-2.7.2-4.8.5-4.8.7 0 .5-9 30.9-9.2 31.2-.2.1-3.9-6.2-8.3-14.2l-8-14.4h-5.7c-3.1 0-6 .5-6.3 1-.3.6 4.8 9.7 11.4 20.3 6.7 10.6 12.1 20.3 12.1 21.6 0 3.1-4.3 7.1-7.7 7.1-4.5 0-5.5 1.2-4.8 5.4l.7 3.6h5.7c6.4 0 8.9-1.3 12-6.4 1.8-2.9 20.1-53.7 20.1-55.9 0-.4-.6-.6-1.2-.5-.7.1-3.4.3-6 .5zM525.4 588.5c-.5 1.4-5.4 51.7-5.4 55.3v2.9l17.3 1.6c18.5 1.8 22.2 1.5 27.1-2.4 5.9-4.6 7.8-14.7 4.2-22.2-2.9-6-8.5-8.6-21.8-10.2-6.2-.8-11.5-1.4-11.7-1.4-.4-.1.5-10.4 1.6-19.3l.5-4.6-5.7-.4c-3.3-.1-5.9.1-6.1.7zm22.3 35c6.9.9 10.3 3.6 10.3 8.1 0 2.1-.8 4.2-2 5.4-2.5 2.5-4.6 2.7-17.2 1.5l-6.8-.7.6-5.6c1-10.6.9-10.5 5.7-9.9 2.3.3 6.6.9 9.4 1.2zM264 591.6c-.8.1-3.6.5-6.1.9l-4.5.6-2.3 18.2c-1.2 10-2.6 19.2-2.9 20.4-.5 1.7-2.4-2.1-8.1-16-4-10-7.7-18.6-8.1-19.1-.5-.5-4.6-.3-9.3.4l-8.5 1.2.4 3.1c.3 1.8 2 14.8 3.9 29 1.8 14.3 3.6 26.1 3.8 26.3.3.3 2.8.2 5.6-.2 5.1-.7 5.1-.7 4.6-3.8-1.2-6.9-5.5-41-5.1-41.3.1-.2 4.1 9.4 8.7 21.3l8.4 21.5 5.5-.6c3-.4 5.6-.8 5.8-.9.1-.2 1.4-10.7 2.9-23.4s2.9-23 3-22.8c.2.2 1.7 10.1 3.2 22 1.6 12 3.1 22 3.4 22.2.3.3 2.7.2 5.5-.2 4.8-.6 5.1-.8 4.6-3.3-.2-1.4-1.8-13.2-3.4-26.1-4.1-32.3-3.6-30-6.8-29.9-1.5.1-3.4.3-4.2.5zM582.6 621.2c-2.1 15-4 28.3-4.3 29.5-.4 1.9 0 2.2 5.2 2.8 3.1.4 5.8.5 6.1.3.2-.3 1.2-6 2.1-12.7 1.5-11 1.9-12.1 3.8-12.1 2.8 0 20.6 2.8 21.1 3.3.3.2-.2 5-1.1 10.5-2.3 15.4-2.4 14.9 3.6 15.7 2.7.4 5.3.4 5.7.1.6-.7 8.1-52.2 8.2-56.2 0-1.8-.8-2.2-5.2-2.7-3.3-.4-5.5-.3-5.9.4-.3.6-1.2 5.8-1.9 11.5s-1.7 10.4-2.1 10.4c-1.7 0-22.4-3.2-22.7-3.5-.2-.2.4-5.3 1.3-11.5s1.5-11.3 1.3-11.5c-.2-.1-2.8-.6-5.8-.9l-5.5-.7-3.9 27.3zM170.7 604.4c-6.7 1.8-12.6 6.3-16.2 12.1-2.6 4.2-3 6-3.3 13.1-.7 14.8 4.6 26.1 14.8 31.8 4.7 2.6 6.5 3 12.5 3 9.9 0 16.8-2.6 22.6-8.4 7.2-7.2 9.3-16.2 6.8-28.2-2.2-10.4-7.5-18-15.4-22.1-5-2.5-15.3-3.2-21.8-1.3zm17.2 11.3c4.5 3.3 8.3 12.3 8.5 20.1.2 11.4-5.8 18.2-15.9 18.2-10.8 0-17-8.3-17-22.7 0-9.6 1.5-12.4 8.6-16.1 5.2-2.7 11.6-2.5 15.8.5zM644.6 622.2c-2 10.6-4.5 23.6-5.5 28.8-1.3 6.7-1.5 9.7-.7 10.1.6.4 3.4 1 6.1 1.3l5 .6 14.9-16.5c8.2-9.1 15-16.4 15.1-16.3.2.2-1.2 8.2-3.1 17.8-1.8 9.6-3.3 18-3.4 18.6 0 .9 10.1 3.8 10.6 3.1.3-.6 10.4-55.5 10.4-56.8 0-1.2-1.5-1.9-5.2-2.7-6.4-1.3-4.9-2.4-23.1 18-7.2 8.1-13.2 14.6-13.4 14.4-.2-.1 1.3-8.6 3.2-18.7 1.9-10 3.2-18.6 2.7-19-.4-.4-2.8-1-5.3-1.4l-4.6-.7-3.7 19.4zM131.3 613.9c-5.2 2.4-7 5.7-9 16.4-1.6 8.7-3.4 12.7-5.8 12.7-1.5 0-2.2-2.2-5.1-15-.9-4.1-1.9-7.8-2.3-8.3-.8-.8-11.1 1.3-11.1 2.3 0 1.4 12.9 56.2 13.4 56.7.2.3 2.9 0 5.9-.7l5.5-1.1-.9-3.7c-.4-2-1.7-7.7-2.8-12.5-1.2-4.8-2.1-9-2.1-9.2 0-.3 1-.5 2.3-.5 2.5 0 8.6 5.9 16.1 15.6l4.7 6.2 6.2-1.4c3.3-.8 6.3-1.7 6.6-1.9.2-.3-.2-1.3-1.1-2.2-.8-1-4.9-5.9-9.1-10.9-4.7-5.7-8.8-9.6-10.9-10.4-1.8-.8-3.4-1.5-3.6-1.6-.2-.1.3-1.5 1.1-3.1.8-1.5 2-5.9 2.5-9.7 1.2-7.5 2.9-10.2 7.2-11.1 2.7-.6 2.7-.7 1.8-4.6-1.2-4.6-2.9-4.9-9.5-2zM708.6 620.2c-.8 2.9-4 15.2-7.1 27.3-3 12.1-5.8 22.7-6 23.6-.4 1.2.7 1.9 5.1 2.8 3 .7 5.7 1.1 5.9.9.2-.1 1.7-5.8 3.5-12.5 3-11.2 3.4-12.2 5.1-11.2 2.8 1.5 3.9 4.1 6.5 16.7 1.4 6.4 2.6 11.8 2.8 12 .8.7 11.8 3.3 12.3 2.8.8-.8-4.7-24.7-6.4-28.1-.9-1.7-2.2-3.7-3-4.7-1.3-1.4-1.2-1.7.7-2.3 1.1-.4 3.8-3 5.9-5.9 5.9-8 6.8-8.6 11.5-8.6 4.2 0 4.4-.1 5.4-3.9.9-3.6.8-4-1.2-4.5-4.2-1.1-12.2-.6-14.4 1-1.2.8-4.7 4.6-7.7 8.4-5.7 7.2-8.7 9.5-11 8.6-1-.4-.7-2.9 1.6-12.1 1.6-6.4 2.7-12 2.4-12.4-.2-.5-2.1-1.2-4.1-1.5-1.9-.4-4.2-1-4.9-1.2-1-.4-1.8 1-2.9 4.8zM365.5 654.6c-2.7.2-12.9.8-22.5 1.4-98.1 6.1-212.9 28.9-284.8 56.6-21.1 8.2-30 13.7-27.6 17.5 1.2 2 13.8.4 52.7-6.5 20.3-3.6 47.3-8.1 60-10.1 170.2-25.6 337.7-26.9 509.2-3.9 27.9 3.7 65.7 9.7 106 16.9 33.2 5.9 40.2 6.8 42.6 5.5 6.4-3.5-3.9-10-33.1-20.8-72-26.8-174-47.1-277.5-55.3-13.1-1-113.9-2.1-125-1.3z" />
  </svg>
)

const NewLogo = memo(SvgComponent)
export default NewLogo