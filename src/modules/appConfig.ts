// Handles saving and loading app settings

export function saveQuality(quality: string) {
	localStorage.setItem("quality", quality);
}

export function saveTheme(dark: string) {
	localStorage.setItem("dark", dark);
}

export function changeTheme(darkMode: boolean) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme

	if (darkMode) {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}

	saveTheme(String(darkMode));
}

export function loadSettings() {
	const quality = localStorage.getItem("quality");
	const dark = localStorage.getItem("dark");
	let darkBool = false;

	const qSel = document.getElementById("quality-select") as HTMLSelectElement;
	const themeSw = document.getElementById("theme") as HTMLInputElement;

	// ------Quality------
	// Check if there's a saved setting for quality
	if (quality !== null) {
		qSel.value = quality; // Set the value of the quality selector
	}

	// ------Dark------
	// Check if dark mode is true
	// LocalStorage can only store strings, so booleans have to be converted first.
	if (dark === "true") {
		darkBool = true;
	} else {
		darkBool = false;
	}

	changeTheme(darkBool); // Change theme
	themeSw.checked = darkBool; // Check theme checkbox
}
