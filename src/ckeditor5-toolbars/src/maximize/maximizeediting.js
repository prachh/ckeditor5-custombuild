
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const MAXIMIZE = 'maximize';


export default class MaximizeEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Allow bold attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: MAXIMIZE } );

		// Build converter from model to view for data an7d editing pipelines.
		

		editor.conversion.attributeToElement( {
			model: MAXIMIZE,
			view: 'strong',
			upcastAlso: [
				'b',
				{
					styles: {
						'font-weight': 'underline'
					}
				}
			]
		} );

		// Create bold command.
		editor.commands.add( MAXIMIZE, new AttributeCommand( editor, MAXIMIZE ) );

		// Set the Ctrl+B keystroke.
		editor.keystrokes.set( 'CTRL+M', MAXIMIZE );
	}
}
