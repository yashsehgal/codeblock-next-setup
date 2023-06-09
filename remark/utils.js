const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
loadLanguages()
require('./prism-diff-highlight')(Prism)

module.exports.addImport = function addImport(tree, mod, name) {
	tree.children.unshift({
		type: 'import',
		value: `import { ${name} as _${name} } from '${mod}'`,
	})
	return `_${name}`
}

module.exports.highlightCode = function highlightCode(code, prismLanguage) {
	const isDiff = prismLanguage.startsWith('diff-')
	const language = isDiff ? prismLanguage.substr(5) : prismLanguage
	const grammar = Prism.languages[isDiff ? 'diff' : language]

	if (!grammar) {
		console.warn(`Unrecognised language: ${prismLanguage}`)
		return Prism.util.encode(code)
	}
	let highlighted = Prism.highlight(code, grammar, prismLanguage)

	return language === 'html'
		? highlighted.replace(
				/\*\*(.*?)\*\*/g,
				(_, text) => `<span class="code-highlight bg-code-highlight">${text}</span>`
		  )
		: highlighted
}