
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ResizeUI from './resize/resizeui';

export default class ResizeUI extends Plugin {
	init() {

		console.log( 'ResizeUI was initialized' );

	var resizediv="<div class='ck ck-editor__bottom ck-reset_all'>"+
	"<div style='ck-rounded-corners'>'\u25E3'<div>"+
	"<div>";
		console.log(resizediv);
		console.log(this.editor);
		console.log(this.editor.sourceElement);
		console.log(this.editor.sourceElement.nextSibling);
		
		console.log(this.editor.sourceElement.nextSibling.innerHTML);
	this.editor.sourceElement.nextSibling.innerHTML = this.editor.sourceElement.nextSibling.innerHTML + resizediv;
	}
}
