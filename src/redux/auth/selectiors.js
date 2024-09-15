// Проверяет, авторизован ли пользователь
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Возвращает данные текущего пользователя
export const selectUser = (state) => state.auth.user;

// Проверяет, выполняется ли процесс обновления данных пользователя
export const selectIsRefreshing = (state) => state.auth.isRefreshing;