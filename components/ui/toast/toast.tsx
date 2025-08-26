"use client"

import { Toaster } from "react-hot-toast"

export default function Toast({
  children
}: {
  children: React.ReactElement
}) {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}