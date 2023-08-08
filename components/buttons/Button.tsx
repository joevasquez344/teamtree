import React from 'react'

const Button = ({ text, theme }: any) => {
  let bgColor = ""
  let textColor = ""
  let hoverBgColor = ""
  let hoverTextColor = ""


  if (theme === "blue") {
    bgColor = "bg-gray-700"
    textColor = "text-gray-200"
    hoverBgColor = "bg-gray-900"
    hoverTextColor = ""
  }
  return (
    <div className={`${bgColor} ${textColor} hover:${hoverBgColor}  px-3 py-2 mb-3 transition ease-in-out cursor-pointer duration-200 font-semibold`}>{text}</div>
  )
}

export default Button