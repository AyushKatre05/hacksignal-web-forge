
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-gray-400 dark:text-gray-500" />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-hackSignal-green data-[state=unchecked]:bg-gray-300"
      />
      <Moon size={18} className="text-gray-500 dark:text-hackSignal-green" />
    </div>
  );
};

export default ThemeToggle;
