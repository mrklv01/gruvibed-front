import React from "react"

const Comparison = ({ fill = "none", w = 21, h = 21 }: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 21 22'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21 21H0M16.1 16.7143H11.9V6.71429H16.1V16.7143ZM9.1 16.7143H4.9V1H9.1V16.7143Z'
        stroke='#63686D'
        strokeWidth='2'
      />
    </svg>
  )
}

export default Comparison
