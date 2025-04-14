interface SideMenuItem {
    name: string,
    url: string,
    icon: string,
    isActive: boolean
}

type SideMenuItems = SideMenuItem[]

export { SideMenuItem, SideMenuItems }
