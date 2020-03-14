import { h } from "preact"
import styled from "styled-components"

const ToolbarDiv = styled.div`
	padding: 60px 1% 10px;
	width: 33%;
	font-size: 1em;

	.toolbar--title,
	.toolbar--content {
		padding: 0.666em 1em;
	}
	.toolbar--title {
		margin: 0.8em 0 6px;
		border-radius: 4px;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.333);
		background-color: hsl(58, 24%, 90%);
	}
	.toolbar--content {
		background-color: hsl(63, 12%, 96%);
		border-top: 4px solid hsl(63, 12%, 93%);
	}
`

const Toolbar = () => (
	<ToolbarDiv>
		<h2 class="toolbar--title">Toolbar</h2>
		<div class="toolbar--content">
			<ul class="toolbar-content--options">
				<li>
					<button>Status Conditions</button>
				</li>
			</ul>
		</div>
	</ToolbarDiv>
)

export default Toolbar
