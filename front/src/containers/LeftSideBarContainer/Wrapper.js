import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${props => (props.isDayMode ? 'orange' : '#28672463')};
	width: ${props => props.width};
`;

export default Wrapper;
