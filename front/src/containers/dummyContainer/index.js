import React from 'react';
import Wrapper from './Wrapper';

function pop() {
	window.open(
		'pop/3',
		'_blank',
		'width=1000px,height=720px,toolbar=no,status=1,menubar=no,scrollbar=yes,resizable=yes,location=no',
	);
}

function DummyContainer() {
	return (
		<Wrapper>
			<button onClick={() => pop()}>test</button>
		</Wrapper>
	);
}

export default DummyContainer;
