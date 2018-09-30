/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module toolbars/maximize/maximizeui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import maximizeIcon from '../../theme/icons/bold.svg';

const MAXIMIZE = 'maximize';

/**
 * The bold UI feature. It introduces the Bold button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class MaximizeUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add bold button to feature components.
		editor.ui.componentFactory.add( MAXIMIZE, locale => {
			const command = editor.commands.get( MAXIMIZE );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Maximize' ),
				icon: maximizeIcon,
				keystroke: 'CTRL+M',
				tooltip: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => editor.execute( MAXIMIZE ) );

			return view;
		} );
	}
}
