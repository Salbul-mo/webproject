import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SideMenuItems } from "../types/menuItem.d"
import { Header } from "../components/custom/header";

export default function Page() {

    const sideMenus: SideMenuItems = [
        {
            name: "Dashboard",
            url: "dashboard",
            icon: "",
            isActive: true
        },
        {
            name: "Study",
            url: "study",
            icon: "",
            isActive: true
        },
        {
            name: "Practice",
            url: "practice",
            icon: "",
            isActive: true
        }
    ];
    // TODO : 사이드 메뉴 바꾸기
    return (
        <>
            <Header />
            <SidebarProvider>
                <AppSidebar sideMenu={sideMenus} />
                <main>
                    <SidebarTrigger />
                    <div className="container mx-auto">
                        <p>
                            Hello. It's First Page
                        </p>
                    </div>
                </main>
            </SidebarProvider>
        </>
    )
}
