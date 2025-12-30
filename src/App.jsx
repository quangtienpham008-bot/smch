import React from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen pt-14 pb-16 bg-gray-50">
      <Header />
      
      <main className="p-4">
        <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
          <p>Добро пожаловать в приложение СМАЧНО!</p>
          <p className="mt-2 text-sm">Здесь будет ваше вкусное меню.</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
