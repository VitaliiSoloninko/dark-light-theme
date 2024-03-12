window.addEventListener('load', windowLoad) // зачекати завантаження всієї сторінки

function windowLoad() {
	const htmlBlock = document.documentElement
	const saveUserTheme = localStorage.getItem('user-theme') // зберегти в localStorage вибрану тему
	let userTheme

	// отримуємо яка зараз тема
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	}
	// подія на зміну кольорової теми
	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', e => {
			!saveUserTheme ? changeTheme() : null
		})
}
// Зміна теми по кліку
const themeButton = document.querySelector('.page__theme')
const resetButton = document.querySelector('.page__reset')
