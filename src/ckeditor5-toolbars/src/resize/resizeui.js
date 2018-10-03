import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import maximizeIcon from '../../theme/icons/maximize.svg';

const RESIZE = 'resize';


export default class ResizeUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {

		console.log( 'ResizeUI was initialized' );

		const editor = this.editor;
		const t = editor.t;

        console.log(editor);
        console.log(t);
		console.log(t.ui);
	}
}
