export const changeTheme = (bool) => {
  return {
    type: 'THEME',
    payload: bool,
  }
}