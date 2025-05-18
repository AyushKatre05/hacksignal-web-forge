
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className={theme === 'dark' ? "text-gray-500" : "text-hackSignal-green-light"} />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-hackSignal-green data-[state=unchecked]:bg-gray-300"
      />
      <Moon size={18} className={theme === 'dark' ? "text-hackSignal-green" : "text-gray-500"} />
    </div>
  );
};

export default ThemeToggle;
