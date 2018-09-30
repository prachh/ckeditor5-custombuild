import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import maximizeIcon from '../../theme/icons/maximize.svg';

const MAXIMIZE = 'maximize';


export default class MaximizeUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {

		console.log( 'MaximizeUI was initialized' );

		const editor = this.editor;
		editor.ui.componentFactory.add( 'Maximize', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Maximize',
				icon: maximizeIcon,
				keystroke: 'CTRL+M',
                tooltip: true
            } );

            // Callback executed once the maximize is clicked.
            view.on( 'execute', () => {
			   console.log(editor);
			   console.log(editor.sourceElement);
			   console.log(editor.sourceElement.nextSibling);
			   console.log(editor.sourceElement.nextSibling.classList);
			   editor.sourceElement.nextSibling.classList.add("ABC");
			   console.log(editor.sourceElement.nextSibling.classList);
            } );

			return view;
		} );
	}
}
