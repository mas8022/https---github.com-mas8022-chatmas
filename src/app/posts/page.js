import React from 'react'
import Timeline from '../../../components/modules/timeline'
import Me from '../../../utils/me'

export default async function Post() {
  const user = await Me()

  return (
    <div className='w-full p-12 pb-[14rem] flex flex-col gap-8 items-center'>
      <h2>{user && user.userName}</h2>
      <Timeline/>
      <Timeline/>
      <Timeline/>
      <Timeline/>
      <Timeline/>
      <Timeline/>
      <Timeline/>
      <Timeline/>
    </div>
  )
}
