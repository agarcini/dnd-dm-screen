const transitionArray = [
	"border",
	"transform",
	"box-shadow",
	"background-color",
	"border-radius",
]
const transitionSettings = `0.333s ease`

const createTransitionRules = (currentRule, index, ruleArray) => {
	let transition = `${currentRule} ${transitionSettings}`
	if (index !== ruleArray.length - 1) {
		transition += `,`
	}
	return transition
}

export const createTransitions = (
	tArray = transitionArray,
	transitionSettings = transitionSettings
) => tArray.map(createTransitionRules)
