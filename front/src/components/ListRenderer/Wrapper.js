import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: #264f58;
	/* height: 100%; */
	width: 100%;

	.spinner {
		padding: 20px;
		text-align: center;
	}

	.SLR {
		background-color: red;
	}
	.TodayHumor {
		background-color: teal;
	}
	.FmKorea {
		background-color: orange;
	}
	.TheQoo {
		background-color: blue;
	}
	.Bobae {
		background-color: silver;
	}
	.RuliWeb {
		background-color: gray;
	}
	.Clien {
		background-color: purple;
	}
	.Etoland {
		background-color: slategrey;
	}
	.Gasengi {
		background-color: violet;
	}
	.Cook {
		background-color: coral;
	}

	.headerGrid {
		text-align: center;
		border-bottom: 1px solid wheat;

		.index {
			width: ${props => props.widthsPercent.index + '%'};
			text-align: center;
		}

		.from {
			width: ${props => props.widthsPercent.from + '%'};
			text-align: center;
		}
		.title {
			width: ${props => props.widthsPercent.title + '%'};
			text-align: left;
		}

		.author {
			width: ${props => props.widthsPercent.author + '%'};
			text-align: left;
		}

		.hitCount {
			width: ${props => props.widthsPercent.hitCount + '%'};
			text-align: left;
		}

		.registeredAt {
			width: ${props => props.widthsPercent.registeredAt + '%'};
			text-align: left;
		}

		.downArrow {
			border-color: silver transparent;
			border-style: solid;
			border-width: 11px 6px 11px 6px;
			height: 0px;
			width: 0px;
			margin-top: 2px;
			position: absolute;
		}
	}

	.listGrid {
		cursor: pointer;
		overflow: hidden;
		border-bottom: 1px solid wheat;
		line-height: 36px;
		font-weight: bold;
		.index {
			font-size: 12px;
			width: ${props => props.widthsPercent.index + '%'};
			text-align: center;
		}

		.from {
			font-size: 12px;
			width: ${props => props.widthsPercent.from + '%'};
			text-align: center;
		}

		.title {
			font-size: 14px;
			width: ${props => props.widthsPercent.title + '%'};
			padding-left: 10px;
			padding-right: 10px;
			text-align: left;
		}

		.author {
			font-size: 11px;
			width: ${props => props.widthsPercent.author + '%'};
			line-height: 52px;
			text-align: left;
		}

		.hitCount {
			font-size: 12px;
			width: ${props => props.widthsPercent.hitCount + '%'};
			line-height: 50px;
			text-align: left;
		}

		.registeredAt {
			font-size: 12px;
			width: ${props => props.widthsPercent.registeredAt + '%'};
			text-align: left;
		}
	}
`;

export default Wrapper;
