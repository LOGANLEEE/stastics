import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SiteList from 'components/SiteList';
import { GET_TARGET_SITE_LIST } from 'initial';

const storyActions = {
	CLICK_SITE: action('CLICK_SITE'),
};

export default {
	title: 'SiteList',
	component: SiteList,
	decorator: [withKnobs],
};

export function SiteListComponent() {
	GET_TARGET_SITE_LIST();
	return <SiteList {...object('storyActions', { ...storyActions })} />;
}
