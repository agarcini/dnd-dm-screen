import { h } from "preact"
import styled from "styled-components"
import { createTransitions } from "../../utilities"

const transitionArray = ["transform", "box-shadow", "background-color"]
const MainContentDiv = styled.div`
	padding: 60px 2% 10px;
	min-height: 100%;
	width: 100%;

	.cardWrapper {
		display: flex;
		flex-wrap: wrap;
		margin: 10px 0;
	}
	.card {
		flex: 0 0 50%;
	}
	.card--content {
		margin: 3px;
		height: 100px;
		border-radius: 4px;
		background-color: cadetblue;
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		transition: ${createTransitions(transitionArray)};

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
		}
	}
`

const MainContent = () => (
	<MainContentDiv>
		<div class="cardWrapper">
			<div class="card">
				<div class="card--content"></div>
			</div>
			<div class="card">
				<div class="card--content"></div>
			</div>
			<div class="card">
				<div class="card--content"></div>
			</div>
			<div class="card">
				<div class="card--content"></div>
			</div>
		</div>
	</MainContentDiv>
)

export default MainContent
