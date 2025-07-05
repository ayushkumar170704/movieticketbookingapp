import React from 'react'
import {LayoutDashboardIcon,PlusSquareIcon,ListIcon,ListCollapseIcon} from 'lucide-react'


const AdminSidebar = () => {

  const user = {
    firstName:"Admin",
    lastName:"User",
    imageUrl:assets.profile,
  }

     const adminlinks=[
      {name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon},
      {name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon},
      {name: 'List Shows', path: '/admin/list-shows', icon: ListIcon},
      {name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon},
     ]



  return (
    <div>sidebar</div>
  )
}

export default AdminSidebar