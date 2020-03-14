import { h } from "preact"
import styled from "styled-components"
import { createTransitions } from "../../utilities"

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
	.card--content,
	.card-content--wrapper {
		transition: ${createTransitions()};
	}
	.card--content {
		display: flex;
		margin: 6px;
		padding: 6px;
		border-radius: 4px;
		background-color: hsl(60, 16%, 93%);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.333);

		&:hover {
			cursor: pointer;
			border-radius: 6px;
			background-color: hsl(58, 24%, 90%);
			border-color: rgba(0, 0, 0, 0.125);
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.266);
			transform: translateY(-2px);

			.card-content--wrapper {
				background-color: hsla(0, 0%, 100%, 0.4);
				border-radius: 9px;
			}
		}
	}
	.card-content--wrapper {
		display: flex;
		align-items: flex-start;
		width: 100%;
		border-radius: 4px;
		background-color: hsla(0, 0%, 100%, 0.333);
	}
	.card-content--title {
		order: 2;
		padding: 0.4em 0.333em;
		font-weight: 900;
		letter-spacing: 0.0333em;
	}
	.card-content--image {
		order: 1;
		margin: 6px;
		width: 40%;
		border-radius: 6px;

		div {
			height: 0%;
			padding-bottom: 100%;
			background-color: hsla(0, 0%, 10%, 0.666);
		}
	}
`

const MainContent = () => (
	<MainContentDiv>
		<div class="cardWrapper">
			<div class="card">
				<div class="card--content">
					<div class="card-content--wrapper">
						<div class="card-content--title">Character Name</div>
						<div class="card-content--image">
							<div />
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card--content">
					<div class="card-content--wrapper">
						<div class="card-content--title">Character Name</div>
						<div class="card-content--image">
							<div />
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card--content">
					<div class="card-content--wrapper">
						<div class="card-content--title">Character Name</div>
						<div class="card-content--image">
							<div />
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card--content">
					<div class="card-content--wrapper">
						<div class="card-content--title">Character Name</div>
						<div class="card-content--image">
							<div />
						</div>
					</div>
				</div>
			</div>
		</div>
	</MainContentDiv>
)

export default MainContent
