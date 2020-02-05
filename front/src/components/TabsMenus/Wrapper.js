import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${props => (props.isDayMode ? 'white' : 'black')};
	color: ${props => (props.isDayMode ? 'black' : 'white')};
`;

export default Wrapper;
