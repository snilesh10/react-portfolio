import React from 'react'

const NavBar = ({filterItem,navList}) => {
  return (
    <>
        <div className='text-center mb-5 mt-2'>
            {
                navList.map((currentItem)=>{
                    return (
                        <button className='btn btn-primary btn-lg m-2' onClick={()=>{ filterItem(currentItem) }}>{currentItem}</button>
                    )
                })
            }
        </div>
    </>
  )
}

export default NavBar;