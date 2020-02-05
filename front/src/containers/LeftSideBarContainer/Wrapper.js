import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${props => (props.isDayMode ? 'orange' : '#ffa50063')};
	width: ${props => props.width};
`;

export default Wrapper;
