"use client"
import React from 'react'

export default function Bg({active}) {

  return (
    <div className={active ? "bgActive" : "bgDeActive"}></div>
  )
}
