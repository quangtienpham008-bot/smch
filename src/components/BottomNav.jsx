import React from 'react';
import { Menu, ShoppingCart, Contact } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-50">
      <button className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-orange-600 w-full h-full">
        <Menu size={24} />
        <span className="text-xs">Меню</span>
      </button>
      <button className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-orange-600 w-full h-full">
        <ShoppingCart size={24} />
        <span className="text-xs">Корзина</span>
      </button>
      <button className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-orange-600 w-full h-full">
        <Contact size={24} />
        <span className="text-xs">Контакты</span>
      </button>
    </nav>
  );
}
