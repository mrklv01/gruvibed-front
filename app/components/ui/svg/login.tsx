import React from "react"

const LoginIco = ({ fill = "none", w = 16, h = 22 }: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 16 22'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.2 5.28571C12.2 7.65285 10.3198 9.57142 8 9.57142C5.6802 9.57142 3.8 7.65285 3.8 5.28571C3.8 2.91857 5.6802 1 8 1C10.3198 1 12.2 2.91857 12.2 5.28571Z'
        stroke='#63686D'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 21H1C1 19.985 1 19.0194 1 18.1449C1 15.7764 2.8804 13.8571 5.2 13.8571H10.8C13.1196 13.8571 15 15.7764 15 18.1449C15 19.0194 15 19.985 15 21Z'
        stroke='#63686D'
        strokeWidth='2'
        strokeLinecap='square'
      />
    </svg>
  )
}

export default LoginIco
