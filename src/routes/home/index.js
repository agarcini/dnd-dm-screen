import { h } from "preact"
import styled from "styled-components"
import MainContent from "../../components/mainContent"
import Toolbar from "../../components/toolbar"

const HomeDiv = styled.div`
	display: flex;
`

const Home = () => (
	<HomeDiv>
		<Toolbar />
		<MainContent />
	</HomeDiv>
)

export default Home
