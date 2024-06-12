export default function cookieExists(cookieName) {
	// Split the document.cookie string into individual cookies
	const cookies = document.cookie.split(';')

	// Iterate over the cookies to check if the desired cookie exists
	for (let cookie of cookies) {
		// Trim any leading or trailing whitespace
		cookie = cookie.trim()
		// Check if the cookie name matches the desired name
		if (cookie.startsWith(cookieName + '=')) {
			return true // Cookie found
		}
	}

	return false // Cookie not found
}
