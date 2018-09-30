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

				if(editor.sourceElement.nextSibling.classList.contains("ckeditorfullsize"))
				{
					editor.sourceElement.nextSibling.classList.remove("ckeditorfullsize");
					editor.sourceElement.nextSibling.style="";
					editor.sourceElement.nextSibling.children[2].children[0].style="";
				}
				else
				{
					 editor.sourceElement.nextSibling.classList.add("ckeditorfullsize");
					 var heightvalue = window.innerHeight - editor.sourceElement.nextSibling.children[1].offsetHeight - 2;
					 var stylevalue= "height: " + heightvalue + "px;";
					 var fullstyle="display: block; z-index: 999; position: absolute; left: 0px; top: 0px; width: 100%;"
					 editor.sourceElement.nextSibling.style=fullstyle;
					 editor.sourceElement.nextSibling.children[2].children[0].style=stylevalue;
				}
            } );

			return view;
		} );
	}
}
