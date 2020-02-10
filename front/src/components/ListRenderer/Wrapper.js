import styled from 'styled-components';
import { site_present_color } from 'internal_constants';

const Wrapper = styled.div`
	/* height: 100%; */
	width: 100%;

	.spinner {
		padding: 20px;
		text-align: center;
	}

	.SLR {
		background-color: ${site_present_color.SLR};
	}
	.TodayHumor {
		background-color: ${site_present_color.TodayHumor};
	}
	.FmKorea {
		background-color: ${site_present_color.FmKorea};
	}
	.TheQoo {
		background-color: ${site_present_color.TheQoo};
	}
	.Bobae {
		background-color: ${site_present_color.Bobae};
	}
	.RuliWeb {
		background-color: ${site_present_color.RuliWeb};
	}
	.Clien {
		background-color: ${site_present_color.Clien};
	}
	.Etoland {
		background-color: ${site_present_color.Etoland};
	}
	.Gasengi {
		background-color: ${site_present_color.Gasengi};
	}
	.Cook {
		background-color: ${site_present_color.Cook};
	}
	.Ilbe {
		background-color: ${site_present_color.Ilbe};
	}
	.Instiz {
		background-color: ${site_present_color.Instiz};
	}
	.Bullpen {
		background-color: ${site_present_color.Bullpen};
	}
	.Ppompu {
		background-color: ${site_present_color.Ppompu};
	}
	.DogDrip {
		background-color: ${site_present_color.DogDrip};
	}

	.headerGrid {
		text-align: center;
		border-bottom: 1px solid wheat;
		background-color: #4e4c4c;

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
		background-color: #272927;
		cursor: pointer;
		overflow: hidden;
		border-bottom: 1px solid wheat;
		line-height: 36px;
		font-weight: bold;
		overflow: hidden;

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
