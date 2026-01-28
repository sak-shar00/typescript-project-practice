import { Sun,Moon } from "lucide-react";
import { useTheme } from "../context/theme-provider";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header className="border-b backdrop-blur w-full py-3 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between px-4 mx-auto">
        
        <Link to="/">
          <img 
            src={isDark ? "/dark.jpg" : "/light.avif"} 
            alt="Logo" 
            className="h-16" 
          />
        </Link>
<div>
  
        <div
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? " rotate-180" : "rotate-0"}` }
        >
        
        {isDark ? 
        (<Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />) : (
          <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
        )}
        </div>
</div>
      </div>
    </header>
  )
}

export default Header