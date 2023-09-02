import SidebarAccordion from './SidebarAccordion'
import WeatherWidget from './WeatherWidget'

export const Sidebar = () => {
    return (
        <div className="bg-black w-1/5 p-4">
            <WeatherWidget />
            <SidebarAccordion />
        </div>
    )
}
