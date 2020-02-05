import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${props => (props.isDayMode ? 'silver' : '#c0c0c085')};
`;

export default Wrapper;
