/**
 * Check if the browser supports the navigation API
 *
 * @returns {boolean}
 */
const checkIsNavigationSupported = () => {
	return Boolean(document.startViewTransition)
}

/**
 * Load the page using the browser's native fetch
 *
 * @param {string} url
 * @returns {Promise<{data: string, title: string}>}
 */
const fetchPage = async (url) => {
	const response = await fetch(url)
	const text = await response.text() // get the HTML as text

	const [, body] = text.match(/<body>([\s\S]*)<\/body>/i) // extract the body
	const [, title] = text.match(/<title>([\s\S]*)<\/title>/i) // extract the title

	return { body, title }
}

/**
 * Listen to the navigate event and intercept the navigation
 *
 * @returns {void}
 */
export const startViewTransition = () => {
	if (!checkIsNavigationSupported()) return

	window.navigation.addEventListener('navigate', (event) => {
		const toUrl = new URL(event.destination.url)

		if (location.origin !== toUrl.origin) return // ignore external links

		event.intercept({
			async handler () {
				const { body, title } = await fetchPage(toUrl.pathname)

				// use the view transition api to animate the page change
				document.startViewTransition(() => {
					document.getElementById('root').innerHTML = body // update the page content
					document.documentElement.scroll({ top: 0, behavior: 'smooth' }) // scroll to the top
					document.title = title // update the page title
				})
			}
		})
	})
}
