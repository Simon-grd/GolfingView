import { STORAGE_KEYS } from './constants';

// Gestion des utilisateurs
export const userStorage = {
  getUsers: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]'),
  
  saveUser: (userData) => {
    const users = userStorage.getUsers();
    users.push(userData);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },
  
  updateUser: (email, updatedData) => {
    const users = userStorage.getUsers();
    const userIndex = users.findIndex(u => u.email === email);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedData };
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }
  },
  
  findUser: (email) => {
    const users = userStorage.getUsers();
    return users.find(u => u.email === email);
  }
};

// Gestion de la session
export const sessionStorage = {
  saveUser: (userData) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
  },
  
  getUser: () => {
    const userData = localStorage.getItem(STORAGE_KEYS.USER);
    return userData ? JSON.parse(userData) : null;
  },
  
  clearUser: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
  }
};