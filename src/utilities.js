const transitionSettings = `
0.2s ease
`
const createTransitionRules = (currentRule, index, ruleArray) => {
	let transition = `${currentRule} ${transitionSettings}`
	if (index !== ruleArray.length - 1) {
		transition += `,`
	}
	return transition
}

export const createTransitions = (
	transitionArray,
	transitionSettings = transitionSettings
) => transitionArray.map(createTransitionRules)
