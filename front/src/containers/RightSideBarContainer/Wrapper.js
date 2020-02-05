import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${props => (props.isDayMode ? 'pink' : '#ffc0cb8c')};
	width: ${props => props.width};
`;

export default Wrapper;
